import { BaseStream } from "./base-stream";
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
  WithoutOpcode,
} from "../types";
import { MarketSubscription } from "../market-subscription";
import { v4 as uuidv } from "uuid";
import AlorApi from "../api";

export class MarketStream extends BaseStream {
  private readonly api: AlorApi;

  constructor(api: AlorApi) {
    super(api.options, api.refresh);
    this.api = api;
  }
  /**
   * Подписка на информацию о заявках
   */
  async orders(
    req: WithoutOpcode<OrdersSubscribeRequest>,
    dataHandler: (order: Order) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<OrdersSubscribeRequest, Order>({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction?) => ({
        ...req,
        opcode:
          subscriptionAction || SubscriptionAction.OrdersGetAndSubscribeV2,
        token: this.api.accessToken,
        guid,
      }),
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на информацию о стоп-заявках
   */
  async stoporders(
    req: WithoutOpcode<StopOrdersSubscribeRequest>,
    dataHandler: (stoporder: StopOrder) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<
      StopOrdersSubscribeRequest,
      StopOrder
    >({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction?) => ({
        ...req,
        opcode:
          subscriptionAction || SubscriptionAction.StopOrdersGetAndSubscribeV2,
        token: this.api.accessToken,
        guid,
      }),
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на информацию о текущих позициях по торговым инструментам и деньгам
   */
  async positions(
    req: WithoutOpcode<PositionSubscribeRequest>,
    dataHandler: (position: Position) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<
      PositionSubscribeRequest,
      Position
    >({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction?) => ({
        ...req,
        opcode:
          subscriptionAction || SubscriptionAction.PositionsGetAndSubscribeV2,
        token: this.api.accessToken,
        guid,
      }),
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на сводную информацию по портфелю.
   */
  async summary(
    req: WithoutOpcode<SummarySubscribeRequest>,
    dataHandler: (quotes: Summary) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<
      SummarySubscribeRequest,
      Summary
    >({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction?) => ({
        ...req,
        opcode:
          subscriptionAction || SubscriptionAction.SummariesGetAndSubscribeV2,
        token: this.api.accessToken,
        guid,
      }),
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на информацию о котировках.
   */
  async quotes(
    req: WithoutOpcode<QuotesSubscribeRequest>,
    dataHandler: (quotes: Quotes) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<QuotesSubscribeRequest, Quotes>(
      {
        requestGuid: guid,
        dataHandler,
        buildRequest: (subscriptionAction?) => ({
          ...req,
          opcode: subscriptionAction || SubscriptionAction.QuotesSubscribe,
          token: this.api.accessToken,
          guid,
        }),
      },
    );
    return this.watch(subscription);
  }

  /**
   * Подписка на стакан.
   */
  async orderBook(
    req: WithoutOpcode<OrderbookSubscribeRequest>,
    dataHandler: (orderbook: Orderbook) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<
      OrderbookSubscribeRequest,
      Orderbook
    >({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction?) => ({
        ...req,
        opcode:
          subscriptionAction || SubscriptionAction.OrderBookGetAndSubscribe,
        guid,
        token: this.api.accessToken,
      }),
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на свечи.
   */
  async candles(
    req: WithoutOpcode<CandlesSubscribeRequest>,
    dataHandler: (candle: Candle) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<
      CandlesSubscribeRequest,
      Candle
    >({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction) => ({
        ...req,
        opcode: subscriptionAction || SubscriptionAction.BarsGetAndSubscribe,
        token: this.api.accessToken,
        guid,
      }),
    });
    return this.watch(subscription);
  }

  /**
   * Подписка на все сделки.
   */
  async alltrades(
    req: WithoutOpcode<AllTradesSubscribeRequest>,
    dataHandler: (trade: Trade) => unknown,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<
      AllTradesSubscribeRequest,
      Trade
    >({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction) => ({
        ...req,
        opcode:
          subscriptionAction || SubscriptionAction.AllTradesGetAndSubscribe,
        token: this.api.accessToken,
        guid,
      }),
    });
    return this.watch(subscription);
  }
}
