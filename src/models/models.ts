/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Биржа:
 *   * `MOEX` - Московская биржа
 *   * `SPBX` - СПБ Биржа
 */
export enum Exchange {
  MOEX = "MOEX",
  SPBX = "SPBX",
}

/** @default "Simple" */
export enum Format {
  Simple = "Simple",
}

/**
 * Рынок:
 *   * `FORTS` - Срочный рынок
 *   * `FOND` - Фондовый рынок
 *   * `CURR` - Валютный рынок
 */
export enum Sector {
  FORTS = "FORTS",
  FOND = "FOND",
  CURR = "CURR",
}

/**
 * Направление сделки:
 *   * `buy` - Купля
 *   * `sell` - Продажа
 * @example "buy"
 */
export enum Side {
  Buy = "buy",
  Sell = "sell",
}

/**
 * Тип заявки:
 *   * `OneDay` - До конца дня
 *   * `ImmediateOrCancel` - Снять остаток
 *   * `FillOrKill` - Исполнить целиком или отклонить
 *   * `GoodTillCancelled` - Активна до отмены
 * @default "OneDay"
 * @example "OneDay"
 */
export enum TimeInForce {
  OneDay = "OneDay",
  ImmediateOrCancel = "ImmediateOrCancel",
  FillOrKill = "FillOrKill",
  GoodTillCancelled = "GoodTillCancelled",
}

/**
 * Статус исполнения:
 *   * `working` - На исполнении
 *   * `filled` - Исполнена
 *   * `canceled` - Отменена
 *   * `rejected` - Отклонена
 * @example "filled"
 */
export enum OrderStatus {
  Working = "working",
  Filled = "filled",
  Canceled = "canceled",
  Rejected = "rejected",
}

/**
 * Условие срабатывания стоп/стоп-лимитной заявки:
 *   * `More` - Цена срабатывания больше текущей цены
 *   * `Less` - Цена срабатывания меньше текущей цены
 *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
 *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
 * @example "More"
 */
export enum Condition {
  More = "More",
  Less = "Less",
  MoreOrEqual = "MoreOrEqual",
  LessOrEqual = "LessOrEqual",
}

/**
 * Тип клиента:
 *   * `StandardRisk` - Стандартный уровень риска (КСУР)
 *   * `HighRisk` - Высокий уровень риска (КПУР)
 *   * `Special` -  Особый уровень риска (КОУР)
 * @example "HighRisk"
 */
export enum ClientType {
  StandardRisk = "StandardRisk",
  HighRisk = "HighRisk",
  Special = "Special",
}

/**
 * Категория риска.
 * @format int32
 * @example 2
 */
export type RiskCategoryId = number;

/**
 * Торговый статус инструмента:
 *   * `18` - Нет торгов / торги закрыты
 *   * `118` - Период открытия
 *   * `103` - Период закрытия
 *   * `2` - Перерыв в торгах
 *   * `17` - Нормальный период торгов
 *   * `102` - Аукцион закрытия
 *   * `106` - Аукцион крупных пакетов
 *   * `107` - Дискретный аукцион
 *   * `119` - Аукцион открытия
 *   * `120` - Период торгов по цене аукциона закрытия
 * @format int32
 * @example 17
 */
export type TradingStatus = number;

/**
 * Требуемая категория для осуществления торговли инструментом:
 *   * `Unknown` - Неизвестная категория
 *   * `` - Нет ограничений
 *   * `0` - Инструменты, предназначенные для КИ
 *   * `1` - Необеспеченные сделки
 *   * `2` - Производные финансовые инструменты
 *   * `3` - Договоры репо, требующие тестирования
 *   * `4` - Структурные облигации, не предназначенные для КИ
 *   * `5` - ЗПИФ, не предназначенные для КИ
 *   * `6` - Облигации российских эмитентов без рейтинга
 *   * `7` - Облигации иностранных эмитентов, исполнение по которым обеспечивается за счет юридического лица РФ без рейтинга
 *   * `8` - Облигации со структурным доходом
 *   * `9` - Акции, не включенные в котировальные списки
 *   * `10` - Иностранные акции, требующие проведения тестирования
 *   * `11` - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при наличии договора организатора торговли с "ответственным" лицом
 *   * `12` - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при отсутствии договора организатора торговли с "ответственным" лицом
 *   * `13` - Облигации российских или иностранных эмитентов, конвертируемых в иные ценные бумаги
 *   * `14` - Облигации российских эмитентов с "юрисдикцией" выпуска вне рамок разрешенных
 *   * `15` - Облигации иностранных эмитентов с "юрисдикцией" эмитента вне рамок разрешенных
 *   * `16` - Резерв
 *   * `17` - Все бумаги, не попадающие под тесты из Базового стандарта. Ценные бумаги без листинга на Санкт-Петербургской бирже, возникшие в результате корпоративных событий
 * @example "2"
 */
export enum ComplexProductCategory {
  Unknown = "Unknown",
  Value0 = "0",
  Value1 = "1",
  Value2 = "2",
  Value3 = "3",
  Value4 = "4",
  Value5 = "5",
  Value6 = "6",
  Value7 = "7",
  Value8 = "8",
  Value9 = "9",
  Value10 = "10",
  Value11 = "11",
  Value12 = "12",
  Value13 = "13",
  Value14 = "14",
  Value15 = "15",
  Value16 = "16",
  Value17 = "17",
}

/**
 * Тип заявки:
 *  * Market - Рыночная заявка
 *  * Limit - Лимитная заявка
 *  * Stop - Стоп-заявка
 *  * StopLimit - Стоп-лимит заявка
 */
export enum OrderType {
  Limit = "Limit",
  Market = "Market",
  Stop = "Stop",
  StopLimit = "StopLimit",
}

/**
 * Тип группы заявок:
 *  * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
 *  * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
 *  * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки
 */
export enum ExecutionPolicy {
  OnExecuteOrCancel = "OnExecuteOrCancel",
  IgnoreCancel = "IgnoreCancel",
  TriggerBracketOrders = "TriggerBracketOrders",
}

/**
 * Статус группы заявок
 *  * Active - группа активна
 *  * Filled - группа исполнена торговой системой
 *  * Canceled - группа отменена пользователем
 */
export enum OrderGroupStatus {
  Active = "Active",
  Filled = "Filled",
  Canceled = "Canceled",
}

export interface OrdersActionsLimitMarketCommandAPI {
  /**
   * Вид ответа на успешно выполненный запрос.
   * @example "success"
   */
  message?: string;
  /**
   * Идентификатор заявки
   * @example 18946416113
   */
  orderNumber?: string;
}

export interface OrdersActions400CommandAPI {
  /**
   * Вид ответа для неуникального X-ALOR-REQID
   * @example "Request with such X-ALOR-REQID was already handled. We return the response to that request."
   */
  message?: string;
  oldResponse?: {
    /**
     * @format int32
     * @example 400
     */
    statusCode?: number;
    /** @example "Provided json can't be properly deserialised, perhaps you made an error or forgot some field" */
    body?: string;
  };
}

export interface OrdersActionsStopProfitLossCommandAPI {
  /**
   * Вид ответа на успешно выполненный запрос.
   * @example "Succeeded, OrderNo=326123, EndTime={08.08.18  23:59:59}"
   */
  message?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 326123
   */
  orderNumber?: number;
}

/**
 * Вид ответа на успешно выполненный запрос.
 * @example "success"
 */
export type CommandapiSuccessResponse = string;

export interface CommandapiOrderGroupsErrorResponse {
  /**
   * Описание кода ошибки
   * @example "BadRequest"
   */
  title?: string;
  /**
   * Код ошибки
   * @format int32
   * @example 400
   */
  status?: number;
  /**
   * Описание ошибки
   * @example "Forbidden attempt to modify an order (3625092321506) not owned by the user"
   */
  detail?: string;
}

export interface OrdergroupsActionsGetOrderGroup {
  /**
   * Идентификатор группы заявок
   * @format uuid
   * @example "eafb19d6-c578-4afe-aa95-d528c4531031"
   */
  Id?: string;
  /** @example "P039004" */
  Login?: string;
  /** Список заявок, входящих в группу заявок */
  Orders?: {
    /**
     * Идентификатор заявки
     * @example 123457854
     */
    OrderId?: string;
  }[];
  /**
   * Тип группы заявок:
   *  * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
   *  * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
   *  * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки
   */
  ExecutionPolicy?: ExecutionPolicy;
  /**
   * Статус группы заявок
   *  * Active - группа активна
   *  * Filled - группа исполнена торговой системой
   *  * Canceled - группа отменена пользователем
   */
  Status?: OrderGroupStatus;
  /**
   * Время создания группы заявок
   * @format date-time
   */
  CreatedAt?: string;
  /**
   * Время выполнения/отмены группы заявок
   * @format date-time
   */
  ClosedAt?: string | null;
}

export interface BodyrequestOrdersActionsLimitTVput {
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Тип заявки
   * @example "limit"
   */
  type?: string;
  /**
   * Количество
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Цена
   * @format decimal
   * @example 190.97
   */
  price?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format int32
   * @example 100
   */
  icebergFixed?: number;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number;
}

export interface BodyrequestOrdersActionsMarketTVput {
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Тип заявки
   * @example "market"
   */
  type?: string;
  /**
   * Количество
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор аккаунта пользователя
     * @example "L01-00000F00"
     */
    account?: string;
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
}

