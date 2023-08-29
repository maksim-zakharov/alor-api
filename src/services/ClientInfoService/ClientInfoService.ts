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
  FortsriskParams,
  Order,
  Position,
  Risk,
  RiskParams,
  Stoporder,
  Stoporders,
  Summary,
  Trade,
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
  async getOrders(params: DevGetAllOrdersParams): Promise<Order[]> {
    return this.http.get(
      `/md/v2/clients/${params.exchange}/${params.portfolio}/orders`,
      { params },
    );
  }

  /**
   * Получение информации о выбранной заявке
   * @param params
   */
  async getOrderById(params: DevGetOneOrderParams): Promise<Order> {
    return this.http.get(
      `/md/v2/clients/${exchange}/${portfolio}/orders/${params.orderId}`,
      { params },
    );
  }

  /**
   * Получение информации о портфеле
   * @param params
   */
  async getSummary(params: ExchangePortfolioSummaryParams): Promise<Summary> {
    return this.http.get(
      `/md/v2/clients/${params.exchange}/${params.portfolio}/summary`,
      { params },
    );
  }

  /**
   * Получение информации о позициях
   * @param params
   */

  async getPositions(params: DevGetAllPositionsParams): Promise<Position[]> {
    return this.http.get(
      `/md/v2/Clients/${params.exchange}/${params.portfolio}/positions`,
      { params },
    );
  }

  /**
   * Получение информации о позициях выбранного инструмента
   * @param params
   */
  async getPositionBySymbol(
    params: DevGetOnePositionParams,
  ): Promise<Position> {
    return this.http.get(
      `/md/v2/Clients/${params.exchange}/${params.portfolio}/positions/${params.symbol}`,
      { params },
    );
  }

  /**
   * Получение информации о сделках
   * @param params
   */
  async getTrades(params: DevGetAllTradesParams): Promise<Trade[]> {
    return this.http.get(
      `/md/v2/Clients/${params.exchange}/${params.portfolio}/trades`,
      { params },
    );
  }

  /**
   * Получение информации о сделках по выбранному инструменту
   * @param params
   */
  async getTradesBySymbol(params: DevGetTickerTradesParams): Promise<Trade[]> {
    return this.http.get(
      `/md/v2/Clients/${params.exchange}/${params.portfolio}/${params.ticker}/trades`,
      { params },
    );
  }

  /**
   * Получение информации о рисках на срочном рынке
   * @param params
   */
  async getFortsRisk(params: FortsriskParams): Promise<Fortsrisk> {
    return this.http.get(
      `/md/v2/Clients/${params.exchange}/${params.portfolio}/fortsrisk`,
      { params },
    );
  }

  /**
   * Получение информации о рисках
   * @param params
   */
  async getRisk(params: RiskParams): Promise<Risk> {
    return this.http.get(
      `/md/v2/Clients/${params.exchange}/${params.portfolio}/risk`,
      { params },
    );
  }

  /**
   * Получение истории сделок
   * @param params
   */
  async getHistoryTrades(params: TradeStatsParams): Promise<Trade[]> {
    return this.http.get(
      `/md/stats/${params.exchange}/${params.portfolio}/history/trades`,
      { params },
    );
  }

  /**
   * Получение истории сделок (один тикер)
   * @param params
   */
  async getHistoryTradesBySymbol(
    params: TradeStatsBySymbolParams,
  ): Promise<Trade[]> {
    return this.http.get(
      `/md/stats/${params.exchange}/${params.portfolio}/history/trades/${params.symbol}`,
      { params },
    );
  }

  /**
   * Получение информации о стоп-заявках
   * @param params
   */
  async getStopOrders(params: DevGetAllStopOrdersParams): Promise<Stoporders> {
    return this.http.get(
      `/md/v2/clients/${params.exchange}/${params.portfolio}/stoporders`,
      { params },
    );
  }

  /**
   * Получение информации о выбранной стоп-заявке
   * @param params
   */
  async getStopOrderByOrderId(
    params: DevGetOneStopOrderParams,
  ): Promise<Stoporder> {
    return this.http.get(
      `/md/v2/clients/${params.exchange}/${params.portfolio}/stoporders/${params.orderId}`,
      { params },
    );
  }
}
