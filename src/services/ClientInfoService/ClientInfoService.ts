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
  assetsSum: number;
  profitablity: number;
  profitablityPct: number;
  dividends: number;
  replenishments: number;
  withdrawals: number;
}

export interface PortfolioValue {
  date: Date;
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

/**
 * Информация о клиенте
 */
export class ClientInfoService {
  constructor(private readonly http: AxiosInstance) {}

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
   * @param params
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