export interface BodyrequestOrdersActionsLimitTV {
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Тип заявки
   * @example "limit"
   */
  type?: string;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Цена
   * @format decimal
   * @example 190.97
   */
  price?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format int32
   * @example 100
   */
  icebergFixed?: number;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number;
}

export interface BodyrequestOrdersActionsStopMarketTVWarp {
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /**
   * Цена срабатывания
   * @format decimal
   * @example 191.33
   */
  triggerPrice?: number;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Борд
     * @example "TQBR"
     */
    instrumentGroup?: string;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface BodyrequestOrdersActionsStopLimitTVWarp {
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /**
   * Цена срабатывания
   * @format decimal
   * @example 191.33
   */
  triggerPrice?: number;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
  /**
   * Цена выставления стоп-лимитной заявки
   * @format decimal
   * @example 191.33
   */
  price?: number;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Борд
     * @example "TQBR"
     */
    instrumentGroup?: string;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format int32
   * @example 100
   */
  icebergFixed?: number;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number;
  /**
   * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface BodyrequestOrdersActionsMarketTV {
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Тип заявки
   * @example "market"
   */
  type?: string;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
}

export interface BodyrequestOrdersActionsStopTV {
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Тип заявки
   * @example "takeprofit"
   */
  type?: string;
  /**
   * Стоп-цена
   * @format decimal
   * @example 190.98
   */
  takeProfit?: number;
  /**
   * Стоп-цена
   * @format decimal
   * @example 190.98
   */
  triggerPrice?: number;
  /**
   * Количество
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор аккаунта пользователя
     * @example "L01-00000F00"
     */
    account?: string;
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Срок действия
   * @format date-time
   * @example "2020-05-21T20:59:00.000Z"
   */
  endTime?: string;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
}

export interface BodyrequestOrdersActionsStopLimitTV {
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Цена
   * @format decimal
   * @example 190.97
   */
  price?: number;
  /**
   * Тип заявки
   * @example "takeprofit"
   */
  type?: string;
  /**
   * Стоп-цена
   * @format decimal
   * @example 190.98
   */
  takeProfit?: number;
  /**
   * Стоп-цена
   * @format decimal
   * @example 190.98
   */
  triggerPrice?: number;
  /**
   * Количество
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  user?: {
    /**
     * Идентификатор аккаунта пользователя
     * @example "L01-00000F00"
     */
    account?: string;
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Срок действия
   * @format date-time
   * @example "2020-05-21T20:59:00.000Z"
   */
  endTime?: string;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
}

export interface OrdersActionsLimitMarket {
  /**
   * Вид ответа на успешно выполненный запрос.
   * @example "(162) Заявка на покупку N 9763124 зарегистрирована (1 удовлетворено)."
   */
  message?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 9763124
   */
  orderNumber?: number;
}

export interface OrdersActions400 {
  /**
   * Вид ответа для случая отвергнутой заявки.
   * @example "Заявка не может быть принята из-за возможного недопустимого снижения уровня маржи."
   */
  message?: string;
}

export interface OrdersActionsStopProfitLoss {
  /**
   * Вид ответа на успешно выполненный запрос.
   * @example "Succeeded, OrderNo=326123, EndTime={08.08.18  23:59:59}, OrderEndTime=(None)"
   */
  message?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 326123
   */
  orderNumber?: number;
}

/**
 * Вид ответа на успешно выполненный запрос.
 * @example "Succeeded"
 */
export type OrdersActionsDeleteOrderId = string;

export interface BodyrequestOrdersActionsLimit {
  /**
   * Количество
   * @format int32
   * @example 1
   */
  Quantity?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  Side?: Side;
  /**
   * Цена
   * @format decimal
   * @example 195.11
   */
  Price?: number;
  Instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    Symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  User?: {
    /**
     * Идентификатор аккаунта пользователя
     * @example "L01-00000F00"
     */
    Account?: string;
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    Portfolio?: string;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
}

export interface BodyrequestOrdersActionsMarket {
  /**
   * Количество
   * @format int32
   * @example 1
   */
  Quantity?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  Side?: Side;
  Instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    Symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  User?: {
    /**
     * Идентификатор аккаунта пользователя
     * @example "L01-00000F00"
     */
    Account?: string;
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    Portfolio?: string;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
}

export interface BodyrequestOrdersActionsStop {
  /**
   * Количество
   * @format int32
   * @example 1
   */
  Quantity?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  Side?: Side;
  /**
   * Стоп-цена
   * @format decimal
   * @example 215.11
   */
  TriggerPrice?: number;
  /** Информация об инструмента и бирже */
  Instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    Symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Информация о пользователе */
  User?: {
    /**
     * Идентификатор аккаунта пользователя
     * @example "L01-00000F00"
     */
    Account?: string;
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    Portfolio?: string;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time Seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
}

export interface BodyrequestOrdersActionsStoplimit {
  /**
   * Количество
   * @format int32
   * @example 1
   */
  Quantity?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  Side?: Side;
  /**
   * Стоп-цена
   * @format decimal
   * @example 205.11
   */
  TriggerPrice?: number;
  /**
   * Цена
   * @format decimal
   * @example 210.11
   */
  Price?: number;
  Instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    Symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  User?: {
    /**
     * Идентификатор аккаунта пользователя
     * @example "L01-00000F00"
     */
    Account?: string;
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    Portfolio?: string;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format int32
   * @example 100
   */
  icebergFixed?: number;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number;
}

export interface BodyrequestCreateOrderGroup {
  /** Заявки, из которых будет состоять группа */
  Orders: OrderGroupItem[];
  /**
   * Тип группы заявок:
   *  * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
   *  * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
   *  * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки
   */
  ExecutionPolicy: ExecutionPolicy;
}

export interface BodyrequestModifyOrderGroup {
  /** Заявки, из которых будет состоять группа */
  Orders?: OrderGroupItem[];
  /**
   * Тип группы заявок:
   *  * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
   *  * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
   *  * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки
   */
  ExecutionPolicy: ExecutionPolicy;
}

export interface OrderGroupItem {
  Portfolio?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  Exchange?: Exchange;
  /**
   * Идентификатор заявки
   * @example 1532944860
   */
  OrderId?: string;
  /**
   * Тип заявки:
   *  * Market - Рыночная заявка
   *  * Limit - Лимитная заявка
   *  * Stop - Стоп-заявка
   *  * StopLimit - Стоп-лимит заявка
   */
  Type?: OrderType;
}

export type Symbols = Symbol[];

export type Orders = Order[];

export type Stoporders = Stoporder[];

export type StopordersWarp = StoporderWarp[];

export interface History {
  history?: HistoryObject[];
  /**
   * Время (UTC) начала следующей свечи
   * @format int64
   * @example 1532944860
   */
  next?: number | null;
  /**
   * Время (UTC) начала предыдущей свечи
   * @format int64
   * @example 1532944860
   */
  prev?: number | null;
}

export type Positions = Position[];

export type Trades = Trade[];

/** Данные о запрашиваемом "биржевом стакане" */
export interface Orderbook {
  /**
   * Deprecated. Устаревшее поле, будет удалено в будущих обновлениях.
   * @deprecated
   * @example true
   */
  snapshot?: boolean;
  /** Биды */
  bids?: OrderbookBid[];
  /** Аски */
  asks?: OrderbookAsk[];
  /**
   * Deprecated. Устаревшее поле, будет удалено в будущих обновлениях. Вместо этого поля используйте поле "ms_timestamp".
   * @deprecated
   * @format decimal
   * @example 1610982677
   */
  timestamp?: number;
  /**
   * Время(UTC) в формате Unix Time Milliseconds
   * @format int64
   * @example 1610982677578
   */
  ms_timestamp?: number;
  /**
   * True - для данных из "снепшота", то есть из истории. False - для новых событий
   * @example false
   */
  existing?: boolean;
}

export interface OrderbookBid {
  /**
   * Цена
   * @format decimal
   * @example 115820
   */
  price?: number;
  /**
   * Объём
   * @format int32
   * @example 23
   */
  volume?: number;
}

export interface OrderbookAsk {
  /**
   * Цена
   * @format decimal
   * @example 116030
   */
  price?: number;
  /**
   * Объём
   * @format int32
   * @example 31
   */
  volume?: number;
}

export type Alltrades = Alltrade[];

export interface Alltradeshistory {
  /**
   * Количество записей
   * @format int32
   * @example 23
   */
  total?: number;
  list?: Alltrade[];
}

export type Securities = Security[];

export interface RiskRates {
  /** Ставка риска */
  list?: RiskRate[];
  /**
   * Количество записей
   * @format int32
   * @example 23
   */
  total?: number;
}

export interface Symbol {
  /**
   * Тикер (Код финансового инструмента)
   * @example "KMEZ"
   */
  symbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Короткое описание на русском языке
   * @example "КМЗ"
   */
  description?: string;
  /**
   * Аск
   * @format decimal
   * @example 171.87
   */
  ask?: number;
  /**
   * Бид
   * @format decimal
   * @example 171.82
   */
  bid?: number;
  /**
   * Цена предыдущего закрытия
   * @format decimal
   * @example 174.9
   */
  prev_close_price?: number;
  /**
   * Последняя цена
   * @format decimal
   * @example 171.82
   */
  last_price?: number;
  /**
   * UTC-timestamp для значения поля "last_price"
   * @format int64
   * @example 1610982677
   */
  last_price_timestamp?: number;
  /**
   * Разность цены и цены предыдущего закрытия
   * @format decimal
   * @example -3.08
   */
  change?: number;
  /**
   * Относительное изменение цены
   * @format decimal
   * @example -1.76
   */
  change_percent?: number;
  /**
   * Максимальная цена
   * @format decimal
   * @example 176.02
   */
  high_price?: number;
  /**
   * Минимальная цена
   * @format decimal
   * @example 170.33
   */
  low_price?: number;
  /**
   * Начислено (НКД)
   * @format decimal
   * @example 0
   */
  accruedInt?: number;
  /**
   * Начислено (НКД)
   * @deprecated
   * @format decimal
   * @example 0
   */
  accrued_interest?: number;
  /**
   * Объём
   * @format decimal
   * @example 38767080
   */
  volume?: number;
  /**
   * @format decimal
   * @example null
   */
  open_interest?: number | null;
  /**
   * Цена открытия
   * @format decimal
   * @example 175.07
   */
  open_price?: number;
  /**
   * @format int32
   * @example null
   */
  yield?: number | null;
  /**
   * Размер лота
   * @format decimal
   * @example 10
   */
  lotsize?: number;
  /**
   * @format decimal
   * @example 1990.2
   */
  lotvalue?: number;
  /**
   * @format decimal
   * @example 5
   */
  facevalue?: number;
  /** @example "CS" */
  type?: string | null;
}

export interface SymbolFutures {
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBRF-9.20"
   */
  symbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Короткое описание на русском языке
   * @example "SRU0"
   */
  description?: string;
  /**
   * Аск
   * @format decimal
   * @example 171.87
   */
  ask?: number;
  /**
   * Бид
   * @format decimal
   * @example 171.82
   */
  bid?: number;
  /**
   * Цена предыдущего закрытия
   * @format decimal
   * @example 174.9
   */
  prev_close_price?: number;
  /**
   * Последняя цена
   * @format decimal
   * @example 171.82
   */
  last_price?: number;
  /**
   * Время последней цены (UTC)
   * @format int64
   * @example 91022000
   */
  last_price_timestamp?: number;
  /**
   * Разность цены и цены предыдущего закрытия
   * @format decimal
   * @example -3.08
   */
  change?: number | null;
  /**
   * Относительное изменение цены
   * @format decimal
   * @example -1.76
   */
  change_percent?: number | null;
  /**
   * Максимальная цена
   * @format decimal
   * @example 176.02
   */
  high_price?: number;
  /**
   * Минимальная цена
   * @format decimal
   * @example 170.33
   */
  low_price?: number;
  /**
   * Начислено (НКД)
   * @format decimal
   * @example 0
   */
  accruedInt?: number | null;
  /**
   * Начислено (НКД)
   * @deprecated
   * @format decimal
   * @example 0
   */
  accrued_interest?: number | null;
  /**
   * Объём
   * @format decimal
   * @example 38767080
   */
  volume?: number;
  /**
   * Цена открытия
   * @format decimal
   * @example 175.07
   */
  open_price?: number;
  /**
   * @format int32
   * @example null
   */
  yield?: number | null;
  /**
   * Размер лота
   * @format decimal
   * @example 10
   */
  lotsize?: number;
  /**
   * @format decimal
   * @example 1990.2
   */
  lotvalue?: number;
  /**
   * @format decimal
   * @example 5
   */
  facevalue?: number;
  /** @example "Фьючерсный контракт SBRF-9.20" */
  type?: string;
}

export interface Money {
  /**
   * Количество средств
   * @format decimal
   * @example 25614.89
   */
  cash?: number;
  /**
   * Количество использованных
   * @format decimal
   * @example 45536.11
   */
  used?: number;
  /**
   * Средства на момент открытия
   * @format decimal
   * @example 45536.11
   */
  open?: number;
  /**
   * Прибыль
   * @format decimal
   * @example -354.7
   */
  profit?: number;
  /**
   * Прибыль в процентах
   * @format decimal
   * @example -354.7
   */
  profitRate?: number;
  /**
   * Комиссия (в рублях)
   * @format decimal
   * @example 2
   */
  comission?: number;
  /**
   * Изменения
   * @format decimal
   * @example 525.21
   */
  changes?: number;
  /**
   * Идентификатор клиентского портфеля
   * @format decimal
   * @example 525.56
   */
  portfolio?: number;
  /**
   * Свободные средства
   * @format decimal
   * @example 525.25
   */
  free?: number;
}

export interface Order {
  /**
   * Уникальный идентификатор заявки
   * @example "18995978560"
   */
  id?: string;
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Пара биржа-Тикер
   * @example "MOEX:SBER"
   */
  brokerSymbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /**
   * Тип заявки:
   *   * `limit` - Лимитная заявка
   *   * `market` - Рыночная заявка
   * @example "market"
   */
  type?: "limit" | "market";
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Статус исполнения:
   *   * `working` - На исполнении
   *   * `filled` - Исполнена
   *   * `canceled` - Отменена
   *   * `rejected` - Отклонена
   */
  status?: OrderStatus;
  /**
   * Время выставления (UTC)
   * @format date-time
   * @example "2020-06-16T23:59:59.9990000"
   */
  transTime?: string;
  /**
   * Время завершения (UTC)
   * @format date-time
   * @example "2020-06-16T23:59:59.9990000"
   */
  endTime?: string;
  /**
   * Количество (штуки)
   * @format int32
   * @example 1
   */
  qtyUnits?: number;
  /**
   * Количество (лоты)
   * @format decimal
   * @example 1
   */
  qtyBatch?: number;
  /**
   * Количество (лоты)
   * @format decimal
   * @example 1
   */
  qty?: number;
  /**
   * Количество исполненных (штуки)
   * @format decimal
   * @example 1
   */
  filledQtyUnits?: number;
  /**
   * Количество исполненных (лоты)
   * @format decimal
   * @example 1
   */
  filledQtyBatch?: number;
  /**
   * Количество исполненных (лоты)
   * @format decimal
   * @example 1
   */
  filled?: number;
  /**
   * Цена
   * @format decimal
   * @example 208.6
   */
  price?: number;
  /**
   * True - для данных из "снепшота", то есть из истории. False - для новых событий
   * @example true
   */
  existing?: boolean;
}

export interface Stoporder {
  /**
   * Уникальный идентификатор стоп-заявки
   * @format decimal
   * @example 347498
   */
  id?: number;
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Пара Биржа:Тикер
   * @example "MOEX:LKOH"
   */
  brokerSymbol?: string;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   * @example "stop"
   */
  type?: "stop" | "stoplimit";
  /**
   * Условная цена
   * @format decimal
   * @example 215
   */
  stopPrice?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Статус исполнения:
   *   * `working` - На исполнении
   *   * `filled` - Исполнена
   *   * `canceled` - Отменена
   *   * `rejected` - Отклонена
   */
  status?: OrderStatus;
  /**
   * Время действия заявки (UTC)
   * @format date-time
   * @example "2020-06-16T23:59:59.9990000"
   */
  endTime?: string;
  /**
   * Количество
   * @format decimal
   * @example 1
   */
  qty?: number;
  /**
   * Количество исполненных
   * @format decimal
   * @example 1
   */
  filledQtyBatch?: number;
  /**
   * Цена(Лимит)
   * @format decimal
   * @example 208.6
   */
  price?: number;
  /**
   * True - для данных из "снепшота", то есть из истории. False - для новых событий
   * @example true
   */
  existing?: boolean;
}

export interface StoporderWarp {
  /**
   * Уникальный идентификатор стоп-заявки
   * @format int64
   * @example 347499
   */
  id?: number;
  /**
   * Уникальный идентификатор стоп-заявки
   * @format int64
   * @example 425242362
   */
  exchangeOrderId?: number;
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Пара Биржа:Тикер
   * @example "MOEX:LKOH"
   */
  brokerSymbol?: string;
  /**
   * Пара Биржа:Тикер
   * @example "D39004"
   */
  portfolio?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   * @example "stop"
   */
  type?: "stop" | "stoplimit";
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /**
   * Статус исполнения:
   *   * `working` - На исполнении
   *   * `filled` - Исполнена
   *   * `canceled` - Отменена
   *   * `rejected` - Отклонена
   */
  status?: OrderStatus;
  /**
   * Время выставления заявки (UTC)
   * @format date-time
   * @example "2020-05-16T23:59:59.9990000"
   */
  transTime?: string;
  /**
   * Время действия заявки (UTC)
   * @format date-time
   * @example "2020-06-16T23:59:59.9990000"
   */
  endTime?: string;
  /**
   * Количество (Штуки)
   * @format decimal
   * @example 10
   */
  qtyUnits?: number;
  /**
   * Количество (Лоты)
   * @format decimal
   * @example 1
   */
  qtyBatch?: number;
  /**
   * Количество (Лоты)
   * @format decimal
   * @example 1
   */
  qty?: number;
  /**
   * Цена(Лимит)
   * @format decimal
   * @example 208.6
   */
  price?: number;
  /**
   * Средняя цена
   * @format decimal
   * @example 0
   */
  avg_price?: number;
  /**
   * Условная цена
   * @format decimal
   * @example 215
   */
  stopPrice?: number;
  /**
   * True - для данных из "снепшота", то есть из истории. False - для новых событий
   * @example true
   */
  existing?: boolean;
}

export interface HistoryObject {
  /**
   * Время (UTC) (Unix time seconds)
   * @format int64
   * @example 1532944740
   */
  time?: number;
  /**
   * Цена при закрытии
   * @format decimal
   * @example 210.83
   */
  close?: number;
  /**
   * Цена при открытии
   * @format decimal
   * @example 210.82
   */
  open?: number;
  /**
   * Максимальная цена
   * @format decimal
   * @example 210.83
   */
  high?: number;
  /**
   * Миниимальная цена
   * @format decimal
   * @example 210.68
   */
  low?: number;
  /**
   * Объём
   * @format int32
   * @example 1944
   */
  volume?: number;
}

export interface Summary {
  /**
   * Покупательская способность на утро
   * @format decimal
   * @example 439844.15
   */
  buyingPowerAtMorning?: number;
  /**
   * Покупательская способность
   * @format decimal
   * @example 452404
   */
  buyingPower?: number;
  /**
   * Прибыль за сегодня
   * @format decimal
   * @example 12560
   */
  profit?: number;
  /**
   * Норма прибыли, %
   * @format decimal
   * @example 1.93
   */
  profitRate?: number;
  /**
   * Ликвидный портфель
   * @format decimal
   * @example 651717
   */
  portfolioEvaluation?: number;
  /**
   * Оценка портфеля
   * @format decimal
   * @example 651717
   */
  portfolioLiquidationValue?: number;
  /**
   * Маржа
   * @format decimal
   * @example 199313
   */
  initialMargin?: number;
  /**
   * Риск до закрытия
   * @format decimal
   * @example 552061
   */
  riskBeforeForcePositionClosing?: number;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  commission?: number | null;
}

export interface Position {
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  symbol?: string;
  /**
   * Пара Биржа:Тикер
   * @example "MOEX:LKOH"
   */
  brokerSymbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Объём, расчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  volume?: number;
  /**
   * Объём, расчитанный по текущей цене
   * @format decimal
   * @example 38798790
   */
  currentVolume?: number;
  /**
   * Средняя цена
   * @format decimal
   * @example 16.6
   */
  avgPrice?: number;
  /**
   * Количество (штуки)
   * @format decimal
   * @example 20
   */
  qtyUnits?: number;
  /**
   * Количество открытых позиций на момент открытия (начала торгов)
   * @format decimal
   * @example 30
   */
  openUnits?: number;
  /**
   * Размер лота
   * @format decimal
   * @example 1
   */
  lotSize?: number;
  /**
   * Короткое наименование
   * @example "ЛУКОЙЛ"
   */
  shortName?: string;
  /**
   * Агрегированное количество T0 (штуки)
   * @format decimal
   * @example 20
   */
  qtyT0?: number;
  /**
   * Агрегированное количество T1 (штуки)
   * @format decimal
   * @example 20
   */
  qtyT1?: number;
  /**
   * Агрегированное количество T2 (штуки)
   * @format decimal
   * @example 20
   */
  qtyT2?: number;
  /**
   * Количество (штуки)
   * @format decimal
   * @example 20
   */
  qtyTFuture?: number;
  /**
   * Агрегированное количество T0 (лоты)
   * @format decimal
   * @example 20
   */
  qtyT0Batch?: number;
  /**
   * Агрегированное количество T1 (лоты)
   * @format decimal
   * @example 20
   */
  qtyT1Batch?: number;
  /**
   * Агрегированное количество T2 (лоты)
   * @format decimal
   * @example 20
   */
  qtyT2Batch?: number;
  /**
   * Агрегированное количество TFuture (лоты)
   * @format decimal
   * @example 20
   */
  qtyTFutureBatch?: number;
  /**
   * Агрегированное количество TFuture
   * @format decimal
   * @example 20
   */
  qtyBatch?: number;
  /**
   * Агрегированное количество на момент открытия (начала торгов) (лоты)
   * @format decimal
   * @example 20
   */
  openQtyBatch?: number;
  /**
   * Агрегированное количество (лоты)
   * @format decimal
   * @example 20
   */
  qty?: number;
  /**
   * Агрегированное количество на момент открытия (начала торгов) (штуки)
   * @format decimal
   * @example 20
   */
  open?: number;
  /**
   * @format decimal
   * @example 3250
   */
  unrealisedPl?: number;
  /**
   * True для валютных остатков (денег), false - для торговых инструментов
   * @example false
   */
  isCurrency?: boolean;
}

export interface Fortsrisk {
  /**
   * Идентификатор клиентского портфеля
   * @example "D49004"
   */
  portfolio?: string;
  /**
   * Свободные средства. Сумма рублей и залогов, дисконтированных в рубли, доступная для открытия позиций. (MoneyFree = MoneyAmount + VmInterCl – MoneyBlocked – VmReserve – Fee)
   * @format decimal
   * @example 452404
   */
  moneyFree?: number;
  /**
   * Средства, заблокированные под ГО
   * @format decimal
   * @example 12560
   */
  moneyBlocked?: number;
  /**
   * Сальдо денежных торговых переводов за текущую сессию (поле будет удалено в будущих обновлениях)
   * @deprecated
   * @format decimal
   * @example 1.93
   */
  balanceMoney?: number;
  /**
   * Списанный сбор
   * @format decimal
   * @example 651717
   */
  fee?: number;
  /**
   * Общее количество рублей и дисконтированных в рубли залогов на начало сессии
   * @format decimal
   * @example 651717
   */
  moneyOld?: number;
  /**
   * Общее количество рублей и дисконтированных в рубли залогов
   * @format decimal
   * @example 199313
   */
  moneyAmount?: number;
  /**
   * Сумма залогов, дисконтированных в рубли
   * @format decimal
   * @example 552061
   */
  moneyPledgeAmount?: number;
  /**
   * Вариационная маржа, списанная или полученная в пром. клиринг
   * @format decimal
   * @example 651717
   */
  vmInterCl?: number;
  /**
   * Сагрегированная вармаржа по текущим позициям
   * @format decimal
   * @example 199313
   */
  vmCurrentPositions?: number;
  /**
   * VmCurrentPositions + VmInterCl
   * @format decimal
   * @example 552061
   */
  varMargin?: number;
  /**
   * Наличие установленных денежного и залогового лимитов
   * @example false
   */
  isLimitsSet?: boolean;
}

export interface Risk {
  /**
   * Идентификатор клиентского портфеля
   * @example "D49004"
   */
  portfolio?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Общая стоимость портфеля
   * @format decimal
   * @example 646270.9
   */
  portfolioEvaluation?: number;
  /**
   * Стоимость ликвидного портфеля
   * @format decimal
   * @example 646270.9
   */
  portfolioLiquidationValue?: number;
  /**
   * Начальная маржа
   * @format decimal
   * @example 15752.115
   */
  initialMargin?: number;
  /**
   * Минимальная маржа
   * @format decimal
   * @example 65177.0575
   */
  minimalMargin?: number;
  /**
   * Скорректированная маржа
   * @format decimal
   * @example 15752.115
   */
  correctedMargin?: number;
  /**
   * НПР1
   * @format decimal
   * @example 630518.785
   */
  riskCoverageRatioOne?: number;
  /**
   * НПР2
   * @format decimal
   * @example 638394.8425
   */
  riskCoverageRatioTwo?: number;
  /** Категория риска. */
  riskCategoryId?: RiskCategoryId;
  /**
   * Тип клиента:
   *   * `StandardRisk` - Стандартный уровень риска (КСУР)
   *   * `HighRisk` - Высокий уровень риска (КПУР)
   *   * `Special` -  Особый уровень риска (КОУР)
   */
  clientType?: ClientType;
  /**
   * Имеются ли запретные позиции
   * @example false
   */
  hasForbiddenPositions?: boolean;
  /**
   * Имеются ли отрицательные количества
   * @example false
   */
  hasNegativeQuantity?: boolean;
}

export interface Alltrade {
  /**
   * Уникальный идентификатор.
   * @format int64
   * @example 159
   */
  id?: number;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 0
   */
  orderno?: number;
  /**
   * Тикер (Код финансового инструмента). "[N/A]" используется если symbol не определен.
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Количество
   * @format int32
   * @example 1
   */
  qty?: number;
  /**
   * Цена
   * @format decimal
   * @example 142.52
   */
  price?: number;
  /**
   * Дата и время (UTC) закрытия заявки
   * @format date-time
   * @example "2018-08-07T08:40:03.445Z"
   */
  time?: string;
  /**
   * Время (UTC) в формате Unix Time Milliseconds
   * @format int64
   * @example 1611158710768
   */
  timestamp?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Открытый интерес (open interest). Если не поддерживается инстурментом - значение 0.
   * @format int32
   * @example 523920
   */
  oi?: number;
  /**
   * True - для данных из "снепшота", то есть из истории. False - для новых событий
   * @example false
   */
  existing?: boolean;
}

export interface Security {
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Краткое наименование инструмента
   * @example "Сбербанк"
   */
  shortname?: string;
  /**
   * Краткое описание инструмента
   * @example "Сбербанк России ПАО ао"
   */
  description?: string;
  /**
   * Биржа
   * @example "MOEX"
   */
  exchange?: string;
  /**
   * Тип
   * @example "CS"
   */
  type?: string | null;
  /**
   * Размер лота
   * @format decimal
   * @example 1
   */
  lotsize?: number;
  /**
   * Номинальная стоимость
   * @format decimal
   * @example 100
   */
  facevalue?: number;
  /**
   * Тип ценной бумаги согласно стандарту ISO 10962
   * @example "ESXXXX"
   */
  cfiCode?: string;
  /**
   * Дата и время (UTC) окончания действия
   * @example "2018-09-03T00:00:00"
   */
  cancellation?: string;
  /**
   * Минимальный шаг цены
   * @format decimal
   * @example 0.01
   */
  minstep?: number;
  /**
   * @format decimal
   * @example 195613886
   */
  rating?: number;
  /**
   * Цена маржинальной покупки (заемные средства)
   * @format decimal
   * @example 6707.86
   */
  marginbuy?: number;
  /**
   * Цена маржинальной продажи (заемные средства)
   * @format decimal
   * @example 6707.86
   */
  marginsell?: number;
  /**
   * Отношение цены маржинальной покупки к цене последней сделки
   * @format decimal
   * @example 89.3428
   */
  marginrate?: number;
  /**
   * Минимальный шаг цены, выраженный в рублях
   * @format decimal
   * @example 6.30202
   */
  pricestep?: number;
  /**
   * Максимальная цена
   * @format decimal
   * @example 79.57
   */
  priceMax?: number;
  /**
   * Минимальная цена
   * @format decimal
   * @example 70.55
   */
  priceMin?: number;
  /**
   * Теоретическая цена опциона
   * @format decimal
   * @example 0
   */
  theorPrice?: number;
  /**
   * Теоретическая цена опциона с учетом лимитов
   * @format decimal
   * @example 0
   */
  theorPriceLimit?: number;
  /**
   * Волатильность
   * @format decimal
   * @example 0
   */
  volatility?: number;
  /**
   * Валюта
   * @example "RUB"
   */
  currency?: string | null;
  /**
   * Идентификатор ценной бумаги согласно стандарту ISO 6166
   * @example "RU000A1014L8"
   */
  ISIN?: string | null;
  /**
   * @format int32
   * @example null
   */
  yield?: number | null;
  /**
   * Код режима торгов
   * @example "ROPD"
   */
  primary_board?: string;
  /**
   * Торговый статус инструмента:
   *   * `18` - Нет торгов / торги закрыты
   *   * `118` - Период открытия
   *   * `103` - Период закрытия
   *   * `2` - Перерыв в торгах
   *   * `17` - Нормальный период торгов
   *   * `102` - Аукцион закрытия
   *   * `106` - Аукцион крупных пакетов
   *   * `107` - Дискретный аукцион
   *   * `119` - Аукцион открытия
   *   * `120` - Период торгов по цене аукциона закрытия
   */
  tradingStatus?: TradingStatus;
  /**
   * Описание торгового статуса инструмента
   * @example "нормальный период торгов"
   */
  tradingStatusInfo?: string | null;
  /**
   * Требуемая категория для осуществления торговли инструментом:
   *   * `Unknown` - Неизвестная категория
   *   * `` - Нет ограничений
   *   * `0` - Инструменты, предназначенные для КИ
   *   * `1` - Необеспеченные сделки
   *   * `2` - Производные финансовые инструменты
   *   * `3` - Договоры репо, требующие тестирования
   *   * `4` - Структурные облигации, не предназначенные для КИ
   *   * `5` - ЗПИФ, не предназначенные для КИ
   *   * `6` - Облигации российских эмитентов без рейтинга
   *   * `7` - Облигации иностранных эмитентов, исполнение по которым обеспечивается за счет юридического лица РФ без рейтинга
   *   * `8` - Облигации со структурным доходом
   *   * `9` - Акции, не включенные в котировальные списки
   *   * `10` - Иностранные акции, требующие проведения тестирования
   *   * `11` - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при наличии договора организатора торговли с "ответственным" лицом
   *   * `12` - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при отсутствии договора организатора торговли с "ответственным" лицом
   *   * `13` - Облигации российских или иностранных эмитентов, конвертируемых в иные ценные бумаги
   *   * `14` - Облигации российских эмитентов с "юрисдикцией" выпуска вне рамок разрешенных
   *   * `15` - Облигации иностранных эмитентов с "юрисдикцией" эмитента вне рамок разрешенных
   *   * `16` - Резерв
   *   * `17` - Все бумаги, не попадающие под тесты из Базового стандарта. Ценные бумаги без листинга на Санкт-Петербургской бирже, возникшие в результате корпоративных событий
   */
  complexProductCategory?: ComplexProductCategory;
}

export interface RiskRate {
  /**
   * Id записи
   * @format int64
   * @example 22229
   */
  id?: number;
  /**
   * Инструмент
   * @example "SBERP"
   */
  instrument?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /** Категория риска. */
  riskCategoryId?: RiskCategoryId;
  /**
   * Id категории бумаги для категоризации.
   * @format decimal
   * @example 1
   */
  securityRiskCategoryId?: number | null;
  /**
   * Тип актива
   * @example "stock"
   */
  assetType?: string;
  /**
   * Чаще всего будет null. Поле показывает к какому базовому инструменту принадлежит данный инструмент.
   * @example "SBER"
   */
  underlyingAsset?: string | null;
  /**
   * Чаще всего будет null. Поле показывает к множеству инструменту принадлежит данный инструмент.
   * @example "SBER"
   */
  setName?: string | null;
  /**
   * Является ли зависимость инструмента к базовому активу прямой или обратной.
   * @example false
   */
  isDirect?: boolean;
  /**
   * ISIN инструмента. Если есть.
   * @example "RU0009029557"
   */
  isin?: string;
  /**
   * Код валюты расчетов
   * @example "RUB"
   */
  currencyCode?: string;
  /**
   * Ставка риска повышения цены. Применяется для шортов.
   * @format decimal
   * @example 20
   */
  rateUp?: number;
  /**
   * Ставка риска понижения цены. Применяется для лонгов.
   * @format decimal
   * @example 10
   */
  rateDown?: number;
  /**
   * Симметричная ставка риска. Приведена для справки, не используется
   * @format decimal
   * @example 10
   */
  rateSymmetric?: number;
  /**
   * Разрешен ли шорт по бумаге. True если да.
   * @example true
   */
  isShortSellPossible?: boolean;
  /**
   * Доступен ли данный инструмент в маржу. Т.е. есть ли он в списке маржинальных инструментов брокера.
   * @example true
   */
  isMarginal?: boolean;
  /**
   * Ставка риска множества
   * @format decimal
   * @example 0
   */
  setRate?: number;
  /**
   * Время добавления ставки риска
   * @example "2021-08-24T10:13:01.6584899"
   */
  createdAt?: string;
  /**
   * Время последнего обновления ставки риска
   * @format date-time
   * @example "2021-10-13T16:01:42.7957367"
   */
  updatedAt?: string;
}

/**
 * Текущее время (UTC) в формате Unix time seconds
 * @format int64
 * @example 1532944071
 */
export type Time = number;

export interface Trade {
  /**
   * Уникальный идентификатор сделки
   * @format decimal
   * @example 159
   */
  id?: number;
  /**
   * Идентификатор заявки
   * @example 7271479
   */
  orderno?: string;
  /**
   * Тикер (Код финансового инструмента). "[N/A]" используется если symbol не определен.
   * @example "GAZP"
   */
  symbol?: string;
  /**
   * Пара Биржа:Тикер
   * @example "GAZP:MOEX"
   */
  brokerSymbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Дата и время (UTC) закрытия заявки
   * @format date-time
   * @example "2018-08-07T08:40:03.445Z"
   */
  date?: string;
  /**
   * Код режима торгов
   * @example "TQBR"
   */
  board?: string;
  /**
   * Количество (штуки)
   * @format int32
   * @example 1
   */
  qtyUnits?: number;
  /**
   * Количество (лоты)
   * @format int32
   * @example 1
   */
  qtyBatch?: number;
  /**
   * Количество (лоты)
   * @format int32
   * @example 1
   */
  qty?: number;
  /**
   * Цена
   * @format decimal
   * @example 142.52
   */
  price?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * True - для данных из "снепшота", то есть из истории. False - для новых событий
   * @example false
   */
  existing?: boolean;
  /** Специальные поля для сделок РЕПО */
  repoSpecificFields?: {
    /**
     * Цена репо в процентах годовых.
     * @format decimal
     * @example 23.45
     */
    repoRate?: number;
    /**
     * Поле-примечание, используется для обратной связи с внешними системами. Например, идентификатор пользователя внешней системы, поставившего заявку.
     * @example "MB0014100002"
     */
    extRef?: string;
    /**
     * Срок РЕПО - промежуток времени, выраженный в календарных днях, между датами исполнения первой и второй частей сделки РЕПО.
     * @format int32
     * @example 2
     */
    repoTerm?: number;
    /**
     * Торговый счет, в счет которого заключена данная сделка
     * @example "MB0014100002"
     */
    account?: string;
    /**
     * Описание типа сделки
     * @example "Расчетная по операции своп"
     */
    tradeTypeInfo?: string;
    /**
     * Объем сделки, выраженный в валюте расчетов
     * @format decimal
     * @example 46
     */
    value?: number;
    /**
     * Доходность, рассчитанная по цене сделки
     * @format decimal
     * @example 23.45
     */
    yield?: number;
  };
}

export interface WsResOrderBookGetAndSubscribe {
  /** Данные о запрашиваемом "биржевом стакане" */
  data?: Orderbook;
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResBarsGetAndSubscribe {
  /** Сообщение с данными о ценах на рынке (свечи) */
  data?: {
    /**
     * Время (UTC) (Unix time seconds)
     * @format int64
     * @example 1620220020
     */
    time?: number;
    /**
     * Цена при закрытии
     * @format decimal
     * @example 210.83
     */
    close?: number;
    /**
     * Цена при открытии
     * @format decimal
     * @example 210.82
     */
    open?: number;
    /**
     * Максимальная цена
     * @format decimal
     * @example 210.83
     */
    high?: number;
    /**
     * Минимальная цена
     * @format decimal
     * @example 210.68
     */
    low?: number;
    /**
     * Объём
     * @format int32
     * @example 1944
     */
    volume?: number;
  };
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResQuotesSubscribe {
  data?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Короткое описание на русском языке
     * @example "Сбербанк России ПАО ао"
     */
    description?: string;
    /**
     * Аск
     * @format decimal
     * @example 303.65
     */
    ask?: number;
    /**
     * Бид
     * @format decimal
     * @example 303.59
     */
    bid?: number;
    /**
     * Цена предыдущего закрытия
     * @format decimal
     * @example 303.7
     */
    prev_close_price?: number;
    /**
     * Последняя цена
     * @format decimal
     * @example 303.59
     */
    last_price?: number;
    /**
     * Время последней цены (UTC)
     * @format int64
     * @example 1620221538
     */
    last_price_timestamp?: number;
    /**
     * Разность цены и цены предыдущего закрытия
     * @format decimal
     * @example -0.11
     */
    change?: number | null;
    /**
     * Относительное изменение цены
     * @format decimal
     * @example -0.04
     */
    change_percent?: number | null;
    /**
     * Максимальная цена
     * @format decimal
     * @example 305
     */
    high_price?: number;
    /**
     * Минимальная цена
     * @format decimal
     * @example 302.71
     */
    low_price?: number;
    /**
     * Начислено (НКД)
     * @format decimal
     * @example 0
     */
    accruedInt?: number | null;
    /**
     * Начислено (НКД)
     * @deprecated
     * @format decimal
     * @example 0
     */
    accrued_interest?: number | null;
    /**
     * Объём
     * @format decimal
     * @example 38767080
     */
    volume?: number;
    /**
     * Цена открытия
     * @format decimal
     * @example 304.01
     */
    open_price?: number;
    /**
     * @format int32
     * @example null
     */
    yield?: number | null;
    /**
     * Размер лота
     * @format decimal
     * @example 10
     */
    lotsize?: number;
    /**
     * @format decimal
     * @example 3035.9
     */
    lotvalue?: number;
    /**
     * @format decimal
     * @example 3
     */
    facevalue?: number;
    /** @example "CS" */
    type?: string | null;
  };
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResPositionsGetAndSubscribe {
  /** Сообщение с данными о позициях по ценным бумагам и валютным остаткам */
  data?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "AFLT"
     */
    symbol?: string;
    /**
     * Биржа:Тикер
     * @example "MOEX:AFLT"
     */
    brokerSymbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Объём, расчитанный по средней цене
     * @format decimal
     * @example 38767080
     */
    volume?: number;
    /**
     * Объём, расчитанный по текущей цене
     * @format decimal
     * @example 38798790
     */
    currentVolume?: number;
    /**
     * Средняя цена сделок по позициям
     * @format decimal
     * @example 82.3
     */
    avgPrice?: number;
    /**
     * Количество (штуки)
     * @format int32
     * @example -10
     */
    qtyUnits?: number;
    /**
     * Позиций на момент открытия (штуки)
     * @format int32
     * @example -10
     */
    openUnits?: number;
    /**
     * Размер лота
     * @format decimal
     * @example 10
     */
    lotSize?: number;
    /**
     * Наименование инструмента
     * @example "Аэрофлот"
     */
    shortName?: string;
    /**
     * Количество на дату "Т0" (штуки)
     * @format int32
     * @example 0
     */
    qtyT0?: number;
    /**
     * Количество на дату "Т1" (штуки)
     * @format int32
     * @example -10
     */
    qtyT1?: number;
    /**
     * Количество на дату "Т2" (штуки)
     * @format int32
     * @example -10
     */
    qtyT2?: number;
    /**
     * Количество на дату "TFuture" (штуки)
     * @format int32
     * @example -10
     */
    qtyTFuture?: number;
    /**
     * Количество на дату "Т0" (лоты)
     * @format int32
     * @example 0
     */
    qtyT0Batch?: number;
    /**
     * Количество на дату "Т1" (лоты)
     * @format int32
     * @example -1
     */
    qtyT1Batch?: number;
    /**
     * Количество на дату "Т2" (лоты)
     * @format int32
     * @example -1
     */
    qtyT2Batch?: number;
    /**
     * Количество на дату "TFuture" (лоты)
     * @format int32
     * @example -1
     */
    qtyTFutureBatch?: number;
    /**
     * Количество (лоты)
     * @format int32
     * @example -1
     */
    qtyBatch?: number;
    /**
     * Позиции на момент открытия (начала торгов)
     * @format int32
     * @example -1
     */
    openQtyBatch?: number;
    /**
     * Количество (лоты)
     * @format int32
     * @example -1
     */
    qty?: number;
    /**
     * Позиции на момент открытия (начала торгов)
     * @format int32
     * @example -1
     */
    open?: number;
    /**
     * Нереализованная прибыль за день
     * @format decimal
     * @example 2.8
     */
    dailyUnrealisedPl?: number;
    /**
     * Нереализованная прибыль
     * @format decimal
     * @example 2.8
     */
    unrealisedPl?: number;
    /**
     * True для валютных остатков (денег), false - для торговых инструментов
     * @example false
     */
    isCurrency?: boolean;
  };
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResTradesGetAndSubscribe {
  data?: Trade;
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResSummariesGetAndSubscribeV2 {
  /** Сообщение с данными о позициях по деньгам */
  data?: {
    /**
     * Покупательская способность (на утро)
     * @format decimal
     * @example 5410.89
     */
    buyingPowerAtMorning?: number;
    /**
     * Покупательская способность
     * @format decimal
     * @example 5418.27
     */
    buyingPower?: number;
    /**
     * Прибыль
     * @format decimal
     * @example 93
     */
    profit?: number;
    /**
     * Относительная прибыль
     * @format decimal
     * @example 0.87
     */
    profitRate?: number;
    /**
     * Ликвидный портфель
     * @format decimal
     * @example 8857
     */
    portfolioEvaluation?: number;
    /**
     * Оценка портфеля
     * @format decimal
     * @example 10714
     */
    portfolioLiquidationValue?: number;
    /**
     * Начальная маржа
     * @format decimal
     * @example 3539
     */
    initialMargin?: number;
    /**
     * Риск до закрытия
     * @format decimal
     * @example 7088
     */
    riskBeforeForcePositionClosing?: number;
    /**
     * Суммарная комиссия (null для Срочного рынка)
     * @format decimal
     * @example 24.21
     */
    commission?: number | null;
  };
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResRisksGetAndSubscribe {
  data?: Risk;
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResSpectraRisksGetAndSubscribe {
  data?: Fortsrisk;
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResStopOrdersGetAndSubscribe {
  data?: Stoporder;
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResStopOrdersGetAndSubscribeWarp {
  data?: StoporderWarp;
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResOrdersGetAndSubscribe {
  data?: Order;
  /**
   * Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

export interface WsResHandledSuccessfully {
  /**
   * Информация по созданной/отменённой подписке
   * @example "Handled successfully"
   */
  message?: string;
  /**
   * HTTP-код ответа
   * @format int32
   * @example 200
   */
  httpCode?: number;
  /**
   * Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при установке соединения.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  requestGuid?: string;
}

export interface WsReqBaseObject {
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  format?: Format;
  /**
   * Максимальная частота отдачи данных сервером в миллисекундах.
   * @format int32
   * @default 175
   */
  frequency?: number;
  /**
   * Уникальный идентификатор сообщений создаваемой подписки. Все входящие сообщения, соответствующие этой подписке, будут иметь такое значение поля guid.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * JWT токен для авторизации
   * @example "eyJhbGciOiJ..."
   */
  token?: string;
}

export type WsReqOrderBookGetAndSubscribe = {
  /**
   * Код операции
   * @example "OrderBookGetAndSubscribe"
   */
  opcode?: "OrderBookGetAndSubscribe";
  /**
   * Тикер
   * @example "SBER"
   */
  code?: string;
  /**
   * Глубина стакана. Стандартное и максимальное значение - 20 (20х20).
   * @format int32
   * @max 20
   * @default 20
   * @example 10
   */
  depth?: number;
} & WsReqBaseObject;

export type WsReqBarsGetAndSubscribe = {
  /**
   * Код операции
   * @example "BarsGetAndSubscribe"
   */
  opcode?: "BarsGetAndSubscribe";
  /**
   * Тикер
   * @example "SBER"
   */
  code?: string;
  /**
   * Длительность таймфрейма в секундах или код ("D" - дни, "W" - недели, "M" - месяцы, "Y" - годы)
   * @example 60
   */
  tf?: "15" | "60" | "300" | "3600" | "D" | "W" | "M" | "Y";
  /**
   * Дата и время (UTC) для первой запрашиваемой свечи
   * @format int64
   * @example 1536557084
   */
  from?: number;
  /**
   * Данные c задержкой в 15 минут. Для авторизованых клиентов задержка не применяется.
   * @example false
   */
  delayed?: boolean;
} & WsReqBaseObject;

export type WsReqQuotesSubscribe = {
  /**
   * Код операции
   * @example "QuotesSubscribe"
   */
  opcode?: "QuotesSubscribe";
  /**
   * Тикер
   * @example "SBER"
   */
  code?: string;
} & WsReqBaseObject;

export type WsReqPositionsGetAndSubscribe = {
  /** Код операции */
  opcode?: "PositionsGetAndSubscribeV2";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio?: string;
} & WsReqBaseObject;

export type WsReqTradesGetAndSubscribe = {
  /** Код операции */
  opcode?: "TradesGetAndSubscribeV2";
  /**
   * Идентификатор клиентского портфеля
   * @example "D61971"
   */
  portfolio?: string;
} & WsReqBaseObject;

export type WsReqAllTradesGetAndSubscribe = {
  /** Код операции */
  opcode?: "AllTradesGetAndSubscribe";
  /**
   * JWT токен для авторизации
   * @example "eyJhbGciOiJ..."
   */
  token?: string;
  /**
   * Если указать, то перед актуальными данными придут данные о последних N сделках.
   * @format int32
   * @max 5000
   * @example 50
   */
  depth?: number;
  /**
   * Указывает, нужно ли отправлять виртуальные (индикативные) сделки
   * @example false
   */
  includeVirtualTrades?: boolean;
} & WsReqBaseObject;

export type WsReqSummariesGetAndSubscribeV2 = {
  /** Код операции */
  opcode?: "SummariesGetAndSubscribeV2";
  /**
   * Идентификатор клиентского портфеля
   * @example "D61971"
   */
  portfolio?: string;
} & WsReqBaseObject;

export type WsReqRisksGetAndSubscribe = {
  /**
   * Код операции
   * @example "RisksGetAndSubscribe"
   */
  opcode?: string;
  /**
   * Идентификатор клиентского портфеля
   * @example "D61971"
   */
  portfolio?: string;
} & WsReqBaseObject;

export type WsReqSpectraRisksGetAndSubscribe = {
  /** Код операции */
  opcode?: "SpectraRisksGetAndSubscribe";
  /**
   * Идентификатор клиентского портфеля
   * @example "7500PUQ"
   */
  portfolio?: string;
} & WsReqBaseObject;

export type WsReqStopOrdersGetAndSubscribe = {
  /** Код операции */
  opcode?: "StopOrdersGetAndSubscribe";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio?: string;
} & WsReqBaseObject;

export type WsReqStopOrdersGetAndSubscribeV2 = {
  /** Код операции */
  opcode?: "StopOrdersGetAndSubscribeV2";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio?: string;
} & WsReqBaseObject;

export type WsReqOrdersGetAndSubscribe = {
  /** Код операции */
  opcode?: "OrdersGetAndSubscribeV2";
  /**
   * Идентификатор клиентского портфеля
   * @example "D61971"
   */
  portfolio?: string;
  /** Опциональный фильтр по статусам заявок. Влияет только на фильтрацию первичных исторических данных при подписке */
  orderStatuses?: OrderStatus[];
} & WsReqBaseObject;

export type WsReqInstrumentsGetAndSubscribeV2 = {
  /** Код операции */
  opcode?: "InstrumentsGetAndSubscribeV2";
  /**
   * Тикер
   * @example "SBER"
   */
  code?: string;
} & WsReqBaseObject;

export interface WsReqUnsubscribe {
  /** Код операции */
  opcode?: "unsubscribe";
  /**
   * JWT токен для авторизации
   * @example "eyJhbGciOiJ..."
   */
  token?: string;
  /**
   * Уникальный идентификатор подписки, от которой отписываемся.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

/** Модель результата оценки стоимости и количества в лотах */
export interface EstimateOrderModel {
  /** Портфель клиента */
  portfolio?: string | null;
  /** Инструмент */
  ticker?: string | null;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Количество в лотах к продаже с плечом
   * @format decimal
   */
  quantityToSell?: number;
  /**
   * Количество в лотах к покупке с плечом
   * @format decimal
   */
  quantityToBuy?: number;
  /**
   * Количество в лотах к продаже без плеча
   * @format decimal
   */
  notMarginQuantityToSell?: number;
  /**
   * Количество в лотах к покупке без плеча
   * @format decimal
   */
  notMarginQuantityToBuy?: number;
  /**
   * Стоимость заявки
   * @format decimal
   */
  orderEvaluation?: number;
  /**
   * Комиссия
   * @format decimal
   */
  commission?: number;
}

/** Модель заявки для оценки стоимости и количества в лотах */
export interface EstimateOrderViewModel {
  /** Портфель клиента */
  portfolio?: string;
  /** Инструмент */
  ticker?: string;
  /** Биржа */
  exchange?: string;
  /**
   * Цена
   * @format decimal
   */
  price?: number;
  /**
   * Количество лотов
   * @format int64
   */
  lotQuantity?: number;
  /** Режим торгов (борд) */
  board?: string | null;
  /**
   * Учитывать ли лимитные заявки при расчете
   * @default false
   */
  includeLimitOrders?: boolean;
}

export interface CommandwsResAuthorize {
  /**
   * Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при отправке команды.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  requestGuid?: string;
  /**
   * HTTP-код ответа
   * @format int32
   * @example 200
   */
  httpCode?: number;
  /**
   * Информация об инициализации токена.
   * @example "The connection has been initialized."
   */
  message?: string;
}

export interface CommandwsResHandledSuccessfully {
  /**
   * Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при отправке команды.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  requestGuid?: string;
  /**
   * HTTP-код ответа
   * @format int32
   * @example 200
   */
  httpCode?: number;
  /**
   * Информация о результате выполнения команды
   * @example "An order '12345' has been created."
   */
  message?: string;
}

export interface CommandwsResBadrequest {
  /**
   * Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при отправке команды.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  requestGuid?: string;
  /**
   * @format int32
   * @example 400
   */
  httpCode?: number;
  /**
   * Информация об ошибке
   * @example "Invalid or unsupported quantity"
   */
  message?: string;
}

export interface CommandwsReqAuthorize {
  /** Код операции */
  opcode?: "authorize";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string | null;
  /**
   * JWT токен для авторизации
   * @example "eyJhbGciOiJ..."
   */
  token?: string;
}

export interface CommandwsReqCreateMarketOrder {
  /** Код операции */
  opcode?: "create:market";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface CommandwsReqCreateLimitOrder {
  /** Код операции */
  opcode?: "create:limit";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Цена
   * @format decimal
   * @example 190.97
   */
  price?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format decimal
   * @example 100
   */
  icebergFixed?: number | null;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number | null;
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface CommandwsReqCreateStopOrder {
  /** Код операции */
  opcode?: "create:stop";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /**
   * Цена срабатывания
   * @format decimal
   * @example 191.33
   */
  triggerPrice?: number;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
  /**
   * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface CommandwsReqCreateStopLimitOrder {
  /** Код операции */
  opcode?: "create:stopLimit";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Цена
   * @format decimal
   * @example 190.97
   */
  price?: number;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /**
   * Цена срабатывания
   * @format decimal
   * @example 191.33
   */
  triggerPrice?: number;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format decimal
   * @example 100
   */
  icebergFixed?: number | null;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number | null;
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
  /**
   * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface CommandwsReqUpdateMarketOrder {
  /** Код операции */
  opcode?: "update:market";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface CommandwsReqUpdateLimitOrder {
  /** Код операции */
  opcode?: "update:limit";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Цена
   * @format decimal
   * @example 190.97
   */
  price?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format decimal
   * @example 100
   */
  icebergFixed?: number | null;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number | null;
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface CommandwsReqUpdateStopOrder {
  /** Код операции */
  opcode?: "update:stop";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /**
   * Цена срабатывания
   * @format decimal
   * @example 191.33
   */
  triggerPrice?: number;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
  /**
   * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface CommandwsReqUpdateStopLimitOrder {
  /** Код операции */
  opcode?: "update:stopLimit";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   */
  side?: Side;
  /**
   * Количество (лоты)
   * @format int32
   * @example 2
   */
  quantity?: number;
  /**
   * Цена
   * @format decimal
   * @example 190.97
   */
  price?: number;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /**
   * Цена срабатывания
   * @format decimal
   * @example 191.33
   */
  triggerPrice?: number;
  /**
   * Срок действия (UTC) в формате Unix Time seconds
   * @format int64
   * @example 1590094740
   */
  stopEndUnixTime?: number;
  instrument?: {
    /**
     * Тикер (Код финансового инструмента)
     * @example "SBER"
     */
    symbol?: string;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Пользовательский комментарий к заявке.
   * @example "первая заявка"
   */
  comment?: string;
  /** Режим торгов (борд) */
  board?: string | null;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Тип заявки:
   *   * `OneDay` - До конца дня
   *   * `ImmediateOrCancel` - Снять остаток
   *   * `FillOrKill` - Исполнить целиком или отклонить
   *   * `GoodTillCancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /**
   * Видимая постоянная часть айсберг-заявки в лотах
   * @format decimal
   * @example 100
   */
  icebergFixed?: number | null;
  /**
   * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
   * @format decimal
   * @max 20
   * @example 2
   */
  icebergVariance?: number | null;
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
  /**
   * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface CommandwsReqDeleteMarketOrder {
  /** Код операции */
  opcode?: "delete:market";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface CommandwsReqDeleteLimitOrder {
  /** Код операции */
  opcode?: "delete:limit";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface CommandwsReqDeleteStopOrder {
  /** Код операции */
  opcode?: "delete:stop";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface CommandwsReqDeleteStopLimitOrder {
  /** Код операции */
  opcode?: "delete:stopLimit";
  /**
   * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 18936040296
   */
  orderId?: number;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /**
     * Идентификатор клиентского портфеля
     * @example "D39004"
     */
    portfolio?: string;
  };
  /**
   * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
   * @example true
   */
  checkDuplicates?: boolean;
}

export interface DevGetAllOrdersParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface DevGetOneOrderParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 93713183
   */
  orderId: number;
}

export interface ExchangePortfolioMoneyParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface ExchangePortfolioSummaryParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface DevGetAllPositionsParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Исключить из ответа все денежные инструменты
   * @example false
   */
  withoutCurrency?: boolean;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface DevGetOnePositionParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  symbol: string;
}

export interface DevGetAllTradesParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface DevGetTickerTradesParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  ticker: string;
}

export interface FortsriskParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   */
  exchange: "MOEX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface RiskParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface TradeStatsParams {
  /**
   * Начиная с какой даты отдавать историю сделок
   * @format date
   * @example "2021-10-13"
   */
  dateFrom?: string;
  /**
   * Начальный номер сделки для фильтра результатов
   * @format int64
   * @example 93713183
   */
  from?: number;
  /**
   * Количество возвращаемых записей
   * @format int32
   * @max 1000
   * @example 50
   */
  limit?: number;
  /**
   * Флаг обратной сортировки выдачи
   * @example false
   */
  descending?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface TradeStatsBySymbolParams {
  /**
   * Начиная с какой даты отдавать историю сделок
   * @format date
   * @example "2021-10-13"
   */
  dateFrom?: string;
  /**
   * Начальный номер сделки для фильтра результатов
   * @format int64
   * @example 93713183
   */
  from?: number;
  /**
   * Количество возвращаемых записей
   * @format int32
   * @max 1000
   * @example 50
   */
  limit?: number;
  /**
   * Флаг обратной сортировки выдачи
   * @example false
   */
  descending?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  symbol: string;
}

export interface DevSecuritiesSearchParams {
  /**
   * Тикер (Код финансового инструмента)
   * @example "GAZP"
   */
  query: string;
  /**
   * Ограничение на количество выдаваемых результатов поиска
   * @format int32
   * @example 3
   */
  limit?: number;
  /**
   * Смещение начала выборки (для пагинации)
   * @format int32
   * @example 10
   */
  offset?: number;
  /**
   * Рынок:
   *   * `FORTS` - Срочный рынок
   *   * `FOND` - Фондовый рынок
   *   * `CURR` - Валютный рынок
   * @example "FOND"
   */
  sector?: "FORTS" | "FOND" | "CURR";
  /**
   * Код финансового инструмента по стандарту ISO 10962
   * @example "EXXXXX"
   */
  cficode?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: "MOEX" | "SPBX";
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
}

export interface DevSecuritiesSearchExchangeParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
}

export interface DevSecuritiesSearchExchangeCodeParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  symbol: string;
}

export interface DevQuotesParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Принимает несколько пар биржа-тикер. Пары отделены запятыми. Биржа и тикер разделены двоеточием
   * @example "MOEX:SBER,MOEX:GAZP,SPBX:AAPL"
   */
  symbols: string;
}

export interface DevOrderbookExchangSeccodeParams {
  /**
   * Глубина стакана. Стандартное и максимальное значение - 20 (20х20).
   * @format int32
   * @min 1
   * @max 20
   * @default 20
   * @example 5
   */
  depth?: number;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Инструмент
   * @example "RTS-9.20"
   */
  seccode: string;
}

export interface DevSecuritiesSearchAllTradesParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Начало отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds
   * @format int64
   * @example 1593430060
   */
  from?: number;
  /**
   * Конец отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds
   * @format int64
   * @example 1593430560
   */
  to?: number;
  /**
   * Начальный номер сделки для фильтра результатов
   * @format int64
   * @example 7796897024
   */
  fromId?: number;
  /**
   * Конечный номер сделки для фильтра результатов
   * @format int64
   * @example 7796897280
   */
  toId?: number;
  /**
   * Количество загружаемых элементов
   * @format int32
   * @example 10
   */
  take?: number;
  /**
   * Флаг обратной сортировки выдачи
   * @example false
   */
  descending?: boolean;
  /**
   * Флаг загрузки виртуальных (индикативных) сделок, полученных из заявок на питерской бирже
   * @example false
   */
  includeVirtualTrades?: boolean;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  symbol: string;
}

export interface DevSecuritiesSearchAllTradesHistoryParams {
  /**
   * Начало отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds
   * @format int64
   * @example 1593430060
   */
  from?: number;
  /**
   * Конец отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds
   * @format int64
   * @example 1593430560
   */
  to?: number;
  /**
   * Ограничение на количество выдаваемых результатов поиска (1-50000)
   * @format int32
   * @min 1
   * @max 50000
   * @example 100
   */
  limit: number;
  /**
   * Смещение начала выборки (для пагинации)
   * @format int32
   * @example 10
   */
  offset?: number;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  symbol: string;
}

export interface DevSecuritiesFuturesParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   */
  exchange: "MOEX";
  /**
   * Тикер (Код финансового инструмента)
   * @example "LKOH"
   */
  symbol: string;
}

export interface RiskRatesParams {
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Тикер\код инструмента, ISIN для облигаций
   * @example "SBER"
   */
  ticker?: string;
  /**
   * Id вашей (или той которая интересует) категории риска. Можно получить из запроса информации по клиенту или через кабинет клиента
   * @example 1
   */
  riskCategoryId?: RiskCategoryId;
  /**
   * Часть Тикера\кода инструмента, ISIN для облигаций. Вернет все совпадения, начинающиеся с
   * @example "SBER"
   */
  search?: string;
}

export interface DevHistoryParams {
  /**
   * Тикер (Код финансового инструмента)
   * @example "SBER"
   */
  symbol: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Длительность таймфрейма в секундах или код ("D" - дни, "W" - недели, "M" - месяцы, "Y" - годы)
   * @example "60"
   */
  tf: "15" | "60" | "300" | "3600" | "D" | "W" | "M" | "Y";
  /**
   * Начало отрезка времени (UTC) в формате Unix Time Seconds
   * @format int64
   * @example 1549000661
   */
  from: number;
  /**
   * Конец отрезка времени (UTC) в формате Unix Time Seconds
   * @format int64
   * @example 1550060661
   */
  to: number;
  /**
   * Флаг для поиска данных по устаревшим или экспирированным инструментам. При использовании требуется точное совпадение тикера
   * @example false
   */
  untraded?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
}

export interface CommandApiV2ClientOrdersDeleteParams {
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   */
  exchange: "MOEX";
  /**
   * Является стоп-заявкой?
   * @example false
   */
  stop: boolean;
  /**
   * Ответ в формате JSON. В виде отдельного параметра для обратной совместимости.
   * @example false
   */
  jsonResponse?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Идентификатор заявки
   * @format int64
   * @example 93713183
   */
  orderId: number;
}

export interface V2ClientOrdersActionsOrderIdParams {
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Является стоп-заявкой?
   * @example false
   */
  stop: boolean;
  /**
   * Код торгового сервера
   * @deprecated
   * @example "TRADE"
   */
  tradeServerCode: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 93713183
   */
  orderId: number;
}

export type V2ClientOrdersActionsEstimateAllPayload = EstimateOrderViewModel[];

export interface DevGetAllStopOrdersParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
}

export interface DevGetOneStopOrderParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Идентификатор заявки
   * @format int64
   * @example 93713183
   */
  orderId: number;
}

export interface CommandApiWarpV2ClientOrdersDeleteParams {
  /**
   * Идентификатор клиентского портфеля
   * @example "D39004"
   */
  portfolio: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   */
  exchange: "MOEX";
  /**
   * Является стоп-заявкой?
   * @example false
   */
  stop: boolean;
  /**
   * Ответ в формате JSON. В виде отдельного параметра для обратной совместимости.
   * @example false
   */
  jsonResponse?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple";
  /**
   * Идентификатор заявки
   * @format int64
   * @example 93713183
   */
  orderId: number;
}
