import { AxiosInstance } from "axios/index";
import {
  Alltrades,
  AlltradesHeavy,
  Alltradeshistory,
  AlltradeshistoryHeavy,
  AlltradeshistorySlim,
  AlltradesSlim,
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
  Symbols,
  SymbolsHeavy,
  SymbolsSlim,
} from "../../models/models";
import { ConditionalResult } from "../../types";
import {Currency} from "../ClientInfoService/ClientInfoService";

export interface SecurityDescription {
  symbol:       string;
  description:  string;
  sector:       string;
  isin:         string;
  baseCurrency: string;
  securityType: string;
  lotsize:      number;
  shortName:    string;
  cfiCode:      string;
}

export interface SecurityDividend {
  recordDate:                Date;
  dividendPerShare:          number;
  dividendYield:             number;
  currency:                  Currency;
  recommendDividendPerShare: number;
  listDate:                  Date;
  declaredPayDateNominee:    Date | null;
  exDividendDate:            Date | null;
  fixDate:                   Date | null;
}

export interface NewsRequest {
  limit:           number;
  offset:     number;
  sortDesc:     string;
  symbols?:       string;
}

export interface News {
  id:           number;
  sourceId:     string;
  header:       string;
  publishDate:  Date;
  newsType:     number;
  content:      string;
  countryCodes: string[];
  rubricCodes:  string[];
  symbols:      string[];
  mt:           null;
}
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
  async getQuotes<Params extends DevQuotesParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, SymbolsSlim, SymbolsHeavy, Symbols>> {
    return this.http
      .get(`/md/v2/Securities/${params.symbols}/quotes`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о биржевом стакане
   */
  async getOrderbookBySeccode<Params extends DevOrderbookExchangSeccodeParams>(
    params: Params,
  ): Promise<
    ConditionalResult<Params, OrderbookSlim, OrderbookHeavy, Orderbook>
  > {
    return this.http
      .get(`/md/v2/orderbooks/${params.exchange}/${params.seccode}`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение информации о всех сделках по ценным бумагам за сегодня
   */
  async getAlltrades<Params extends DevSecuritiesSearchAllTradesParams>(
    params: Params,
  ): Promise<
    ConditionalResult<Params, AlltradesSlim, AlltradesHeavy, Alltrades>
  > {
    return this.http
      .get(`/md/v2/Securities/${params.exchange}/${params.symbol}/alltrades`, {
        params,
      })
      .then((r) => r.data);
  }

  /**
   * Получение исторической информации о всех сделках по ценным бумагам
   */
  async getAlltradesHistory<
    Params extends DevSecuritiesSearchAllTradesHistoryParams,
  >(
    params: Params,
  ): Promise<
    ConditionalResult<
      Params,
      AlltradeshistorySlim,
      AlltradeshistoryHeavy,
      Alltradeshistory
    >
  > {
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
  async getActualFuturesQuote<Params extends DevSecuritiesFuturesParams>(
    params: Params,
  ): Promise<ConditionalResult<Params, SymbolsSlim, SymbolsHeavy, Symbols>> {
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

  /**
   * Описание инструмента
   * @param ticker - Тикер инструмента
   */
  getSecurityDescription(
      ticker: string): Promise<SecurityDescription> {
    return this.http
        .get(`/instruments/v1/${ticker}/description`, {
          baseURL: "https://api.alor.ru",
        })
        .then((r) => r.data);
  }

  /**
   * Дивиденды инструмента
   * @param ticker - Тикер инструмента
   */
  getSecurityDividends(
      ticker: string): Promise<SecurityDividend[]> {
    return this.http
        .get(`/instruments/v1/${ticker}/stock/dividends`, {
          baseURL: "https://api.alor.ru",
        })
        .then((r) => r.data);
  }

  /**
   * Получение новостей
   * @param params
   */
  getNews(
      params: NewsRequest): Promise<News[]> {
    return this.http
        .get(`/news/news`, {
          params,
          baseURL: "https://api.alor.ru",
        })
        .then((r) => r.data);
  }
}
