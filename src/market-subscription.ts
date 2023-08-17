import {
  AllTradesSubscribeRequest,
  Candle,
  CandlesSubscribeRequest,
  Order,
  Orderbook,
  OrderbookSubscribeRequest,
  OrdersSubscribeRequest,
  Position,
  PositionSubscribeRequest,
  Quotes,
  QuotesSubscribeRequest,
  StopOrder,
  StopOrdersSubscribeRequest,
  SubscriptionAction,
  Summary,
  SummarySubscribeRequest,
  Trade,
} from './types';

type ResponseData =
  | Order
  | StopOrder
  | Orderbook
  | Candle
  | Trade
  | Quotes
  | Summary
  | Position;

type MarketSubscriptionOptions<R, D> = {
  buildRequest: (subscriptionAction: SubscriptionAction | undefined) => R;
  dataHandler: (data: D) => unknown;
  requestGuid: string;
};

type SubscribeRequest =
  | AllTradesSubscribeRequest
  | CandlesSubscribeRequest
  | OrderbookSubscribeRequest
  | QuotesSubscribeRequest
  | SummarySubscribeRequest
  | PositionSubscribeRequest
  | OrdersSubscribeRequest
  | StopOrdersSubscribeRequest;

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

export class MarketSubscription<
  R extends SubscribeRequest,
  D extends ResponseData,
> {
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
    this.dataHandler(uniRes);
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

  protected dataHandler({ data, guid }: UniversalMarketResponse<D>) {
    if (!data || !guid) return;
    if (this.options.requestGuid === guid) {
      this.options.dataHandler(data);
    }
  }
}
