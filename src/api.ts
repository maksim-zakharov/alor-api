import {
    AlorOpenApiOptions,
    ApiError, Endpoint,
    Exchange,
    Order,
    Position,
    Quotes,
    RiskCollection,
    Security,
    SendOrderRequest,
    SendOrderResponse,
    SendStopLimitRequest,
    SendStopOrderRequest,
    StopOrder,
    Summary,
} from './types';
import axios, {AxiosInstance} from 'axios';
import {v4 as uuidv} from 'uuid';
import {MarketStream} from "./streams/market-stream";

const defaults: Required<Pick<AlorOpenApiOptions, 'endpoint'>> = {
    endpoint: Endpoint.PROD,
};
export class AlorApi {
    private readonly http: AxiosInstance;
    private _accessToken: string;
    private _stream: MarketStream;

    public readonly options: AlorOpenApiOptions;

    constructor(options: AlorOpenApiOptions) {
        this.http = axios;
        this.options = Object.assign({}, defaults, options);

        this.http.defaults.baseURL = this.options.endpoint;
    }

    private getOrCreateStream() {
        if (!this._stream) {
            this._stream = new MarketStream(this);
        }
        return this._stream;
    }

    get stoporders() {
        return {
            changeStopOrder: this.changeStopOrder,
            sendStopOrder: this.sendStopOrder,
            getStopOrders: this.getStopOrders,
            cancelStopOrder: (req) => this.cancelOrder({ ...req, stop: true }),
        };
    }

    get stream() { return this.getOrCreateStream(); }

    async refreshToken() {
        const result = await this.http
            .post(`https://oauth.alor.ru/refresh?token=${this.options.token}`)
            .then((r) => r.data);

        if (result?.AccessToken) {
            this._accessToken = result?.AccessToken;
            this.http.defaults.headers[
                'Authorization'
                ] = `Bearer ${this._accessToken}`;
        }

        return result;
    }

    async getPositions({
                           exchange,
                           portfolio,
                       }: {
        exchange: Exchange;
        portfolio: string;
    }): Promise<Position[]> {
        return this.http
            .get(
                `/md/v2/Clients/${exchange}/${portfolio}/positions?format=Simple&withoutCurrency=true`,
            )
            .then((r) => r.data);
    }

    private async getStopOrders({
                                    exchange,
                                    portfolio,
                                }: {
        exchange: Exchange;
        portfolio: string;
    }): Promise<StopOrder[]> {
        return this.http
            .get(`/md/v2/clients/${exchange}/${portfolio}/stoporders?format=SIMPLE`)
            .then((r) => r.data);
    }

    async getOrders({
                        exchange,
                        portfolio,
                    }: {
        exchange: Exchange;
        portfolio: string;
    }): Promise<Order[]> {
        return this.http
            .get<Order[]>(`/md/v2/clients/${exchange}/${portfolio}/orders`)
            .then((r) => r.data);
    }

    async getSummary({
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

    async getSecurities({
                            exchange,
                        }: {
        exchange: Exchange;
    }): Promise<Security[]> {
        return this.http
            .get(`/md/v2/Securities/${exchange}`)
            .then((r) => r.data);
    }

    async getQuotes({
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

    async sendOrder(
        body: SendOrderRequest,
    ): Promise<SendOrderResponse | ApiError> {
        const requestId = uuidv();

        try {
            const result = await this.http
                .post(
                    `/commandapi/warptrans/TRADE/v2/client/orders/actions/limit`,
                    body,
                    {
                        headers: {
                            'X-ALOR-REQID': requestId,
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

    async sendStopLimitOrder(
        body: SendStopLimitRequest,
    ): Promise<SendOrderResponse | ApiError> {
        const requestId = uuidv();

        try {
            const result = await this.http
                .post(
                    `/commandapi/warptrans/TRADE/v2/client/orders/actions/stopLimit`,
                    body,
                    {
                        headers: {
                            'X-ALOR-REQID': requestId,
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

    async getRiskRates({
                           exchange,
                           ticker,
                       }: {
        exchange: Exchange;
        ticker: string;
    }): Promise<RiskCollection | ApiError> {
        const requestId = uuidv();

        try {
            const result = await this.http
                .get(`/md/v2/risk/rates`, {
                    params: {
                        exchange,
                        ticker,
                    },
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
                            'X-ALOR-REQID': requestId,
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
                            'X-ALOR-REQID': requestId,
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

    async cancelOrder({
                          orderId,
                          portfolio,
                          exchange,
                          stop,
                      }: {
        orderId: number | string;
        portfolio: string;
        exchange: Exchange;
        stop: boolean;
    }): Promise<any> {
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
