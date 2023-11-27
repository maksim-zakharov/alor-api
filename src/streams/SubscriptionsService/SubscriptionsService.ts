import { BaseStream } from "../base-stream";
import {
  ConditionalResult,
  SubscriptionAction,
  WithoutOpcode,
} from "../../types";
import { MarketSubscription, ResponseData } from "../../market-subscription";
import { v4 as uuidv } from "uuid";
import AlorApi from "../../api";
import {
  WsReqBarsGetAndSubscribe,
  WsReqOrderBookGetAndSubscribe,
  WsReqRisksGetAndSubscribe,
  WsResBarsGetAndSubscribe,
  WsResOrderBookGetAndSubscribe,
  WsReqQuotesSubscribe,
  WsResQuotesSubscribe,
  WsReqPositionsGetAndSubscribe,
  WsResPositionsGetAndSubscribe,
  WsReqSummariesGetAndSubscribeV2,
  WsResSummariesGetAndSubscribeV2,
  WsResRisksGetAndSubscribe,
  WsResOrdersGetAndSubscribe,
  WsReqOrdersGetAndSubscribe,
  WsReqStopOrdersGetAndSubscribeV2,
  WsResStopOrdersGetAndSubscribe,
  WsReqSpectraRisksGetAndSubscribe,
  WsResSpectraRisksGetAndSubscribe,
  WsReqBaseObject,
  WsReqTradesGetAndSubscribe,
  WsResTradesGetAndSubscribe,
  WsReqInstrumentsGetAndSubscribeV2,
  Security,
  WsReqAllTradesGetAndSubscribe,
  Alltrade,
  WsResStopOrdersGetAndSubscribeWarp,
  DevSecuritiesSearchExchangeParams,
  SecuritiesSlim,
  SecuritiesHeavy,
  Securities,
  WsResSlimStopOrdersGetAndSubscribeWarp,
  WsResHeavyStopOrdersGetAndSubscribeWarp,
} from "../../models/models";

export class SubscriptionsService extends BaseStream {
  constructor(api: AlorApi) {
    super(api);
  }

  /**
   * Подписка на "биржевой стакан"
   */
  orderBook = (
    req: WithoutOpcode<WsReqOrderBookGetAndSubscribe>,
    dataHandler: (orderbook: WsResOrderBookGetAndSubscribe["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.OrderBookGetAndSubscribe,
    );

  /**
   * Подписка на историю цен (свечи)
   */
  candles = (
    req: WithoutOpcode<WsReqBarsGetAndSubscribe>,
    dataHandler: (candle: WsResBarsGetAndSubscribe["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.BarsGetAndSubscribe,
    );

  /**
   * Подписка на информацию о котировках.
   */
  quotes = (
    req: WithoutOpcode<WsReqQuotesSubscribe>,
    dataHandler: (quotes: WsResQuotesSubscribe["data"]) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.QuotesSubscribe);

  /**
   * Подписка на все сделки.
   */
  alltrades = (
    req: WithoutOpcode<WsReqAllTradesGetAndSubscribe>,
    dataHandler: (quotes: Alltrade) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.AllTradesGetAndSubscribe,
    );

  /**
   * Подписка на информацию о текущих позициях по торговым инструментам и деньгам
   */
  positions = (
    req: WithoutOpcode<WsReqPositionsGetAndSubscribe>,
    dataHandler: (position: WsResPositionsGetAndSubscribe["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.PositionsGetAndSubscribeV2,
    );

  /**
   * Подписка на сводную информацию по портфелю.
   */
  summary = (
    req: WithoutOpcode<WsReqSummariesGetAndSubscribeV2>,
    dataHandler: (quotes: WsResSummariesGetAndSubscribeV2["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.SummariesGetAndSubscribeV2,
    );

  /**
   * Подписка на информацию по портфельным рискам
   */
  risks = (
    req: WithoutOpcode<WsReqRisksGetAndSubscribe>,
    dataHandler: (quotes: WsResRisksGetAndSubscribe["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.RisksGetAndSubscribe,
    );

  /**
   * Подписка на информацию по рискам срочного рынка (FORTS)
   */
  spectraRisks = (
    req: WithoutOpcode<WsReqSpectraRisksGetAndSubscribe>,
    dataHandler: (quotes: WsResSpectraRisksGetAndSubscribe["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.SpectraRisksGetAndSubscribe,
    );

  /**
   * Подписка на сделки
   */
  trades = (
    req: WithoutOpcode<WsReqTradesGetAndSubscribe>,
    dataHandler: (order: WsResTradesGetAndSubscribe["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.TradesGetAndSubscribeV2,
    );

  /**
   * Подписка на информацию о заявках
   */
  orders = (
    req: WithoutOpcode<WsReqOrdersGetAndSubscribe>,
    dataHandler: (order: WsResOrdersGetAndSubscribe["data"]) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.OrdersGetAndSubscribeV2,
    );

  /**
   * Подписка на информацию о заявках
   */
  instruments = (
    req: WithoutOpcode<WsReqInstrumentsGetAndSubscribeV2>,
    dataHandler: (order: Security) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.InstrumentsGetAndSubscribeV2,
    );

  /**
   * Подписка на информацию о стоп-заявках
   */
  stoporders = <Params extends WithoutOpcode<WsReqStopOrdersGetAndSubscribeV2>>(
    req: Params,
    dataHandler: (
      stoporder: ConditionalResult<
        Params,
        WsResSlimStopOrdersGetAndSubscribeWarp,
        WsResHeavyStopOrdersGetAndSubscribeWarp,
        WsResStopOrdersGetAndSubscribeWarp
      >["data"],
    ) => unknown,
  ) =>
    this.baseSubscribe(
      req,
      dataHandler,
      SubscriptionAction.StopOrdersGetAndSubscribeV2,
    );

  private baseSubscribe<Req extends WsReqBaseObject, Res extends ResponseData>(
    req: WithoutOpcode<Req>,
    dataHandler: (quotes: Res) => unknown,
    opcode: SubscriptionAction,
  ) {
    const guid = uuidv();
    const subscription = new MarketSubscription<Req, Res>({
      requestGuid: guid,
      dataHandler,
      buildRequest: (subscriptionAction?) => ({
        ...req,
        opcode: subscriptionAction || opcode,
        token: this.api.accessToken,
        guid,
      }),
    });
    return this.watch(subscription);
  }
}
