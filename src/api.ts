import { AlorOpenApiOptions, Endpoint, WssEndpoint, IService } from "./types";
import axios, { AxiosInstance } from "axios";
import { MarketStream } from "./streams/market-stream";
import { refreshTokenMiddleware } from "./utils";
import { ClientInfoService } from "./services/ClientInfoService/ClientInfoService";
import { InstrumentsService } from "./services/InstrumentsService/InstrumentsService";
import { OrdersService } from "./services/OrdersService/OrdersService";
import { StopOrdersService } from "./services/StopOrdersService/StopOrdersService";

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

  get orders() {
    return this.getOrCreateService(OrdersService);
  }

  get stoporders() {
    return this.getOrCreateService(StopOrdersService);
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

  get subscriptions() {
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
}

export default AlorApi;
