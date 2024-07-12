import {
  DevGetAllOrdersParams,
  DevGetAllPositionsParams,
  DevGetAllStopOrdersParams,
  DevGetAllTradesParams,
  DevGetOneOrderParams,
  DevGetOnePositionParams,
  DevGetOneStopOrderParams,
  DevGetTickerTradesParams,
  DevHistoryParams,
  DevOrderbookExchangSeccodeParams,
  DevQuotesParams,
  DevSecuritiesFuturesParams,
  DevSecuritiesSearchAllTradesHistoryParams,
  DevSecuritiesSearchAllTradesParams,
  DevSecuritiesSearchExchangeCodeParams,
  DevSecuritiesSearchExchangeParams,
  DevSecuritiesSearchParams,
  ExchangePortfolioSummaryParams,
  FortsriskParams,
  RiskParams,
  TradeStatsBySymbolParams,
  TradeStatsParams,
  WsReqStopOrdersGetAndSubscribeV2,
} from "./models/models";

type BaseParams =
  | ExchangePortfolioSummaryParams
  | DevGetAllPositionsParams
  | DevGetOnePositionParams
  | DevGetAllTradesParams
  | DevGetOneOrderParams
  | DevGetAllOrdersParams
  | DevGetTickerTradesParams
  | FortsriskParams
  | RiskParams
  | TradeStatsParams
  | TradeStatsBySymbolParams
  | DevGetAllStopOrdersParams
  | DevSecuritiesSearchParams
  | DevSecuritiesSearchExchangeParams
  | DevSecuritiesSearchExchangeCodeParams
  | DevHistoryParams
  | DevQuotesParams
  | DevOrderbookExchangSeccodeParams
  | DevSecuritiesSearchAllTradesParams
  | DevSecuritiesSearchAllTradesHistoryParams
  | DevSecuritiesFuturesParams
  | WithoutOpcode<WsReqStopOrdersGetAndSubscribeV2>
  | DevGetOneStopOrderParams;

export type ConditionalResult<
  Params extends BaseParams,
  Slim,
  Heavy,
  Simple,
> = Params["format"] extends "Slim"
  ? Slim
  : Params["format"] extends "Heavy"
  ? Heavy
  : Simple;

export enum Endpoint {
  DEV = "https://apidev.alor.ru",
  PROD = "https://api.alor.ru",
}

export enum WssEndpoint {
  DEV = "wss://apidev.alor.ru/ws",
  PROD = "wss://api.alor.ru/ws",
}

export enum WssEndpointBeta {
  DEV = "wss://apidev.alor.ru/cws",
  PROD = "wss://api.alor.ru/cws",
}

export interface AlorOpenApiOptions {
  /** Рефреш токен доступа */
  token: string;
  /** Токен доступа */
  accessToken?: string;
  /** API endpoint */
  endpoint: Endpoint;
  /** WSS endpoint */
  wssEndpoint: WssEndpoint;

  /** WSS Beta endpoint */
  wssEndpointBeta: WssEndpointBeta.PROD;

  refreshType?: 'dev' | 'lk'
}

export enum Timeframe {
  Sec15 = 15,
  Min1 = 60,
  Min5 = 300,
  Hour1 = 3600,
  Day = "D",
  Week = "W",
  Month = "M",
  Year = "Y",
}

/**
 * https://fs.moex.com/files/21235
 */
export enum TradingModeEnum {
  /**
   * Режим основных торгов Т+ (Стакан Т+2)
   */
  TQBR = "TQBR",
  /**
   * РПС с ЦК, РПС
   */
  PTEQ = "PTEQ",
  /**
   * Режим торгов «Неполные лоты»
   */
  SMAL = "SMAL",
  /**
   * Сектор ПИР – Режим основных торгов
   */
  TQPI = "TQPI",
  /**
   * Сектор ПИР – РПС
   */
  PSPI = "PSPI",
}

