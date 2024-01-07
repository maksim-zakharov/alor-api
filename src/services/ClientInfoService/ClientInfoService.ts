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
import jwt_decode from "jwt-decode";

interface EquityDynamicsRequest {
  // 2023-11-28T09:42:08.791Z
  startDate: string;
  // 2023-11-28T09:42:08.791Z
  endDate: string;
  portfolio: string;
}

export interface EquityDynamicsResponse {
  portfolioValues: PortfolioValue[];
  /**
   * Свободные активы
   */
  assetsSum: number;
  /**
   * Доход
   */
  profitablity: number;
  profitablityPct: number;
  /**
   * Дивиденды/купоны
   */
  dividends: number;
  /**
   * Пополнения
   */
  replenishments: number;
  /**
   * Списания
   */
  withdrawals: number;
}

export interface PortfolioValue {
  /**
   * Дата
   */
  date: Date;
  /**
   * Активы
   */
  value: number;
}

export interface UserInfoResponse {
  clientId: number;
  phoneLogin: string;
  fullName: string;
  type: string;
  typeName: string;
  nationality: string;
  citizenship2: null;
  nationality2: null;
  registrationDate: Date;
  document: Document;
  registrationDocument: null;
  edo: EDO;
  formDate: Date;
  formExpiredDate: Date;
  nalNoRez: number;
  registerStatus: string;
  kvalInvestor: boolean;
  kvalInvestorDate: Date;
  nonResident: boolean;
  hasIIS: boolean;
  allowIIS: boolean;
  questionnaire: boolean;
  profitOrganization: boolean;
  publicOfficial: PublicOfficial;
  emailsExt: EmailsEXT[];
  phones: Phone[];
  addresses: Address[];
  agreements: Agreement[];
  collaboration: Collaboration;
  confidant: Confidant;
  emails: string[];
  lastName: string;
  firstName: string;
  secondName: string;
  gender: string;
  genderName: string;
  birthDate: Date;
  birthPlace: string;
  citizenship: string;
  inn: string;
  uosType: number;
  nameWithInitials: string;
}

export interface Address {
  country: string;
  countryCode: string;
  zip: string;
  address: string;
  region: string;
  city: string;
  type: number;
  typeName: string;
}

export interface Agreement {
  cid: string;
  agreementNumber: string;
  agreementType: string;
  agreementDate: Date;
  agreementCloseDate: null;
  portfolios: Portfolio[];
  status: number;
  statusCode: null;
  statusName: null;
  tradeSystem: string;
  isIIS: boolean;
  isActive: boolean;
}

export interface Portfolio {
  accountNumber: string;
  service: string;
  isCommon: boolean;
  currencies: string[];
  registered: Date;
  registeredOnBirga: Date;
  tksNumber: string;
  tariffPlan: string;
  marketType: string;
}

export interface Collaboration {
  type: string;
  target: string;
}

export interface Confidant {
  firstName: null;
  lastName: null;
  secondName: null;
  gender: null;
  title: null;
  reasonType: null;
  reasonTypeName: null;
  reasonNumber: null;
  reasonDate: null;
  term: null;
  birthDate: null;
  documentDate: null;
}

export interface Document {
  type: string;
  typeName: string;
  series: string;
  number: string;
  issuer: string;
  issuerCode: string;
  date: Date;
}

export interface EDO {
  enabled: boolean;
  phone: string;
  email: string;
  type: number;
  date: Date;
  number: string;
}

export interface EmailsEXT {
  email: string;
  isVerify: boolean;
}

export interface Phone {
  value: string;
  type: number;
  typeCode: string;
  typeName: string;
}

export interface PublicOfficial {
  russian: boolean;
  foreign: boolean;
  international: boolean;
  relative: boolean;
}

export interface JWTTokenDecoded {
  sub: string;
  ent: string;
  ein: string;
  clientid: string;
  azp: string;
  agreements: string;
  portfolios: string;
  scope: string;
  exp: number;
  iat: number;
  iss: string;
  aud: string;
}

export interface ClientLoginRequest {
  credentials: { login: string; password: string; twoFactorPin?: string };
  client_id: "SingleSignOn";
  redirect_url: string;
}

export interface ProfileCategoriesResponse {
  clientId:   number;
  categories: ProfileCategory[];
}

