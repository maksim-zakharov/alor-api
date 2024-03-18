import { BaseStream } from "../base-stream";
import { SubscriptionAction, WithoutOpcode } from "../../types";
import { MarketSubscription, ResponseData } from "../../market-subscription";
import { v4 as uuidv } from "uuid";
import AlorApi from "../../api";
import {
  CommandwsReqCreateMarketOrder,
  WsResHandledSuccessfully,
  CommandwsReqAuthorize,
  CommandwsResAuthorize,
  CommandwsReqCreateLimitOrder,
  CommandwsReqCreateStopOrder,
  CommandwsReqCreateStopLimitOrder,
  CommandwsReqUpdateMarketOrder,
  CommandwsReqUpdateStopLimitOrder,
  CommandwsReqUpdateStopOrder,
  CommandwsReqUpdateLimitOrder,
  CommandwsReqDeleteStopLimitOrder,
  CommandwsReqDeleteStopOrder,
  CommandwsReqDeleteMarketOrder,
  CommandwsReqDeleteLimitOrder,
} from "../../models/models";

export class WSSOrdersService extends BaseStream {
  constructor(api: AlorApi) {
    super(api);
  }

  /**
   * Авторизация
   */
  authorize = (
    req: WithoutOpcode<CommandwsReqAuthorize>,
    dataHandler: (response: CommandwsResAuthorize) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.Authorize);

  /**
   * Создание рыночной заявки
   */
  sendMarketOrder = (
    req: WithoutOpcode<CommandwsReqCreateMarketOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.CreateMarket);

  /**
   * Создание лимитной заявки
   */
  sendLimitOrder = (
    req: WithoutOpcode<CommandwsReqCreateLimitOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.CreateLimit);

  /**
   * Создание стоп-заявки
   */
  sendStopOrder = (
    req: WithoutOpcode<CommandwsReqCreateStopOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.CreateStop);

  /**
   * Создание стоп-лимитной заявки
   */
  sendStopLimitOrder = (
    req: WithoutOpcode<CommandwsReqCreateStopLimitOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.CreateStopLimit);

  /**
   * Изменение рыночной заявки
   */
  updateMarketOrder = (
    req: WithoutOpcode<CommandwsReqUpdateMarketOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.UpdateMarket);

  /**
   * Изменение лимитной заявки
   */
  updateLimitOrder = (
    req: WithoutOpcode<CommandwsReqUpdateLimitOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.UpdateLimit);

  /**
   * Изменение стоп-заявки
   */
  updateStopOrder = (
    req: WithoutOpcode<CommandwsReqUpdateStopOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.UpdateStop);

  /**
   * Изменение стоп-лимитной заявки
   */
  updateStopLimitOrder = (
    req: WithoutOpcode<CommandwsReqUpdateStopLimitOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.UpdateStopLimit);

  /**
   * Снятие рыночной заявки
   */
  cancelMarketOrder = (
    req: WithoutOpcode<CommandwsReqDeleteMarketOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.DeleteMarket);

  /**
   * Снятие лимитной заявки
   */
  cancelLimitOrder = (
    req: WithoutOpcode<CommandwsReqDeleteLimitOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.DeleteLimit);

  /**
   * Снятие стоп-заявки
   */
  cancelStopOrder = (
    req: WithoutOpcode<CommandwsReqDeleteStopOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.DeleteStop);

  /**
   * Снятие стоп-лимитной заявки
   */
  cancelStopLimitOrder = (
    req: WithoutOpcode<CommandwsReqDeleteStopLimitOrder>,
    dataHandler: (response: WsResHandledSuccessfully) => unknown,
  ) => this.baseSubscribe(req, dataHandler, SubscriptionAction.DeleteStopLimit);

  private baseSubscribe<Req, Res extends ResponseData>(
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
