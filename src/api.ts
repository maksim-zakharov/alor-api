import {
  AlorOpenApiOptions,
  ApiError,
  CancelOrderRequest,
  Endpoint,
  Exchange,
  GetOrderRequest,
  GetOrdersRequest,
  GetPositionRequest,
  GetPositionsRequest,
  GetStopOrderRequest,
  GetStopOrdersRequest,
  Order,
  OrderType,
  Position,
  Quotes,
  RiskCollection,
  Security,
  SendLimitOrderRequest,
  SendMarketOrderRequest,
  SendOrderResponse,
  SendStopLimitOrderRequest,
  SendStopOrderRequest,
  StopOrder,
  Summary,
  WssEndpoint,
} from "./types";
import axios, { AxiosInstance } from "axios";
import { v4 as uuidv } from "uuid";
import { MarketStream } from "./streams/market-stream";
import { refreshTokenMiddleware } from "./utils";

const defaults: Required<Pick<AlorOpenApiOptions, "endpoint" | "wssEndpoint">> =
  {
    endpoint: Endpoint.PROD,
    wssEndpoint: WssEndpoint.PROD,
  };

export class AlorApi {
  public readonly http: AxiosInstance;
  public accessToken: string;
  private _stream: MarketStream;

  public readonly options: AlorOpenApiOptions;

  public readonly refresh: any;

  constructor(options: AlorOpenApiOptions) {
    this.http = axios;
    this.options = Object.assign({}, defaults, options);

    this.http.defaults.baseURL = this.options.endpoint;

    this.refresh = refreshTokenMiddleware(
      this.http,
      this.options.token,
      (token) => {
        this.accessToken = token;
        console.log(`[AlorApi] Access Token получен`);
      },
    );

    // this.refresh();
  }

  private getOrCreateStream() {
    if (!this._stream) {
      this._stream = new MarketStream(this);
    }
    return this._stream;
  }

  get orders() {
    return {
      sendMarketOrder: (req: SendMarketOrderRequest) =>
        this.sendMarketOrder(req),
      sendLimitOrder: (req: SendLimitOrderRequest) => this.sendLimitOrder(req),
      sendStopLimitOrder: (req: SendStopLimitOrderRequest) =>
        this.sendStopLimitOrder(req),
      getOrders: (req: GetOrdersRequest) => this.getOrders(req),
      getOrderById: (req: GetOrderRequest) => this.getOrderById(req),
      cancelOrder: (req: Omit<CancelOrderRequest, "stop">) =>
        this.cancelOrder({ ...req, stop: false }),
    };
  }

  get stoporders() {
    return {
      changeStopOrder: (orderId: string, req: SendStopOrderRequest) =>
        this.changeStopOrder(orderId, req),
      sendStopOrder: (req: SendStopOrderRequest) => this.sendStopOrder(req),
      getStopOrders: (req: GetStopOrdersRequest) => this.getStopOrders(req),
      getStopOrderByOrderId: (req: GetStopOrderRequest) =>
        this.getStopOrderByOrderId(req),
      cancelStopOrder: (req: Omit<CancelOrderRequest, "stop">) =>
        this.cancelOrder({ ...req, stop: true }),
    };
  }

  get securities() {
    return {
      getQuotes: (req) => this.getQuotes(req),
      getSecurities: (req) => this.getSecurities(req),
    };
  }

  get portfolio() {
    return {
      getPositions: (req: GetPositionsRequest) => this.getPositions(req),
      getPositionBySymbol: (req: GetPositionRequest) =>
        this.getPositionBySymbol(req),
      getSummary: (req) => this.getSummary(req),
    };
  }

  get stream() {
    return this.getOrCreateStream();
  }

  async refreshToken() {
    const result = await this.http
      .post(`https://oauth.alor.ru/refresh?token=${this.options.token}`)
      .then((r) => r.data);

    if (result?.AccessToken) {
      this.accessToken = result?.AccessToken;
      this.http.defaults.headers[
        "Authorization"
      ] = `Bearer ${this.accessToken}`;
    }

    return result;
  }

  private async getPositions({
    exchange,
    portfolio,
    withoutCurrency,
  }: GetPositionsRequest): Promise<Position[]> {
    return this.http
      .get(
        `/md/v2/Clients/${exchange}/${portfolio}/positions?format=Simple&withoutCurrency=${withoutCurrency}`,
      )
      .then((r) => r.data);
  }

  private async getPositionBySymbol({
    symbol,
    exchange,
    portfolio,
    withoutCurrency,
  }: GetPositionRequest): Promise<Position> {
    return this.http
      .get(
        `/md/v2/Clients/${exchange}/${portfolio}/positions/${symbol}?format=Simple&withoutCurrency=${withoutCurrency}`,
      )
      .then((r) => r.data);
  }

  private async getStopOrders({
    exchange,
    portfolio,
  }: GetStopOrdersRequest): Promise<StopOrder[]> {
    return this.http
      .get(`/md/v2/clients/${exchange}/${portfolio}/stoporders?format=SIMPLE`)
      .then((r) => r.data);
  }

  private async getStopOrderByOrderId({
    orderId,
    exchange,
    portfolio,
  }: GetStopOrderRequest): Promise<StopOrder> {
    return this.http
      .get(
        `/md/v2/clients/${exchange}/${portfolio}/stoporders/${orderId}?format=SIMPLE`,
      )
      .then((r) => r.data);
  }

  private async getOrders({
    exchange,
    portfolio,
  }: GetOrdersRequest): Promise<Order[]> {
    return this.http
      .get<Order[]>(`/md/v2/clients/${exchange}/${portfolio}/orders`)
      .then((r) => r.data);
  }