export interface ProfileCategory {
  id:                     number;
  complexProductCategory: number;
  name:                   string;
  date:                   Date;
  success:                boolean;
  visible:                boolean;
}

export interface Category {
  id:                     number;
  name:                   string;
  complexProductCategory: number;
  isKvalOnly:             boolean;
  showDetailsStar:        boolean;
}

export enum MoneyMovesSearch {
  /**
   * Налоги
   */
  Taxes = 'taxes',
  /**
   * Комиссии
   */
  Commissions = 'commissions',
  /**
   * Зачисление
   */
  Input = 'input',
  /**
   * Вывод
   */
  Withdraw = 'withdraw',
  /**
   * Перевод
   */
  Transfer = 'transfer',
  /**
   * Дивиденды
   */
  Dividends = 'dividends',
  /**
   * Купоны
   */
  Coupons = 'coupons',
  /**
   * Прочее
   */
  Others = 'others'
}

export interface MoneyMovesParams {
  limit?: number;
  offset?: number;
  search?: MoneyMovesSearch;
  /**
   * 2024-01-03
   */
  dateFrom?: string;
  /**
   * 2024-01-03
   */
  dateTo?: string;
  /**
   * Номер портфеля (D12345)
   */
  accountNumber?: string;
  currency?: Currency;
}

export interface MoneyMove {
  sum:           number;
  currency:      Currency;
  agreementFrom: null | string;
  accountFrom:   null | string;
  agreementTo:   null | string;
  accountTo:     null | string;
  type:          Type;
  status:        Status;
  statusName:    string;
  icon:          MoneyMovesSearch;
  id:            string;
  date:          Date;
  title:         string;
  subType:       MoneyMovesSearch;
}

export enum Currency {
  RUB = 'RUB',USD = 'USD',EUR = 'EUR',CNY = 'CNY',HKD = 'HKD'
}

export enum Type {
  Moneymove = "moneymove",
}

export enum OperationsSearch{
  /**
   * Вывод денежных средств
   */
  MoneyWithdrawal = 'money_withdrawal',
  /**
   * Пополнение счета
   */
  MoneyInput = 'money_input',
  /**
   * Услуги
   */
  Services = 'services',
  /**
   * С ценными бумагами
   */
  Securities = 'securities',
  /**
   * Заявки
   */
  Orders = 'orders',
  /**
   * Безопаность
   */
  Security = 'security',
  /**
   * Прочее
   */
  Others = 'others'
}

export interface GetOperationsParams{
  loadDocuments?: boolean;
  limit?: number;
  offset?: number;
  /**
   * Тип операции
   */
  search?: OperationsSearch;
  /**
   * 2024-01-03
   */
  dateFrom?: string;
  /**
   * 2024-01-03
   */
  dateTo?: string;
}

export interface GetOperationsResponse {
  status:       Status;
  statusName:   string;
  icon:         OperationIcon;
  data:         Operation;
  documents:    Document[];
  files:        string[];
  refuseReason: null;
  type:         Type;
  id:           string;
  date:         Date;
  title:        string;
  subType:      string;
}

export interface Operation {
  order?:            string;
  amount?:           number;
  accountFrom?:      string;
  accountTo?:        string;
  subportfolioFrom?: string;
  subportfolioTo?:   string;
  currency?:         string;
  currencyExchange?: string;
  categoryName?:     string;
}

export interface Document {
  id:          number;
  title:       string;
  body:        null;
  hash:        null;
  operationId: number;
  signedAt:    Date | null;
  signed:      boolean;
}

export enum OperationIcon {
  Categorization = "categorization",
  Other = "other",
  Service = "service",
}

export enum Status {
  /**
   * Просрочено
   */
  Overdue = "overdue",
  /**
   * Отклонено
   */
  Refused = "refused",
  /**
   * Исполнено
   */
  Resolved = "resolved",
  /**
   * Исполняется
   */
  executing = "executing"
}

export enum Type {
  Operation = "operation",
}

export enum Events {
  /**
   * Дивиденды
   */
  dividend = 'dividend',
  /**
   * Купоны
   */
  coupon = 'coupon',
  /**
   * Погашения
   */
  amortization = 'amortization',
  /**
   * Оферты
   */
  offer = 'offer'
}

