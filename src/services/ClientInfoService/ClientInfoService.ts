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

/**
 * Информация о клиенте
 */
export class ClientInfoService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Получение информации о всех заявках
   * @param params
   */
  async getOrders(
    params: DevGetAllOrdersParams,
  ): Promise<Orders | OrdersSlim | OrdersHeavy> {
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
  async getOrderById(
    params: DevGetOneOrderParams,
  ): Promise<Order | OrderSlim | OrderHeavy> {
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
  async getSummary(
    params: ExchangePortfolioSummaryParams,
  ): Promise<Summary | SummarySlim | SummaryHeavy> {
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

  async getPositions(
    params: DevGetAllPositionsParams,
  ): Promise<Positions | PositionSlim | PositionsHeavy> {
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
  async getPositionBySymbol(
    params: DevGetOnePositionParams,
  ): Promise<Position | PositionSlim | PositionHeavy> {
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
  async getTrades(
    params: DevGetAllTradesParams,
  ): Promise<Trades | TradesSlim | TradesHeavy> {
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
  async getTradesBySymbol(
    params: DevGetTickerTradesParams,
  ): Promise<Trades | TradesSlim | TradesHeavy> {
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
  async getFortsRisk(
    params: FortsriskParams,
  ): Promise<Fortsrisk | FortsriskSlim | FortsriskHeavy> {
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
  async getRisk(params: RiskParams): Promise<Risk | RiskSlim | RiskHeavy> {
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
  async getHistoryTrades(
    params: TradeStatsParams,
  ): Promise<Trades | TradesSlim | TradesHeavy> {
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
  async getHistoryTradesBySymbol(
    params: TradeStatsBySymbolParams,
  ): Promise<Trades | TradesSlim | TradesHeavy> {
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
  async getStopOrders(
    params: DevGetAllStopOrdersParams,
  ): Promise<Stoporders | StopordersSlim | StopordersHeavy> {
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
  async getStopOrderByOrderId(
    params: DevGetOneStopOrderParams,
  ): Promise<Stoporder | StoporderSlim | StoporderHeavy> {
    return this.http
      .get(
        `/md/v2/clients/${params.exchange}/${params.portfolio}/stoporders/${params.orderId}`,
        { params },
      )
      .then((r) => r.data);
  }
}