export enum TradingStatusEnum {
  /**
   * Нет торгов / торги закрыты
   */
  TradingClosed = 18,
  /**
   * Период открытия
   */
  OpeningPeriod = 118,
  /**
   * Период закрытия
   */
  ClosingPeriod = 103,
  /**
   * Перерыв в торгах
   */
  TradingBreak = 2,
  /**
   * Нормальный период торгов
   */
  TradingOpened = 17,
  /**
   * Аукцион закрытия
   */
  ClosingAuction = 102,
  /**
   * Аукцион крупных пакетов
   */
  BigPackagesAuction106,
  /**
   * Дискретный аукцион
   */
  DiscreteAuction = 107,
  /**
   * Аукцион открытия
   */
  OpeningAuction = 119,
  /**
   * Период торгов по цене аукциона закрытия
   */
  ClosingAuctionPriceTradingPeriod = 120,
}

export enum ComplexProductCategoryEnum {
  /**
   * Инструменты, предназначенные для КИ
   */
  DefaultQualInv = "0",
  /**
   * Необеспеченные сделки
   */
  Margin = "1",
  /**
   * Производные финансовые инструменты
   */
  FeaturesAndOptions = "2",
  /**
   *  Договоры репо, требующие тестирования
   */
  Repo = "3",
  /**
   * Структурные облигации, не предназначенные для КИ
   */
  StructureBonds = "4",
  /**
   * ЗПИФ, не предназначенные для КИ
   */
  ETF = "5",
  /**
   * Облигации российских эмитентов без рейтинга
   */
  NonRatingRusBonds = "6",
  // 7 - Облигации иностранных эмитентов, исполнение по которым обеспечивается за счет юридического лица РФ без рейтинга
  // 8 - Облигации со структурным доходом
  // 9 - Акции, не включенные в котировальные списки
  // 10 - Иностранные акции, требующие проведения тестирования
  // 11 - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при наличии договора организатора торговли с "ответственным" лицом
  // 12 - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при отсутствии договора организатора торговли с "ответственным" лицом
  // 13 - Облигации российских или иностранных эмитентов, конвертируемых в иные ценные бумаги
  // 14 - Облигации российских эмитентов с "юрисдикцией" выпуска вне рамок разрешенных
  // 15 - Облигации иностранных эмитентов с "юрисдикцией" эмитента вне рамок разрешенных
  // 16 - Резерв
  // 17 - Все бумаги, не попадающие под тесты из Базового стандарта. Ценные бумаги без листинга на Санкт-Петербургской бирже, возникшие в результате корпоративных событий
}

export enum SubscriptionAction {
  SUBSCRIPTION_ACTION_UNSUBSCRIBE = "unsubscribe",
  OrderBookGetAndSubscribe = "OrderBookGetAndSubscribe",
  BarsGetAndSubscribe = "BarsGetAndSubscribe",
  AllTradesGetAndSubscribe = "AllTradesGetAndSubscribe",
  QuotesSubscribe = "QuotesSubscribe",
  SummariesGetAndSubscribeV2 = "SummariesGetAndSubscribeV2",
  PositionsGetAndSubscribeV2 = "PositionsGetAndSubscribeV2",
  StopOrdersGetAndSubscribeV2 = "StopOrdersGetAndSubscribeV2",
  OrdersGetAndSubscribeV2 = "OrdersGetAndSubscribeV2",
  RisksGetAndSubscribe = "RisksGetAndSubscribe",
  SpectraRisksGetAndSubscribe = "SpectraRisksGetAndSubscribe",
  TradesGetAndSubscribeV2 = "TradesGetAndSubscribeV2",
  InstrumentsGetAndSubscribeV2 = "InstrumentsGetAndSubscribeV2",
  Authorize = "authorize",
  CreateMarket = "create:market",
  CreateLimit = "create:limit",
  CreateStop = "create:stop",
  CreateStopLimit = "create:stopLimit",
  UpdateMarket = "update:market",
  UpdateLimit = "update:limit",
  UpdateStop = "update:stop",
  UpdateStopLimit = "update:stopLimit",
  DeleteMarket = "delete:market",
  DeleteLimit = "delete:limit",
  DeleteStop = "delete:stop",
  DeleteStopLimit = "delete:stopLimit",
}

export type WithoutOpcode<T> = Omit<T, "opcode" | "token" | "guid">;

export interface IService {}
