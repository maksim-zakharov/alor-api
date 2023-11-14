import { AxiosInstance } from "axios/index";
import {
  Alltrade,
  Alltrades,
  AlltradesHeavy,
  Alltradeshistory,
  AlltradeshistoryHeavy,
  AlltradeshistorySlim,
  AlltradesSlim,
  DevGetOneStopOrderParams,
  DevHistoryParams,
  DevOrderbookExchangSeccodeParams,
  DevQuotesParams,
  DevSecuritiesFuturesParams,
  DevSecuritiesSearchAllTradesHistoryParams,
  DevSecuritiesSearchAllTradesParams,
  DevSecuritiesSearchExchangeCodeParams,
  DevSecuritiesSearchExchangeParams,
  DevSecuritiesSearchParams,
  History,
  HistoryHeavy,
  HistorySlim,
  Orderbook,
  OrderbookHeavy,
  OrderbookSlim,
  RiskRates,
  RiskRatesParams,
  Securities,
  SecuritiesHeavy,
  SecuritiesSlim,
  Security,
  SecurityHeavy,
  SecuritySlim,
  Stoporder,
  StoporderHeavy,
  StoporderSlim,
  Symbol,
  Symbols,
  SymbolsHeavy,
  SymbolsSlim,
} from "../../models/models";
import { SymbolFutures } from "../../../dist/test-types";
import { ConditionalResult } from "../../types";

/**
 * Ценные бумаги / инструменты
 */
export class InstrumentsService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Получение информации о торговых инструментах
   */
  async getSecurities<Params extends DevSecuritiesSearchParams>(
    params: Params,
  ): Promise<
    ConditionalResult<Params, SecuritiesSlim, SecuritiesHeavy, Securities>
  > {
    return this.http
      .get(`/md/v2/Securities`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о торговых инструментах на выбранной бирже
   */
  async getSecuritiesByExchange<
    Params extends DevSecuritiesSearchExchangeParams,
  >(
    params: Params,
  ): Promise<
    ConditionalResult<Params, SecuritiesSlim, SecuritiesHeavy, Securities>
  > {
    return this.http
      .get(`/md/v2/Securities/${params.exchange}`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о выбранном финансовом инструменте
   */
  async getSecurityByExchangeAndSymbol<
    Params extends DevSecuritiesSearchExchangeCodeParams,
  >(
    params: Params,
  ): Promise<ConditionalResult<Params, SecuritySlim, SecurityHeavy, Security>> {
    return this.http
      .get(`/md/v2/Securities/${params.exchange}/${params.symbol}`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о котировках для выбранных инструментов
   */
  async getQuotes(
    params: DevQuotesParams,
  ): Promise<Symbols | SymbolsSlim | SymbolsHeavy> {
    return this.http
      .get(`/md/v2/Securities/${params.symbols}/quotes`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о биржевом стакане
   */
  async getOrderbookBySeccode(
    params: DevOrderbookExchangSeccodeParams,
  ): Promise<Orderbook | OrderbookSlim | OrderbookHeavy> {
    return this.http
      .get(`/md/v2/orderbooks/${params.exchange}/${params.seccode}`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о всех сделках по ценным бумагам за сегодня
   */
  async getAlltrades(
    params: DevSecuritiesSearchAllTradesParams,
  ): Promise<Alltrades | AlltradesSlim | AlltradesHeavy> {
    return this.http
      .get(`/md/v2/Securities/${params.exchange}/${params.symbol}/alltrades`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение исторической информации о всех сделках по ценным бумагам
   */
  async getAlltradesHistory(
    params: DevSecuritiesSearchAllTradesHistoryParams,
  ): Promise<Alltradeshistory | AlltradeshistorySlim | AlltradeshistoryHeavy> {
    return this.http
      .get(
        `/md/v2/Securities/${params.exchange}/${params.symbol}/alltrades/history`,
        {
          params,
        },
      )
      .then((r) => r.data);
  }

  /**
   * Получение котировки по ближайшему фьючерсу (код)
   */
  async getActualFuturesQuote(
    params: DevSecuritiesFuturesParams,
  ): Promise<SymbolFutures> {
    return this.http
      .get(
        `/md/v2/Securities/${params.exchange}/${params.symbol}/actualFuturesQuote`,
        { params },
      )
      .then((r) => r.data);
  }

  /**
   * Запрос ставок риска
   */
  async getRiskRates(params: RiskRatesParams): Promise<RiskRates> {
    return this.http.get(`/md/v2/risk/rates`, { params }).then((r) => r.data);
  }

  /**
   * Запрос истории для выбранных биржи и инструмента
   */
  async getHistory<Params extends DevHistoryParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, HistorySlim, HistoryHeavy, History>> {
    return this.http.get(`/md/v2/history`, { params }).then((r) => r.data);
  }
}
