import { AxiosInstance } from "axios/index";
import {
  Alltrade,
  Alltradeshistory,
  DevHistoryParams,
  DevOrderbookExchangSeccodeParams,
  DevQuotesParams,
  DevSecuritiesFuturesParams,
  DevSecuritiesSearchAllTradesHistoryParams,
  DevSecuritiesSearchAllTradesParams,
  DevSecuritiesSearchExchangeCodeParams,
  DevSecuritiesSearchExchangeParams,
  DevSecuritiesSearchParams,
  Exchange,
  History,
  Order,
  Orderbook,
  RiskRates,
  RiskRatesParams,
  Security,
  Symbol,
  SymbolFutures,
} from "../models/models";

/**
 * Ценные бумаги / инструменты
 */
export class InstrumentsService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Получение информации о торговых инструментах
   */
  async getSecurities(params: DevSecuritiesSearchParams): Promise<Security[]> {
    return this.http.get(`/md/v2/Securities`, {
      params,
    });
  }

  /**
   * Получение информации о торговых инструментах на выбранной бирже
   */
  async getSecuritiesByExchange(
    params: DevSecuritiesSearchExchangeParams,
  ): Promise<Security[]> {
    return this.http.get(`/md/v2/Securities/${params.exchange}`, {
      params,
    });
  }

  /**
   * Получение информации о выбранном финансовом инструменте
   */
  async getSecuritiesByExchangeAndSymbol(
    params: DevSecuritiesSearchExchangeCodeParams,
  ): Promise<Security[]> {
    return this.http.get(
      `/md/v2/Securities/${params.exchange}/${params.symbol}`,
      {
        params,
      },
    );
  }

  /**
   * Получение информации о котировках для выбранных инструментов
   */
  async getQuotes(params: DevQuotesParams): Promise<Symbol[]> {
    return this.http.get(`/md/v2/Securities/${params.symbols}/quotes`, {
      params,
    });
  }

  /**
   * Получение информации о биржевом стакане
   */
  async getOrderbookBySeccode(
    params: DevOrderbookExchangSeccodeParams,
  ): Promise<Orderbook> {
    return this.http.get(
      `/md/v2/orderbooks/${params.exchange}/${params.seccode}`,
      {
        params,
      },
    );
  }

  /**
   * Получение информации о всех сделках по ценным бумагам за сегодня
   */
  async getAlltrades(
    params: DevSecuritiesSearchAllTradesParams,
  ): Promise<Alltrade[]> {
    return this.http.get(
      `/md/v2/Securities/${params.exchange}/${params.symbol}/alltrades`,
      {
        params,
      },
    );
  }

  /**
   * Получение исторической информации о всех сделках по ценным бумагам
   */
  async getAlltradesHistory(
    params: DevSecuritiesSearchAllTradesHistoryParams,
  ): Promise<Alltradeshistory> {
    return this.http.get(
      `/md/v2/Securities/${params.exchange}/${params.symbol}/alltrades/history`,
      {
        params,
      },
    );
  }

  /**
   * Получение котировки по ближайшему фьючерсу (код)
   */
  async getActualFuturesQuote(
    params: DevSecuritiesFuturesParams,
  ): Promise<SymbolFutures> {
    return this.http.get(
      `/md/v2/Securities/${params.exchange}/${params.symbol}/actualFuturesQuote`,
      { params },
    );
  }

  /**
   * Запрос ставок риска
   */
  async getRiskRates(params: RiskRatesParams): Promise<RiskRates> {
    return this.http.get(`/md/v2/risk/rates`, { params });
  }

  /**
   * Запрос истории для выбранных биржи и инструмента
   */
  async getHistory(params: DevHistoryParams): Promise<History> {
    return this.http.get(`/md/v2/history`, { params });
  }
}