  private async getOrderById({
    orderId,
    exchange,
    portfolio,
  }: GetOrderRequest): Promise<Order> {
    return this.http
      .get<Order>(`/md/v2/clients/${exchange}/${portfolio}/orders/${orderId}`)
      .then((r) => r.data);
  }

  private async getSummary({
    exchange,
    portfolio,
  }: {
    exchange: Exchange;
    portfolio: string;
  }): Promise<Summary> {
    return this.http
      .get(`/md/v2/clients/${exchange}/${portfolio}/summary`)
      .then((r) => r.data);
  }

  private async getSecurities({
    exchange,
  }: {
    exchange: Exchange;
  }): Promise<Security[]> {
    return this.http.get(`/md/v2/Securities/${exchange}`).then((r) => r.data);
  }

  private async getQuotes({
    exchange,
    tickers,
  }: {
    exchange: Exchange;
    tickers: string[];
  }): Promise<Quotes[]> {
    const summary = await this.http
      .get(
        `/md/v2/Securities/${tickers.map(
          (ticker) => `${exchange}:${ticker}`,
        )}/quotes`,
      )
      .then((r) => r.data);

    return summary;
  }

  private async sendMarketOrder(
    body: SendMarketOrderRequest,
  ): Promise<SendOrderResponse | ApiError> {
    const requestId = uuidv();

    try {
      const result = await this.http
        .post(
          `/commandapi/warptrans/TRADE/v2/client/orders/actions/market`,
          { ...body, type: OrderType.Market },
          {
            headers: {
              "X-ALOR-REQID": requestId,
            },
          },
        )
        .then((r) => r.data);

      return result;
    } catch (e) {
      const error: ApiError = {
        requestId: requestId,
        status: e.response?.status,
        code: e.response?.data?.code,
        description: e.response?.data?.message,
      };
      // this.log(error);

      return error;
    }
  }

  private async sendLimitOrder(
    body: SendLimitOrderRequest,
  ): Promise<SendOrderResponse | ApiError> {
    const requestId = uuidv();

    try {
      const result = await this.http
        .post(
          `/commandapi/warptrans/TRADE/v2/client/orders/actions/limit`,
          { ...body, type: OrderType.Limit },
          {
            headers: {
              "X-ALOR-REQID": requestId,
            },
          },
        )
        .then((r) => r.data);

      return result;
    } catch (e) {
      const error: ApiError = {
        requestId: requestId,
        status: e.response?.status,
        code: e.response?.data?.code,
        description: e.response?.data?.message,
      };
      // this.log(error);

      return error;
    }
  }

  private async sendStopLimitOrder(
    body: SendStopLimitOrderRequest,
  ): Promise<SendOrderResponse | ApiError> {
    const requestId = uuidv();

    try {
      const result = await this.http
        .post(
          `/commandapi/warptrans/TRADE/v2/client/orders/actions/stopLimit`,
          body,
          {
            headers: {
              "X-ALOR-REQID": requestId,
            },
          },
        )
        .then((r) => r.data);

      return result;
    } catch (e) {
      const error: ApiError = {
        requestId: requestId,
        status: e.response?.status,
        code: e.response?.data?.code,
        description: e.response?.data?.message,
      };
      // this.log(error);

      return error;
    }
  }

  async getRiskRates(params: {
    exchange: Exchange;
    ticker?: string;
    search?: string;
  }): Promise<RiskCollection | ApiError> {
    const requestId = uuidv();

    try {
      const result = await this.http
        .get(`/md/v2/risk/rates`, {
          params,
        })
        .then((r) => r.data);

      return result;
    } catch (e) {
      const error: ApiError = {
        requestId: requestId,
        status: e.response?.status,
        code: e.response?.data?.code,
        description: e.response?.data?.message,
      };
      // this.log(error);

      return error;
    }
  }

  private async sendStopOrder(
    body: SendStopOrderRequest,
  ): Promise<SendOrderResponse | ApiError> {
    const requestId = uuidv();

    try {
      const result = await this.http
        .post(
          `/commandapi/warptrans/TRADE/v2/client/orders/actions/stop`,
          body,
          {
            headers: {
              "X-ALOR-REQID": requestId,
            },
          },
        )
        .then((r) => r.data);

      return result;
    } catch (e) {
      const error: ApiError = {
        requestId: requestId,
        status: e.response?.status,
        code: e.response?.data?.code,
        description: e.response?.data?.message,
      };
      // this.log(error);

      return error;
    }
  }

  private async changeStopOrder(
    orderId: string | number,
    body: SendStopOrderRequest,
  ): Promise<SendOrderResponse | ApiError> {
    const requestId = uuidv();

    try {
      const result = await this.http
        .put(
          `/commandapi/warptrans/TRADE/v2/client/orders/actions/stopLimit/${orderId}`,
          body,
          {
            headers: {
              "X-ALOR-REQID": requestId,
            },
          },
        )
        .then((r) => r.data);

      return result;
    } catch (e) {
      const error: ApiError = {
        requestId: requestId,
        status: e.response?.status,
        code: e.response?.data?.code,
        description: e.response?.data?.message,
      };
      // this.log(error);

      return error;
    }
  }

  private async cancelOrder({
    orderId,
    portfolio,
    exchange,
    stop,
  }: CancelOrderRequest): Promise<any> {
    try {
      const result = await this.http
        .delete(`/commandapi/warptrans/TRADE/v2/client/orders/${orderId}`, {
          params: {
            portfolio,
            exchange,
            stop,
          },
        })
        .then((r) => r.data);

      return result;
    } catch (e) {
      const error: ApiError = {
        status: e.response?.status,
        code: e.response?.data?.code,
        description: e.response?.data?.message,
      };
      // this.log(error);

      return error;
    }
  }
}

export default AlorApi;
