import { SubscriptionAction } from "./types";
import {
  WsResBarsGetAndSubscribe,
  WsResOrderBookGetAndSubscribe,
  WsResQuotesSubscribe,
  WsResPositionsGetAndSubscribe,
  WsResSummariesGetAndSubscribeV2,
  WsResRisksGetAndSubscribe,
  WsResOrdersGetAndSubscribe,
  WsResStopOrdersGetAndSubscribe,
  WsResSpectraRisksGetAndSubscribe,
  Security,
  CommandwsResHandledSuccessfully,
  WsResTradesGetAndSubscribe,
  Alltrade,
} from "./models/models";

export type ResponseData =
  | WsResBarsGetAndSubscribe["data"]
  | WsResOrderBookGetAndSubscribe["data"]
  | WsResQuotesSubscribe["data"]
  | WsResPositionsGetAndSubscribe["data"]
  | WsResSummariesGetAndSubscribeV2["data"]
  | WsResRisksGetAndSubscribe["data"]
  | WsResOrdersGetAndSubscribe["data"]
  | WsResStopOrdersGetAndSubscribe["data"]
  | WsResSpectraRisksGetAndSubscribe["data"]
  | Security
  | Alltrade
  | WsResTradesGetAndSubscribe["data"]
  | CommandwsResHandledSuccessfully;

type MarketSubscriptionOptions<R, D> = {
  isBeta?: boolean;
  buildRequest: (subscriptionAction: SubscriptionAction | undefined) => any; // R;
  dataHandler: (data: D) => unknown;
  requestGuid: string;
};

/**
 * Универсальный ответ (одинаковые поля для разных типов подписок)
 */
export type UniversalMarketResponse<D> = {
  guid?: string;
  httpCode?: number;
  requestGuid?: string;
  data?: D;
  message?: string;
};

export class MarketSubscription<R, D extends ResponseData> {
  protected waitingStatusResolve?: () => unknown;
  protected waitingStatusReject?: (
    error: UniversalMarketResponse<D>,
  ) => unknown;

  constructor(protected options: MarketSubscriptionOptions<R, D>) {
    this.handler = this.handler.bind(this);
  }

  getRequest(subscriptionAction?: SubscriptionAction): R {
    return this.options.buildRequest(subscriptionAction);
  }

  handler(event) {
    const uniRes = JSON.parse(event as string) as UniversalMarketResponse<D>;
    this.statusHandler(uniRes);
    this.options.isBeta
      ? this.betaDataHandler(uniRes)
      : this.dataHandler(uniRes);
  }

  async waitStatus() {
    try {
      await new Promise<void>((resolve, reject) => {
        this.waitingStatusResolve = resolve;
        this.waitingStatusReject = reject;
      });
    } finally {
      this.waitingStatusResolve = undefined;
      this.waitingStatusReject = undefined;
    }
  }

  protected statusHandler({
    httpCode,
    requestGuid,
    message,
  }: UniversalMarketResponse<D>) {
    if (!this.waitingStatusResolve || !this.waitingStatusReject) return;
    if (!httpCode || !requestGuid) return;
    if (requestGuid !== this.options.requestGuid) return;
    if (httpCode !== 200) {
      this.waitingStatusReject({
        httpCode,
        requestGuid,
        message,
      });
    } else {
      this.waitingStatusResolve();
    }
  }

  protected betaDataHandler(response: UniversalMarketResponse<D>) {
    if (this.options.requestGuid === response.requestGuid) {
      this.options.dataHandler(response as any);
    }
  }

  protected dataHandler({ data, guid }: UniversalMarketResponse<D>) {
    if (!data || !guid) return;
    if (this.options.requestGuid === guid) {
      this.options.dataHandler(data);
    }
  }
}
