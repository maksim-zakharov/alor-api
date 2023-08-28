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
  Timeframe,
  WssEndpoint,
  IService,
} from "./types";
import axios, { AxiosInstance } from "axios";
import { v4 as uuidv } from "uuid";
import { MarketStream } from "./streams/market-stream";
import { refreshTokenMiddleware } from "./utils";
import { ClientInfoService } from "./services/ClientInfoService";
import { InstrumentsService } from "./services/InstrumentsService";

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

  protected services: Map<IService, IService> = new Map();

  constructor(options: AlorOpenApiOptions) {
    this.http = axios;
    this.options = Object.assign({}, defaults, options);

    if (options.accessToken) {
      this.accessToken = options.accessToken;
    }

    this.http.defaults.baseURL = this.options.endpoint;

    this.refresh = refreshTokenMiddleware(
      this.http,
      this.options.token,
      (token) => {
        this.accessToken = token;
        console.log(`[AlorApi] Access Token получен`);
      },
    );
  }

  get clientInfo() {
    return this.getOrCreateService(ClientInfoService);
  }

  get instruments() {
    return this.getOrCreateService(InstrumentsService);
  }

  private getOrCreateService<S extends IService>(type: {
    new (http: AxiosInstance): S;
  }): S {
    if (!this.services.get(type)) {
      this.services.set(type, new type(this.http));
    }
    return this.services.get(type) as S;
  }

  private getOrCreateStream() {
    if (!this._stream) {
      this._stream = new MarketStream(this);
    }
    return this._stream;
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

  async getCandles(params: {
    exchange: Exchange;
    symbol: string;
    tf: Timeframe;
  }): Promise<RiskCollection | ApiError> {
    const requestId = uuidv();

    try {
      const result = await this.http
        .get(`/md/v2/history`, {
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
