import { AxiosInstance } from "axios";
import {
  DevGetAllOrdersParams,
  DevGetAllPositionsParams,
  DevGetAllStopOrdersParams,
  DevGetAllTradesParams,
  DevGetOneOrderParams,
  DevGetOnePositionParams,
  DevGetOneStopOrderParams,
  DevGetTickerTradesParams,
  ExchangePortfolioSummaryParams,
  Fortsrisk,
  FortsriskHeavy,
  FortsriskParams,
  FortsriskSlim,
  Order,
  OrderHeavy,
  Orders,
  OrdersHeavy,
  OrderSlim,
  OrdersSlim,
  Position,
  PositionHeavy,
  Positions,
  PositionsHeavy,
  PositionSlim,
  PositionsSlim,
  Risk,
  RiskHeavy,
  RiskParams,
  RiskSlim,
  Stoporder,
  StoporderHeavy,
  Stoporders,
  StopordersHeavy,
  StoporderSlim,
  StopordersSlim,
  Summary,
  SummaryHeavy,
  SummarySlim,
  Trade,
  Trades,
  TradesHeavy,
  TradesSlim,
  TradeStatsBySymbolParams,
  TradeStatsParams,
} from "../../models/models";
import { ConditionalResult } from "../../types";

/**
 * Информация о клиенте
 */
export class ClientInfoService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Получение информации о всех заявках
   * @param params
   */
  async getOrders<Params extends DevGetAllOrdersParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, OrdersSlim, OrdersHeavy, Orders>> {
    return this.http
      .get(`/md/v2/clients/${params.exchange}/${params.portfolio}/orders`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о выбранной заявке
   * @param params
   */
  async getOrderById<Params extends DevGetOneOrderParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, OrderSlim, OrderHeavy, Order>> {
    return this.http
      .get(`/md/v2/clients/${exchange}/${portfolio}/orders/${params.orderId}`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о портфеле
   * @param params
   */
  async getSummary<Params extends ExchangePortfolioSummaryParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, SummarySlim, SummaryHeavy, Summary>> {
    return this.http
      .get(`/md/v2/clients/${params.exchange}/${params.portfolio}/summary`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о позициях
   * @param params
   */

  async getPositions<Params extends DevGetAllPositionsParams>(
    params: Params,
  ): Promise<
    ConditionalResult<Params, PositionsSlim, PositionsHeavy, Positions>
  > {
    return this.http
      .get(`/md/v2/Clients/${params.exchange}/${params.portfolio}/positions`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о позициях выбранного инструмента
   * @param params
   */
  async getPositionBySymbol<Params extends DevGetOnePositionParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, PositionSlim, PositionHeavy, Position>> {
    return this.http
      .get(
        `/md/v2/Clients/${params.exchange}/${params.portfolio}/positions/${params.symbol}`,
        { params },
      )
      .then((r) => r.data);
  }

  /**
   * Получение информации о сделках
   * @param params
   */
  async getTrades<Params extends DevGetAllTradesParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, TradesSlim, TradesHeavy, Trades>> {
    return this.http
      .get(`/md/v2/Clients/${params.exchange}/${params.portfolio}/trades`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о сделках по выбранному инструменту
   * @param params
   */
  async getTradesBySymbol<Params extends DevGetTickerTradesParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, TradesSlim, TradesHeavy, Trades>> {
    return this.http
      .get(
        `/md/v2/Clients/${params.exchange}/${params.portfolio}/${params.ticker}/trades`,
        { params },
      )
      .then((r) => r.data);
  }

  /**
   * Получение информации о рисках на срочном рынке
   * @param params
   */
  async getFortsRisk<Params extends FortsriskParams>(
    params: Params,
  ): Promise<
    ConditionalResult<Params, FortsriskSlim, FortsriskHeavy, Fortsrisk>
  > {
    return this.http
      .get(`/md/v2/Clients/${params.exchange}/${params.portfolio}/fortsrisk`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о рисках
   * @param params
   */
  async getRisk<Params extends FortsriskParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, RiskSlim, RiskHeavy, Risk>> {
    return this.http
      .get(`/md/v2/Clients/${params.exchange}/${params.portfolio}/risk`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение истории сделок
   * @param params
   */
  async getHistoryTrades<Params extends TradeStatsParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, TradesSlim, TradesHeavy, Trades>> {
    return this.http
      .get(`/md/stats/${params.exchange}/${params.portfolio}/history/trades`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение истории сделок (один тикер)
   * @param params
   */
  async getHistoryTradesBySymbol<Params extends TradeStatsBySymbolParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, TradesSlim, TradesHeavy, Trades>> {
    return this.http
      .get(
        `/md/stats/${params.exchange}/${params.portfolio}/history/trades/${params.symbol}`,
        { params },
      )
      .then((r) => r.data);
  }

  /**
   * Получение информации о стоп-заявках
   * @param params
   */
  async getStopOrders<Params extends DevGetAllStopOrdersParams>(
    params: Params,
  ): Promise<
    ConditionalResult<Params, StopordersSlim, StopordersHeavy, Stoporders>
  > {
    return this.http
      .get(`/md/v2/clients/${params.exchange}/${params.portfolio}/stoporders`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о выбранной стоп-заявке
   * @param params
   */
  async getStopOrderByOrderId<Params extends DevGetOneStopOrderParams>(
    params: Params,
  ): Promise<
    ConditionalResult<Params, StoporderSlim, StoporderHeavy, Stoporder>
  > {
    return this.http
      .get(
        `/md/v2/clients/${params.exchange}/${params.portfolio}/stoporders/${params.orderId}`,
        { params },
      )
      .then((r) => r.data);
  }
}
