export enum Exchange {
  MOEX = "MOEX",
  SPBX = "SPBX",
}

export interface OrderbookPrice {
  price: number;
  volume: number;
}

export interface Orderbook {
  snapshot: boolean;
  bids: OrderbookPrice[];
  asks: OrderbookPrice[];
  timestamp: number;
  ms_timestamp: number;
  existing: boolean;
}

export enum Endpoint {
  DEV = "https://apidev.alor.ru",
  PROD = "https://api.alor.ru",
}

export enum WssEndpoint {
  DEV = "wss://apidev.alor.ru/ws",
  PROD = "wss://api.alor.ru/ws",
}

export interface AlorOpenApiOptions {
  /** Токен доступа */
  token: string;
  /** API endpoint */
  endpoint: Endpoint;
  /** WSS endpoint */
  wssEndpoint: WssEndpoint;
}

export interface GetStopOrdersRequest {
  exchange: Exchange;

  portfolio: string;
}

export interface GetPositionsRequest {
  exchange: Exchange;
  portfolio: string;
  withoutCurrency: boolean;
}

export interface GetPositionRequest extends GetPositionsRequest {
  symbol: string;
}

export interface GetStopOrderRequest extends GetStopOrdersRequest {
  orderId: string;
}

export interface Order {
  id: string;
  symbol: string;
  brokerSymbol: string;
  exchange: Exchange;
  type: string;
  side: OrderSide;
  status: OrderStatus;
  transTime: Date;
  endTime: Date;
  qtyUnits: number;
  qtyBatch: number;
  qty: number;
  filledQtyUnits: number;
  filledQtyBatch: number;
  filled: number;
  price: number;
  existing: boolean;
}

export enum OrderStatus {
  /**
   * На исполнении
   */
  Working = "working",
  /**
   * Исполнена
   */
  Filled = "filled",
  /**
   * Отменена
   */
  Canceled = "canceled",
  /**
   * Отклонена
   */
  Rejected = "rejected",
}

export enum TimeInForce {
  /**
   * До конца дня
   */
  OneDay = "OneDay",
  /**
   * Снять остаток
   */
  ImmediateOrCancel = "ImmediateOrCancel",
  /**
   * Исполнить целиком или отклонить
   */
  FillOrKill = "FillOrKill",
  /**
   * Активна до отмены
   */
  GoodTillCancelled = "GoodTillCancelled",
}

export interface StopOrder {
  id: number;
  exchangeOrderId: number;
  symbol: string;
  brokerSymbol: string;
  portfolio: string;
  exchange: Exchange;
  type: string;
  side: OrderSide;
  condition: StopOrderCondition;
  status: OrderStatus;
  transTime: Date;
  endTime: Date;
  qtyUnits: number;
  qtyBatch: number;
  qty: number;
  price: number;
  avg_price: number;
  stopPrice: number;
  existing: boolean;
}

export interface Summary {
  buyingPowerAtMorning: number;
  buyingPower: number;
  profit: number;
  profitRate: number;
  portfolioEvaluation: number;
  portfolioLiquidationValue: number;
  initialMargin: number;
  riskBeforeForcePositionClosing: number;
  commission: number;
}

export interface Position {
  symbol: string;
  brokerSymbol: string;
  exchange: Exchange;
  volume: number;
  currentVolume: number;
  avgPrice: number;
  qtyUnits: number;
  openUnits: number;
  lotSize: number;
  shortName: string;
  qtyT0: number;
  qtyT1: number;
  qtyT2: number;
  qtyTFuture: number;
  qtyT0Batch: number;
  qtyT1Batch: number;
  qtyT2Batch: number;
  qtyTFutureBatch: number;
  qtyBatch: number;
  openQtyBatch: number;
  qty: number;
  open: number;
  unrealisedPl: number;
  isCurrency: boolean;
}

export enum OrderSide {
  Buy = "buy",
  Sell = "sell",
}

export enum OrderType {
  Limit = "limit",
  Market = "market",
}

export interface CancelOrderRequest {
  orderId: number | string;
  portfolio: string;
  exchange: Exchange;
  stop: boolean;
}

export interface GetOrderRequest extends GetOrdersRequest {
  orderId: string;
}

export interface GetOrdersRequest {
  exchange: Exchange;
  portfolio: string;
}

export type SendLimitOrderRequest = Omit<InternalSendLimitOrderRequest, "type">;

export interface InternalSendLimitOrderRequest {
  side: OrderSide;
  type: OrderType;
  quantity: number;
  price: number;
  instrument: Instrument;
  user: User;
  timeInForce: TimeInForce;
  icebergFixed: number;
  icebergVariance: number;
}

export type SendMarketOrderRequest = Omit<
  InternalSendMarketOrderRequest,
  "type"
>;

export interface InternalSendMarketOrderRequest {
  side: OrderSide;
  type: OrderType;
  quantity: number;
  instrument: Instrument;
  user: User;
}

export interface Instrument {
  symbol: string;
  exchange: Exchange;
}