export interface AllEventsCalendarParams {
  from?: string;
  to?: string;
  events?: Events;
}

export interface AllEventsCalendarResponse {
  [date: string]: CalendarDateEvents;
}

export interface CalendarDateEvents {
  bondEvents?:     BondEvents;
  dividendEvents?: DividendEvent[];
}

export interface BondEvents {
  couponEvents:       CouponEvent[];
  amortizationEvents: AmortizationEvent[] | null;
  offerEvents:        OfferEvent[] | null;
}

export interface AmortizationEvent {
  symbol:       string;
  exchange:     Exchange;
  shortName:    string;
  fullName:     string;
  isin:         string;
  date:         Date;
  fixDate:      Date;
  parFraction:  number;
  buyBackPrice: null;
  amount:       number;
  value:        number;
  currency:     Currency;
}

export enum Exchange {
  Moex = "MOEX",
}

export interface CouponEvent {
  symbol:          string;
  exchange:        Exchange;
  shortName:       string;
  fullName:        string;
  isin:            string;
  date:            Date;
  fixDate:         Date | null;
  accruedInterest: number;
  intervalInDays:  number;
  couponType:      CouponType;
  couponRate:      number | null;
  amount:          number;
  value:           number | null;
  currency:        Currency;
}

export enum CouponType {
  Fixed = "FIXED",
  Float = "FLOAT",
  Unknown = "UNKNOWN",
}

export interface OfferEvent {
  symbol:        string;
  exchange:      Exchange;
  shortName:     string;
  fullName:      string;
  isin:          string;
  date:          Date;
  begOrder:      Date | null;
  endOrder:      Date | null;
  fixDate:       Date | null;
  description:   string;
  bondEventType: BondEventType;
  amount:        number;
  value:         number;
  currency:      Currency;
}

export enum BondEventType {
  Call = "CALL",
  Put = "PUT",
}

export interface DividendEvent {
  symbol:                    string;
  exchange:                  Exchange;
  shortName:                 string;
  fullName:                  string;
  isin:                      string;
  recordDate:                Date;
  exDividendDate:            Date;
  declaredPayDateNominee:    Date;
  listDate:                  Date;
  fixDate:                   Date;
  dividendPerShare:          number;
  dividendYield:             number;
  currency:                  Currency;
  recommendDividendPerShare: number;
}

/**
 * Информация о клиенте
 */
export class ClientInfoService {
  constructor(private readonly http: AxiosInstance) {}

  /**
   * Создать операцию на перевод по реквизитам
   * @param agreementNumber
   * @param data
   */
  createOperation(
    agreementNumber: string,
    data: {
      recipient: string;
      account: string;
      currency: Currency;
      subportfolioFrom: "MOEX";
      all: boolean;
      bic: string;
      loroAccount: string;
      bankName: string;
      settlementAccount: string;
      agree: boolean;
      amount: number;
    },
  ): Promise<{
    validations: [];
    formErrors: null;
    data: {};
    operationId: number;
    errorMessage: null;
    success: true;
  }> {
    const formData = new FormData();
    formData.append("operationType", "money_withdrawal");
    formData.append("agreementNumber", agreementNumber);
    formData.append("data", JSON.stringify(data));
    return this.http
      .post(`/client/v2.0/operations/create`, formData, {
        baseURL: "https://lk-api.alor.ru",
      })
      .then((r) => r.data);
  }

  /**
   * Получить информацию об операции по идентификатору
   * @param id Идентификатор операции
   */
  getOperation(id: string): Promise<any> {
    return this.http
      .get(`/client/v2.0/operations/${id}`, {
        baseURL: "https://lk-api.alor.ru",
      })
      .then((r) => r.data);
  }

  /**
   * Получение операций по клиенту
   * @param clientId Идентификатор клиента
   * @param params
   */
  getOperations(clientId: number, params: GetOperationsParams): Promise<GetOperationsResponse> {
    return this.http
        .get(`/client/v1.0/history/${clientId}/operations`, {
          baseURL: "https://lk-api.alor.ru",
        })
        .then((r) => r.data);
  }

