import {
  AlorOpenApiOptions,
  Endpoint,
  WssEndpoint,
  IService,
  WssEndpointBeta,
} from "./types";
import axios, { AxiosInstance } from "axios";
import { SubscriptionsService } from "./streams/SubscriptionsService/SubscriptionsService";
import { refreshTokenMiddleware } from "./utils";
import { ClientInfoService } from "./services/ClientInfoService/ClientInfoService";
import { InstrumentsService } from "./services/InstrumentsService/InstrumentsService";
import { OrdersService } from "./services/OrdersService/OrdersService";
import { StopOrdersService } from "./services/StopOrdersService/StopOrdersService";
import { BaseStream } from "./streams/base-stream";
import { WSSOrdersService } from "./streams/WSSOrdersService/WSSOrdersService";

const defaults: Required<
  Pick<AlorOpenApiOptions, "endpoint" | "wssEndpoint" | "wssEndpointBeta">
> = {
  endpoint: Endpoint.PROD,
  wssEndpoint: WssEndpoint.PROD,
  wssEndpointBeta: WssEndpointBeta.PROD,
};

export class AlorApi {
  public readonly http: AxiosInstance;
  public accessToken: string;

  public readonly options: AlorOpenApiOptions;

  public readonly refresh: any;

  protected services: Map<IService, IService> = new Map();

  protected _subscriptions: Map<IService, IService> = new Map();

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

        this.onAuthCallback(token);
      },
    );
  }

  onAuthCallback(...args) {}

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

  get subscriptions() {
    return this.getOrCreateStream(SubscriptionsService);
  }

  setMaxListeners = ({
    subscriptions,
    ordersWss,
  }: {
    subscriptions?: number;
    ordersWss?: number;
  }) => {
    if (subscriptions) this.subscriptions.setMaxListeners(subscriptions);
    if (ordersWss) this.ordersWss.setMaxListeners(ordersWss);
  };

  get ordersWss() {
    return this.getOrCreateStream(WSSOrdersService);
  }

  private getOrCreateService<S extends IService>(type: {
    new (http: AxiosInstance): S;
  }): S {
    if (!this.services.get(type)) {
      this.services.set(type, new type(this.http));
    }
    return this.services.get(type) as S;
  }

  private getOrCreateStream<S extends BaseStream>(type: {
    new (api: AlorApi): S;
  }): S {
    if (!this._subscriptions.get(type)) {
      this._subscriptions.set(type, new type(this));
    }
    return this._subscriptions.get(type) as S;
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