export interface User {
  portfolio: string;
}

export interface Security {
  symbol: string;
  shortname: string;
  description: string;
  exchange: Exchange;
  type: string;
  lotsize: number;
  facevalue: number;
  cfiCode: string;
  cancellation: Date;
  minstep: number;
  rating: number;
  marginbuy: number;
  marginsell: number;
  marginrate: number;
  pricestep: number;
  priceMax: number;
  priceMin: number;
  theorPrice: number;
  theorPriceLimit: number;
  volatility: number;
  currency: string;
  ISIN: string;
  yield: null;
  primary_board: TradingMode | string;
  tradingStatus: TradingStatus;
  tradingStatusInfo: string;
  // Null - нет ограничений
  complexProductCategory?: ComplexProductCategory;
}

/**
 * https://fs.moex.com/files/21235
 */
export enum TradingMode {
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

export enum TradingStatus {
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

export enum ComplexProductCategory {
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

export interface Candle {
  time: number;
  close: number;
  open: number;
  high: number;
  low: number;
  volume: number;
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
}

export interface SendStopOrderRequest {
  side: OrderSide;
  condition: StopOrderCondition;
  triggerPrice: number;
  stopEndUnixTime?: number;
  quantity: number;
  instrument: Instrument;
  user: User;
}

export interface BaseSubscribeRequest {
  opcode: SubscriptionAction;
  token: string;
  guid: string;
}

export interface ApiError {
  requestId?: string;
  status: number;
  code: string;
  description: string;
}

export interface OrdersSubscribeRequest extends BaseSubscribeRequest {
  portfolio: string;
  exchange: Exchange;
  format: "Simple";
}

export interface StopOrdersSubscribeRequest extends BaseSubscribeRequest {
  portfolio: string;
  exchange: Exchange;
  format: "Simple";
}

export interface PositionSubscribeRequest extends BaseSubscribeRequest {
  portfolio: string;
  exchange: Exchange;
  format: "Simple";
}

export interface QuotesSubscribeRequest extends BaseSubscribeRequest {
  code: string;
  exchange: Exchange;
  format: "Simple";
}

export interface CandlesSubscribeRequest extends BaseSubscribeRequest {
  code: string;
  tf: Timeframe;
  from: number;
  exchange: Exchange;
  format: "Simple";
  delayed?: boolean;
}

export interface OrderbookSubscribeRequest extends BaseSubscribeRequest {
  code: string;
  exchange: Exchange;
  format: "Simple";
  depth: number;
}

export interface AllTradesSubscribeRequest extends BaseSubscribeRequest {
  code: string;
  exchange: Exchange;
  format: "Simple";
  depth: number;
  includeVirtualTrades: boolean;
}

export interface SummarySubscribeRequest extends BaseSubscribeRequest {
  portfolio: string;
  exchange: Exchange;
}

export type WithoutOpcode<T extends BaseSubscribeRequest> = Omit<
  T,
  "opcode" | "token" | "guid"
>;

export interface SendOrderResponse {
  message: "success" | string;
  orderNumber: number;
}

export enum StopOrderCondition {
  // Цена срабатывания меньше текущей цены
  Less = "less",
  // Цена срабатывания больше текущей цены
  More = "more",
}

export interface Trade {
  id: number;
  orderno: number;
  symbol: string;
  qty: number;
  price: number;
  time: string;
  timestamp: number;
  side: OrderSide;
  oi: number;
  existing: boolean;
}

export interface SendStopLimitOrderRequest {
  side: OrderSide;
  condition: StopOrderCondition;
  triggerPrice: number;
  stopEndUnixTime?: number;
  price: number;
  quantity: number;
  instrument: Instrument;
  user: User;
  timeInForce: TimeInForce;
  icebergFixed: number;
  icebergVariance: number;
}

export interface RiskCollection {
  list: Risk[];
  total: number;
}

export interface Risk {
  id: number;
  instrument: string;
  exchange: Exchange;
  riskCategoryId: number;
  securityRiskCategoryId: number;
  assetType: string;
  underlyingAsset: string;
  setName: string;
  isDirect: boolean;
  isin: string;
  currencyCode: string;
  rateUp: number;
  rateDown: number;
  rateSymmetric: number;
  isShortSellPossible: boolean;
  isMarginal: boolean;
  setRate: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Quotes {
  symbol: string;
  exchange: string;
  description: string;
  prev_close_price: number;
  last_price: number;
  last_price_timestamp: number;
  change: number;
  change_percent: number;
  high_price: number;
  low_price: number;
  accruedInt: null;
  accrued_interest: null;
  volume: number;
  open_interest: null;
  ask: number;
  bid: number;
  ask_vol: number;
  bid_vol: number;
  ob_ms_timestamp: number;
  open_price: number;
  yield: null;
  lotsize: number;
  lotvalue: number;
  facevalue: number;
  type: string;
  total_bid_vol: number;
  total_ask_vol: number;
}