  /**
   * Календарь корпоративных событий
   * @param params
   */
  getAllEventsCalendar(params: AllEventsCalendarParams): Promise<AllEventsCalendarResponse> {
    return this.http
        .get(`/instruments/v1/allEventsCalendar`, {
          params,
          baseURL: "https://api.alor.ru",
        })
        .then((r) => r.data);
  }

  /**
   * Отправить СМС-код подтверждения
   * @param data
   */
  getOperationCode(data: {
    agreementNumber: string;
    operationId: string;
  }): Promise<{ errorMessage: null; success: true }> {
    return this.http
      .put(`/client/v2.0/operations/code`, data, {
        baseURL: "https://lk-api.alor.ru",
      })
      .then((r) => r.data);
  }

  /**
   * Подтвердить операцию с помощью смс-кода
   * @param data
   */
  signOperation(data: {
    agreementNumber: string;
    operationId: string;
    confirmationCode: string;
  }): Promise<{ validations: []; errorMessage: null; success: true }> {
    return this.http
      .put(`/client/v2.0/operations/sign`, data, {
        baseURL: "https://lk-api.alor.ru",
      })
      .then((r) => r.data);
  }

  /**
   * Получить все категории риска
   */
  getCategories(): Promise<Category[]> {
    return this.http
        .get(`/client/v2.0/categorization/categories`, {
          baseURL: "https://lk-api.alor.ru",
        })
        .then((r) => r.data);
  }

  /**
   * Получить категории риска по профилю
   * @param clientId Идентификатор клиента
   */
  getProfileCategories(clientId: number): Promise<ProfileCategoriesResponse> {
    return this.http
        .get(`/client/v2.0/categorization/${clientId}/profile`, {
          baseURL: "https://lk-api.alor.ru",
        })
        .then((r) => r.data);
  }

  /**
   * Получить движение денеженых средств
   * @param clientId Идентификатор клиента
   * @param params Параметры
   */
  getMoneyMoves(clientId: number, params: MoneyMovesParams): Promise<MoneyMove[]> {
    return this.http
        .get(`/client/v1.0/history/${clientId}/money-moves`, {
          params,
          baseURL: "https://lk-api.alor.ru",
        })
        .then((r) => r.data);
  }

  refresh(
    refreshToken: string,
  ): Promise<{ jwt: string; refreshExpiresAt: string }> {
    return this.http
      .post(
        `/auth/actions/refresh`,
        { refreshToken },
        {
          baseURL: "https://lk-api.alor.ru",
        },
      )
      .then((r) => r.data);
  }

  login(
    login: string,
    password: string,
    redirect_url: string = "//lk.alor.ru/",
  ): Promise<void> {
    const request: ClientLoginRequest = {
      client_id: "SingleSignOn",
      credentials: {
        login,
        password,
      },
      redirect_url,
    };

    return this.http
      .post(`/sso-auth/client`, request, {
        baseURL: "https://lk-api.alor.ru",
      })
      .then((r) => r.data);
  }

  twoFactorLogin(login: string): Promise<void> {
    return this.http
      .get(`/auth/actions/2factor/?login=${login}`, {
        baseURL: "https://lk-api.alor.ru",
      })
      .then((r) => r.data);
  }

  /**
   * Получаем информацию о пользователе
   */
  getUserInfo(): Promise<UserInfoResponse> {
    const authHeader: string = this.http.defaults.headers.common
      .Authorization as string;

    if (!authHeader) {
      throw new Error("Необходимо авторизоваться");
    }

    const accessToken = authHeader.split("Bearer ")[1];

    if (!accessToken) {
      throw new Error("Необходимо авторизоваться");
    }

    // @ts-ignore
    const decoded: JWTTokenDecoded = jwt_decode<JWTTokenDecoded>(accessToken);

    const phone = decoded.sub;

    return this.http
      .get(`/client/v2.0/users/${phone}`, {
        baseURL: "https://lk-api.alor.ru",
      })
      .then((r) => r.data);
  }

  /**
   * Получаем баланс портфеля за определенный период
   * @param params
   */
  getEquityDynamics(
    params: EquityDynamicsRequest,
  ): Promise<EquityDynamicsResponse> {
    return this.http
      .get(
        `/client/v2.0/agreements/${params.portfolio}/portfolios/any/dynamics`,
        {
          params,
          baseURL: "https://lk-api.alor.ru",
        },
      )
      .then((r) => r.data);
  }

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
