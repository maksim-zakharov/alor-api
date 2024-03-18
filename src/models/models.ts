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
 * Идентификатор аккаунта пользователя
 * @example "L01-00000F00"
 */
export type Account = string;

/**
 * Начислено (НКД)
 * @format decimal
 * @example 0
 */
export type AccruedInterest = number;

/**
 * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
 * @default true
 * @example true
 */
export type ActivateFlag = boolean;

/**
 * Аск
 * @format decimal
 * @example 171.87
 */
export type Ask = number;

/**
 * Количество лотов в ближайшем аске в биржевом стакане
 * @format int32
 * @example 107
 */
export type AskVolume = number;

/**
 * Суммарное количество лотов во всех асках в биржевом стакане
 * @format int32
 * @example 2183
 */
export type AskVolumeTotal = number;

/**
 * Бид
 * @format decimal
 * @example 171.82
 */
export type Bid = number;

/**
 * Количество лотов в ближайшем биде в биржевом стакане
 * @format int32
 * @example 5
 */
export type BidVolume = number;

/**
 * Суммарное количество лотов во всех бидах в биржевом стакане
 * @format int32
 * @example 2716
 */
export type BidVolumeTotal = number;

/**
 * Код режима торгов (Борд):
 * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
 * * Для Биржи СПБ всегда SPBX
 * @example "TQBR"
 */
export type Board = string;

/**
 * Пара Биржа:Тикер
 * @example "MOEX:LKOH"
 */
export type BrokerSymbol = string;

/**
 * Разность цены и цены предыдущего закрытия
 * @format decimal
 * @example -3.08
 */
export type Change = number;

/**
 * Относительное изменение цены
 * @format decimal
 * @example -1.76
 */
export type ChangePercent = number;

/**
 * Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.
 * @example true
 */
export type CheckDuplicates = boolean;

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
 * Пользовательский комментарий к заявке
 * @example "Первая заявка"
 */
export type Comment = string;

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
 * @example 2
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
 * Видимая постоянная часть айсберг-заявки в лотах, указанная при создании стоп-лимитной заявки
 * @format int32
 * @example 100
 */
export type CreationFixedQuantity = number;

/**
 * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки, указанная при создании стоп-лимитной заявки. Только срочный рынок
 * @format int32
 * @example 2
 */
export type CreationVarianceQuantity = number;

/**
 * Валюта расчетов
 * @example "RUB"
 */
export type Currency = string | null;

/**
 * Только для опционов. Срок действия опциона (UTC)
 * @format date-time
 * @example "2024-03-20T00:00:00.0000000"
 */
export type EndExpiration = string;

/**
 * Дата и время завершения (UTC)
 * @format date-time
 * @example "2020-06-16T23:59:59.9990000Z"
 */
export type EndTime = string;

/**
 * Срок действия (UTC) в формате Unix Time seconds
 * @format int64
 * @example 1590094740
 */
export type EndTimeUnix = number;

/**
 * Причина отмены стоп-заявки
 * @example "Цена не кратна минимальному шагу цены."
 */
export type ErrorDuringTriggering = string;

/**
 * Биржа:
 *   * `MOEX` - Московская биржа
 *   * `SPBX` - СПБ Биржа
 */
export enum Exchange {
  MOEX = "MOEX",
  SPBX = "SPBX",
}

/**
 * Биржа:
 *   * `MOEX` - Московская биржа
 *   * `SPBX` - СПБ Биржа
 * @deprecated
 */
export enum ExchangeDeprecated {
  MOEX = "MOEX",
  SPBX = "SPBX",
}

/**
 * Уникальный идентификатор биржевой заявки
 * @format int64
 * @example 425242362
 */
export type ExchangeOrderId = number;

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
 * Показатель, значение которого варьируется в зависимости от выбранного рынка:
 * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
 * * Для срочного рынка — размер одного лота
 * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
 * @format decimal
 * @example 5
 */
export type FaceValue = number;

/**
 * Количество исполненных (лоты)
 * @format decimal
 * @example 1
 */
export type FilledQtyBatch = number;

/**
 * Количество исполненных (штуки)
 * @format decimal
 * @example 10
 */
export type FilledQtyUnits = number;

/**
 * Только для опционов. Сумма дисконтированных значений объявленных денежных потоков
 * @format decimal
 * @example 0
 */
export type FixedSpotDiscount = number;

/** @default "Simple" */
export enum Format {
  Simple = "Simple",
  Slim = "Slim",
  Heavy = "Heavy",
}

/**
 * Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды.
 * @example "c328fcf1-e495-408a-a0ed-e20f95d6b813"
 */
export type GuidWs = string;

/**
 * Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.
 * @example "c328fcf1-e495-408a-a0ed-e20f95d6b813"
 */
export type GuidCws = string;

/**
 * HTTP-код ответа
 * @format int32
 * @example 200
 */
export type HTTP200 = number;

/**
 * Видимая постоянная часть айсберг-заявки в лотах
 * @format int32
 * @example 100
 */
export type IcebergFixed = number;

/**
 * Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок
 * @format decimal
 * @max 20
 * @example 2
 */
export type IcebergVariance = number;

/**
 * Тип финансового инструмента.
 *
 * Возможные значения для MOEX:
 * * FOR — Валюта
 * * CS — Обыкновенные акции компании
 * * PS — Привилегированные акции компании
 * * MF — Паевой инвестиционный фонд
 * * RDR — Российская депозитарная расписка
 * * EUSOV — Облигация федерального займа
 * * MUNI — Муниципальная облигация
 * * CORP — Корпоративная облигация
 * * "Фьючерсный контракт X" — Фьючерсный контракт с указанием базового актива
 * * "Марж. амер. Call X" — Опцион с указанием основных параметров контракта
 *
 * От SPBX возвращается только тип "t", присваиваемый всем доступным инструментам.
 * @example "CS"
 */
export type InstrumentType = string | null;

/**
 * UTC-timestamp для значения поля `last_price`
 * @format int64
 * @example 1610982677
 */
export type LastPriceTimestamp = number;

/**
 * Количество (лоты)
 * @format int32
 * @example 1
 */
export type LotQuantity = number;

/**
 * Размер лота
 * @format decimal
 * @example 10
 */
export type LotSize = number;

/**
 * Суммарная стоимость лота
 * @format decimal
 * @example 26908
 */
export type LotValue = number;

/**
 * Рынок:
 * * `FORTS` - Срочный рынок Московской биржи
 * * `FOND` - Фондовый рынок Московской биржи
 * * `CURR` - Валютный рынок Московской биржи
 * * `SPBX` - Рынок Санкт-Петербургской биржи
 * @example "FOND"
 */
export type Market = string;

/**
 * Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null`
 * @format int32
 * @example 523920
 */
export type OpenInterest = number;

/**
 * Только для опционов. Сторона опциона:
 *   * `Call` — Купля
 *   * `Put` — Продажа
 * @example "Call"
 */
export type OptionSide = string;

/**
 * Временная метка (UTC) сообщения о состоянии биржевого стакана в формате Unix Time Milliseconds
 * @format int64
 * @example 1610982677578
 */
export type OrderBookMSTimestamp = number;

/**
 * Уникальный идентификатор заявки
 * @example "18995978560"
 */
export type OrderId = string;

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
 * Тип заявки:
 *   * `stop` - Стоп-заявка
 *   * `stoplimit` - Стоп-лимитная заявка
 * @example "stop"
 */
export enum OrderTypeStopLimit {
  Stop = "stop",
  Stoplimit = "stoplimit",
}

/**
 * Категория риска.
 * @format int32
 * @example 2
 */
export type RiskCategoryId = number;

/**
 * Идентификатор клиентского портфеля
 * @example "D39004"
 */
export type Portfolio = string;

/**
 * Цена
 * @format decimal
 * @example 142.52
 */
export type PriceCommon = number;

/**
 * Последняя цена
 * @format decimal
 * @example 171.82
 */
export type PriceLast = number;

/**
 * Максимальная цена
 * @format decimal
 * @example 176.02
 */
export type PriceMaximum = number;

/**
 * Минимальная цена
 * @format decimal
 * @example 170.33
 */
export type PriceMinimum = number;

/**
 * Множитель цены, использующийся при расчёте объёма
 * @format decimal
 * @example 1
 */
export type PriceMultiplier = number;

/**
 * Цена открытия
 * @format decimal
 * @example 26823
 */
export type PriceOpen = number;

/**
 * Количество единиц валютного инструмента, за которое указывается курс в котировках. Для прочих инструментов значение всегда равно 1
 * @format decimal
 * @example 1
 */
export type PriceShownUnits = number;

/**
 * Стоп-цена
 * @format decimal
 * @example 191.33
 */
export type PriceTrigger = number;

/**
 * Код базового режима торгов. Применяется в случае, если при создании заявки не было задано иное значение.
 * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
 * * Для Биржи СПБ всегда SPBX
 * @example "TQBR"
 */
export type PrimaryBoard = string;

/**
 * Только для опционов. Сумма дисконтированных значений прогнозных денежных потоков
 * @format decimal
 * @example 0
 */
export type ProjectedSpotDiscount = number;

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
 *   * `buy` — Купля
 *   * `sell` — Продажа
 * @example "buy"
 */
export enum Side {
  Buy = "buy",
  Sell = "sell",
}

/**
 * Флаг отсеивания исторических данных:
 * * `true` — отображать только новые данные
 * * `false` — отображать в том числе данные из истории
 * @default false
 * @example false
 */
export type SkipHistory = boolean;

/**
 * `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий
 * @example false
 */
export type Snapshot = boolean;

/**
 * Уникальный идентификатор стоп-заявки
 * @format decimal
 * @example 347498
 */
export type StopOrderId = number;

/**
 * Только для опционов. Цена Страйк (Цена исполнения опциона)
 * @format decimal
 * @example 12000
 */
export type StrikePrice = number;

/**
 * Тикер (Код финансового инструмента)
 * @example "SBER"
 */
export type Ticker = string;

/**
 * Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен
 * @example "SBER"
 */
export type TickerUndefined = string;

/**
 * Тип заявки:
 *   * `oneday` - До конца дня
 *   * `immediateorcancel` - Снять остаток
 *   * `fillorkill` - Исполнить целиком или отклонить
 *   * `goodtillcancelled` - Активна до отмены
 * @default "oneday"
 * @example "oneday"
 */
export enum TimeInForce {
  Oneday = "oneday",
  Immediateorcancel = "immediateorcancel",
  Fillorkill = "fillorkill",
  Goodtillcancelled = "goodtillcancelled",
}

/**
 * Время (UTC) (Unix time seconds)
 * @format int64
 * @example 1620220020
 */
export type TimeUnixSeconds = number;

/**
 * Время (UTC) в формате Unix Time Milliseconds
 * @format int64
 * @example 1610982677578
 */
export type TimeUnixMilliseconds = number;

/**
 * JWT токен для авторизации
 * @example "eyJhbGciOiJ..."
 */
export type Token = string;

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
 * Дата и время выставления (UTC)
 * @format date-time
 * @example "2020-06-16T23:59:59.9990000Z"
 */
export type TransitionTime = string;

/**
 * Количество
 * @format int32
 * @example 1
 */
export type Quantity = number;

/**
 * Количество (штуки)
 * @format decimal
 * @example 20
 */
export type QuantityUnitsDec = number;

/**
 * Количество (штуки)
 * @format int32
 * @example 1
 */
export type QuantityUnitsInt = number;

/**
 * Только для опционов. Краткий код опциона
 * @example "VB12000BC4"
 */
export type UnderlyingSymbol = string;

/**
 * Суммарная прибыль или суммарный убыток за день в валюте расчётов
 * @format decimal
 * @example 3250
 */
export type UnrealisedPlCurr = number;

/**
 * суммарная прибыль или суммарный убыток за день в процентах
 * @format decimal
 * @example 2.8
 */
export type UnrealisedPlPerc = number;

/**
 * Дата и время изменения статуса заявки (UTC)
 * @format date-time
 * @example "2020-06-16T23:59:59.9990000Z"
 */
export type UpdateTime = string;

/**
 * Исполненная часть айсберг-заявки (штуки)
 * @format int32
 * @example 0
 */
export type VisibleFilledQuantity = number;

/**
 * Исполненная часть айсберг-заявки (лоты)
 * @format int32
 * @example 0
 */
export type VisibleFilledQuantityBatch = number;

/**
 * Видимая постоянная часть айсберг-заявки (штуки)
 * @format int32
 * @example 0
 */
export type VisibleQuantity = number;

/**
 * Видимая постоянная часть айсберг-заявки (лоты)
 * @format int32
 * @example 0
 */
export type VisibleQuantityBatch = number;

/**
 * Объем, для рыночных заявок - null
 * @format decimal
 * @example 2086.3
 */
export type Volume = number | null;

export interface OrdersActionsLimitMarketCommandAPI {
  /**
   * Вид ответа на успешно выполненный запрос
   * @example "success"
   */
  message?: string;
  /** Уникальный идентификатор заявки */
  orderNumber?: OrderId;
}

export interface OrdersActions400CommandAPI {
  /**
   * Вид ответа для неуникального X-ALOR-REQID
   * @example "Request with such X-ALOR-REQID was already handled. We return the response to that request."
   */
  message?: string;
  oldResponse?: {
    /**
     * Код ответа
     * @format int32
     * @example 400
     */
    statusCode?: number;
    body?: {
      /**
       * Текстовое представление ответа
       * @example "success"
       */
      message?: string;
      /** Уникальный идентификатор заявки */
      orderNumber?: OrderId;
    };
  };
}

export interface OrdersActionsStopProfitLossCommandAPI {
  /**
   * Вид ответа на успешно выполненный запрос
   * @example "Succeeded, OrderNo=326123, EndTime={08.08.18  23:59:59}"
   */
  message?: string;
  /** Уникальный идентификатор заявки */
  orderNumber?: OrderId;
}

/** Вид ответа на успешно выполненный запрос */
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
  id?: string;
  /** @example "P039004" */
  login?: string;
  /** Список заявок, входящих в группу заявок */
  orders?: {
    /** Уникальный идентификатор заявки */
    OrderId?: OrderId;
  }[];
  /**
   * Тип группы заявок:
   *  * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
   *  * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
   *  * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки
   */
  executionPolicy?: ExecutionPolicy;
  /**
   * Статус группы заявок
   *  * Active - группа активна
   *  * Filled - группа исполнена торговой системой
   *  * Canceled - группа отменена пользователем
   */
  status?: OrderGroupStatus;
  /**
   * Время создания группы заявок
   * @format date-time
   */
  createdAt?: string;
  /**
   * Время выполнения/отмены группы заявок
   * @format date-time
   */
  closedAt?: string | null;
}

export interface BodyrequestOrdersActionsLimitTVput {
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество */
  quantity?: Quantity;
  /** Цена */
  price?: PriceCommon;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    instrumentGroup?: Board;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
}

export interface BodyrequestOrdersActionsMarketTVput {
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество */
  quantity?: Quantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    instrumentGroup?: Board;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
}

export interface BodyrequestOrdersActionsLimitTV {
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    instrumentGroup?: Board;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
}

export interface BodyrequestOrdersActionsStopMarketTVWarp {
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    instrumentGroup?: Board;
  };
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: ExchangeDeprecated;
  };
  /**
   * Флаг указывает, создать активную заявку, или не активную.
   * Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной.
   * Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface BodyrequestOrdersActionsStopLimitTVWarp {
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
  /**
   * Цена выставления стоп-лимитной заявки
   * @format decimal
   * @example 191.33
   */
  price?: number;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    instrumentGroup?: Board;
  };
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: ExchangeDeprecated;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
  /**
   * Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом `TriggerBracketOrders`
   * @default true
   * @example true
   */
  activate?: boolean;
}

export interface BodyrequestOrdersActionsMarketTV {
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    instrumentGroup?: Board;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
}

export interface BodyrequestOrdersActionsStopTV {
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Количество */
  quantity?: Quantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  user?: {
    /** Идентификатор аккаунта пользователя */
    account?: Account;
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
}

export interface BodyrequestOrdersActionsStopLimitTV {
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Цена */
  price?: PriceCommon;
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
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Количество */
  quantity?: Quantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  user?: {
    /** Идентификатор аккаунта пользователя */
    account?: Account;
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
}

export interface OrdersActionsLimitMarket {
  /**
   * Вид ответа на успешно выполненный запрос
   * @example "(162) Заявка на покупку N 9763124 зарегистрирована (1 удовлетворено).
   * "
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
   * Вид ответа для случая отвергнутой заявки
   * @example "Заявка не может быть принята из-за возможного недопустимого снижения уровня маржи.
   * "
   */
  message?: string;
}

export interface OrdersActionsStopProfitLoss {
  /**
   * Вид ответа на успешно выполненный запрос
   * @example "Succeeded, OrderNo=326123, EndTime={08.08.18  23:59:59}, OrderEndTime=(None)
   * "
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
 * Вид ответа на успешно выполненный запрос
 * @example "Succeeded"
 */
export type OrdersActionsDeleteOrderId = string;

export interface BodyrequestOrdersActionsLimit {
  /** Количество */
  Quantity?: Quantity;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  Side?: Side;
  /** Цена */
  Price?: PriceCommon;
  Instrument?: {
    /** Тикер (Код финансового инструмента) */
    Symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  User?: {
    /** Идентификатор аккаунта пользователя */
    Account?: Account;
    /** Идентификатор клиентского портфеля */
    Portfolio?: Portfolio;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
}

export interface BodyrequestOrdersActionsMarket {
  /** Количество */
  Quantity?: Quantity;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  Side?: Side;
  Instrument?: {
    /** Тикер (Код финансового инструмента) */
    Symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  User?: {
    /** Идентификатор аккаунта пользователя */
    Account?: Account;
    /** Идентификатор клиентского портфеля */
    Portfolio?: Portfolio;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
}

export interface BodyrequestOrdersActionsStop {
  /** Количество */
  Quantity?: Quantity;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  Side?: Side;
  /** Стоп-цена */
  TriggerPrice?: PriceTrigger;
  /** Информация об инструмента и бирже */
  Instrument?: {
    /** Тикер (Код финансового инструмента) */
    Symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /** Информация о пользователе */
  User?: {
    /** Идентификатор аккаунта пользователя */
    Account?: Account;
    /** Идентификатор клиентского портфеля */
    Portfolio?: Portfolio;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time Seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
}

export interface BodyrequestOrdersActionsStoplimit {
  /** Количество */
  Quantity?: Quantity;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  Side?: Side;
  /** Стоп-цена */
  TriggerPrice?: PriceTrigger;
  /** Цена */
  Price?: PriceCommon;
  Instrument?: {
    /** Тикер (Код финансового инструмента) */
    Symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    Exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  User?: {
    /** Идентификатор аккаунта пользователя */
    Account?: Account;
    /** Идентификатор клиентского портфеля */
    Portfolio?: Portfolio;
  };
  /**
   * Время (UTC) завершения сделки в формате Unix Time seconds
   * @format int64
   * @example 0
   */
  OrderEndUnixTime?: number;
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
}

export interface BodyrequestCreateOrderGroup {
  /** Заявки, из которых будет состоять группа */
  orders?: OrderGroupItem[];
  /**
   * Тип группы заявок:
   *  * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
   *  * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
   *  * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки
   */
  executionPolicy?: ExecutionPolicy;
}

export interface BodyrequestModifyOrderGroup {
  /** Заявки, из которых будет состоять группа */
  orders?: OrderGroupItem[];
  /**
   * Тип группы заявок:
   *  * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
   *  * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
   *  * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки
   */
  executionPolicy?: ExecutionPolicy;
}

export interface BodyresponseOrderGroup {
  /** @example "success" */
  message?: string;
  /**
   * Идентификатор только что созданной группы
   * @format uuid
   * @example "eafb19d6-c578-4afe-aa95-d528c4531031"
   */
  groupId?: string;
}

export interface OrderGroupItem {
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Идентификатор заявки
   * @example "1532944860"
   */
  orderId?: string;
  /**
   * Тип заявки:
   *  * Market - Рыночная заявка
   *  * Limit - Лимитная заявка
   *  * Stop - Стоп-заявка
   *  * StopLimit - Стоп-лимит заявка
   */
  type?: OrderType;
}

export type Symbols = Symbol[];

export interface Symbol {
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
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
   * Цена предыдущего закрытия
   * @format decimal
   * @example 174.9
   */
  prev_close_price?: number;
  /** Последняя цена */
  last_price?: PriceLast;
  /** UTC-timestamp для значения поля `last_price` */
  last_price_timestamp?: LastPriceTimestamp;
  /** Максимальная цена */
  high_price?: PriceMaximum;
  /** Минимальная цена */
  low_price?: PriceMinimum;
  /** Начислено (НКД) */
  accruedInt?: AccruedInterest;
  /**
   * Объём
   * @format decimal
   * @example 38767080
   */
  volume?: number;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  open_interest?: OpenInterest;
  /** Аск */
  ask?: Ask;
  /** Бид */
  bid?: Bid;
  /** Количество лотов в ближайшем аске в биржевом стакане */
  ask_vol?: AskVolume;
  /** Количество лотов в ближайшем биде в биржевом стакане */
  bid_vol?: BidVolume;
  /** Временная метка (UTC) сообщения о состоянии биржевого стакана в формате Unix Time Milliseconds */
  ob_ms_timestamp?: OrderBookMSTimestamp;
  /** Цена открытия */
  open_price?: PriceOpen;
  /**
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  yield?: number | null;
  /** Размер лота */
  lotsize?: LotSize;
  /** Суммарная стоимость лота */
  lotvalue?: LotValue;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  facevalue?: FaceValue;
  /**
   * Тип финансового инструмента.
   *
   * Возможные значения для MOEX:
   * * FOR — Валюта
   * * CS — Обыкновенные акции компании
   * * PS — Привилегированные акции компании
   * * MF — Паевой инвестиционный фонд
   * * RDR — Российская депозитарная расписка
   * * EUSOV — Облигация федерального займа
   * * MUNI — Муниципальная облигация
   * * CORP — Корпоративная облигация
   * * "Фьючерсный контракт X" — Фьючерсный контракт с указанием базового актива
   * * "Марж. амер. Call X" — Опцион с указанием основных параметров контракта
   *
   * От SPBX возвращается только тип "t", присваиваемый всем доступным инструментам.
   */
  type?: InstrumentType;
  /** Суммарное количество лотов во всех бидах в биржевом стакане */
  total_bid_vol?: BidVolumeTotal;
  /** Суммарное количество лотов во всех асках в биржевом стакане */
  total_ask_vol?: AskVolumeTotal;
  /**
   * Начислено (НКД)
   * @deprecated
   * @format decimal
   * @example 0
   */
  accrued_interest?: number;
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
}

export type SymbolsSlim = SymbolSlim[];

export interface SymbolSlim {
  /** Тикер (Код финансового инструмента) */
  sym?: Ticker;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Короткое описание на русском языке
   * @example "Сбербанк России ПАО ао"
   */
  desc?: string;
  /** UTC-timestamp для значения поля `last_price` */
  tst?: LastPriceTimestamp;
  /** Временная метка (UTC) сообщения о состоянии биржевого стакана в формате Unix Time Milliseconds */
  tso?: OrderBookMSTimestamp;
  /** Цена открытия */
  o?: PriceOpen;
  /** Максимальная цена */
  h?: PriceMaximum;
  /** Минимальная цена */
  l?: PriceMinimum;
  /** Последняя цена */
  c?: PriceLast;
  /**
   * Объём
   * @format decimal
   * @example 38767080
   */
  v?: number;
  /** Начислено (НКД) */
  acci?: AccruedInterest;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  oi?: OpenInterest;
  /**
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  y?: number | null;
  /** Аск */
  ask?: Ask;
  /** Бид */
  bid?: Bid;
  /** Количество лотов в ближайшем аске в биржевом стакане */
  av?: AskVolume;
  /** Количество лотов в ближайшем биде в биржевом стакане */
  bv?: BidVolume;
  /** Суммарное количество лотов во всех бидах в биржевом стакане */
  tbv?: BidVolumeTotal;
  /** Суммарное количество лотов во всех асках в биржевом стакане */
  tav?: AskVolumeTotal;
  /** Размер лота */
  lot?: LotSize;
  /** Суммарная стоимость лота */
  lotv?: LotValue;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  fv?: FaceValue;
  /**
   * Тип финансового инструмента.
   *
   * Возможные значения для MOEX:
   * * FOR — Валюта
   * * CS — Обыкновенные акции компании
   * * PS — Привилегированные акции компании
   * * MF — Паевой инвестиционный фонд
   * * RDR — Российская депозитарная расписка
   * * EUSOV — Облигация федерального займа
   * * MUNI — Муниципальная облигация
   * * CORP — Корпоративная облигация
   * * "Фьючерсный контракт X" — Фьючерсный контракт с указанием базового актива
   * * "Марж. амер. Call X" — Опцион с указанием основных параметров контракта
   *
   * От SPBX возвращается только тип "t", присваиваемый всем доступным инструментам.
   */
  t?: InstrumentType;
}

export type SymbolsHeavy = SymbolHeavy[];

export interface SymbolHeavy {
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
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
   * Валюта расчетов
   * @example "RUB"
   */
  currency?: string | null;
  /**
   * Цена предыдущего закрытия
   * @format decimal
   * @example 174.9
   */
  prevClosePrice?: number;
  /** Последняя цена */
  lastPrice?: PriceLast;
  /** UTC-timestamp для значения поля `last_price` */
  lastPriceTimestamp?: LastPriceTimestamp;
  /** Максимальная цена */
  highPrice?: PriceMaximum;
  /** Минимальная цена */
  lowPrice?: PriceMinimum;
  /** Начислено (НКД) */
  accruedInterest?: AccruedInterest;
  /**
   * Объём
   * @format decimal
   * @example 38767080
   */
  volume?: number;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  openInterest?: OpenInterest;
  /** Аск */
  ask?: Ask;
  /** Бид */
  bid?: Bid;
  /** Количество лотов в ближайшем аске в биржевом стакане */
  askVol?: AskVolume;
  /** Количество лотов в ближайшем биде в биржевом стакане */
  bidVol?: BidVolume;
  /** Временная метка (UTC) сообщения о состоянии биржевого стакана в формате Unix Time Milliseconds */
  obMsTimestamp?: OrderBookMSTimestamp;
  /** Цена открытия */
  openPrice?: PriceOpen;
  /**
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  yield?: number | null;
  /** Размер лота */
  lotSize?: LotSize;
  /** Суммарная стоимость лота */
  lotValue?: LotValue;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  faceValue?: FaceValue;
  /**
   * Тип финансового инструмента.
   *
   * Возможные значения для MOEX:
   * * FOR — Валюта
   * * CS — Обыкновенные акции компании
   * * PS — Привилегированные акции компании
   * * MF — Паевой инвестиционный фонд
   * * RDR — Российская депозитарная расписка
   * * EUSOV — Облигация федерального займа
   * * MUNI — Муниципальная облигация
   * * CORP — Корпоративная облигация
   * * "Фьючерсный контракт X" — Фьючерсный контракт с указанием базового актива
   * * "Марж. амер. Call X" — Опцион с указанием основных параметров контракта
   *
   * От SPBX возвращается только тип "t", присваиваемый всем доступным инструментам.
   */
  type?: InstrumentType;
  /** Суммарное количество лотов во всех бидах в биржевом стакане */
  totalBidVol?: BidVolumeTotal;
  /** Суммарное количество лотов во всех асках в биржевом стакане */
  totalAskVol?: AskVolumeTotal;
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
  changePercent?: number;
}

export type Orders = Order[];

export type OrdersSlim = OrderSlim[];

export type OrdersHeavy = OrderHeavy[];

export type Stoporders = Stoporder[];

export type StopordersSlim = StoporderSlim[];

export type StopordersHeavy = StoporderHeavy[];

export type StopordersWarp = StoporderWarp[];

export type StopordersWarpSlim = StoporderWarpSlim[];

export type StopordersWarpHeavy = StoporderWarpHeavy[];

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

export interface HistoryObject {
  /** Время (UTC) (Unix time seconds) */
  time?: TimeUnixSeconds;
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
  /** Максимальная цена */
  high?: PriceMaximum;
  /** Минимальная цена */
  low?: PriceMinimum;
  /**
   * Объём
   * @format int32
   * @example 1944
   */
  volume?: number;
}

export interface HistorySlim {
  history?: HistoryObjectSlim[];
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

export interface HistoryObjectSlim {
  /** Время (UTC) (Unix time seconds) */
  t?: TimeUnixSeconds;
  /**
   * Цена при закрытии
   * @format decimal
   * @example 210.83
   */
  c?: number;
  /**
   * Цена при открытии
   * @format decimal
   * @example 210.82
   */
  o?: number;
  /** Максимальная цена */
  h?: PriceMaximum;
  /** Минимальная цена */
  l?: PriceMinimum;
  /**
   * Объём
   * @format int32
   * @example 1944
   */
  v?: number;
}

export interface HistoryHeavy {
  history?: HistoryObjectHeavy[];
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

export interface HistoryObjectHeavy {
  /** Время (UTC) (Unix time seconds) */
  time?: TimeUnixSeconds;
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
  /** Максимальная цена */
  high?: PriceMaximum;
  /** Минимальная цена */
  low?: PriceMinimum;
  /**
   * Объём
   * @format int32
   * @example 1944
   */
  volume?: number;
}

export type Positions = Position[];

export interface Position {
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  volume?: number;
  /**
   * Объём, рассчитанный по текущей цене
   * @format decimal
   * @example 38798790
   */
  currentVolume?: number;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Средняя цена
   * @format decimal
   * @example 16.6
   */
  avgPrice?: number;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsDec;
  /**
   * Количество открытых позиций на момент открытия (начала торгов)
   * @format decimal
   * @example 30
   */
  openUnits?: number;
  /** Размер лота */
  lotSize?: LotSize;
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
  /** Количество (штуки) */
  qtyTFuture?: QuantityUnitsDec;
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
  /** суммарная прибыль или суммарный убыток за день в процентах */
  dailyUnrealisedPl?: UnrealisedPlPerc;
  /** Суммарная прибыль или суммарный убыток за день в валюте расчётов */
  unrealisedPl?: UnrealisedPlCurr;
  /**
   * `True` для валютных остатков (денег), `false` - для торговых инструментов
   * @example false
   */
  isCurrency?: boolean;
}

export type PositionsSlim = PositionSlim[];

export interface PositionSlim {
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  v?: number;
  /**
   * Объём, рассчитанный по текущей цене
   * @format decimal
   * @example 38798790
   */
  cv?: number;
  /** Тикер (Код финансового инструмента) */
  sym?: Ticker;
  /** Пара Биржа:Тикер */
  tic?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  p?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Средняя цена
   * @format decimal
   * @example 16.6
   */
  pxavg?: number;
  /** Количество (штуки) */
  q?: QuantityUnitsDec;
  /**
   * Количество открытых позиций на момент открытия (начала торгов)
   * @format decimal
   * @example 30
   */
  o?: number;
  /** Размер лота */
  lot?: LotSize;
  /**
   * Короткое наименование
   * @example "ЛУКОЙЛ"
   */
  n?: string;
  /**
   * Агрегированное количество T0 (штуки)
   * @format decimal
   * @example 20
   */
  q0?: number;
  /**
   * Агрегированное количество T1 (штуки)
   * @format decimal
   * @example 20
   */
  q1?: number;
  /**
   * Агрегированное количество T2 (штуки)
   * @format decimal
   * @example 20
   */
  q2?: number;
  /** Количество (штуки) */
  qf?: QuantityUnitsDec;
  /** суммарная прибыль или суммарный убыток за день в процентах */
  upd?: UnrealisedPlPerc;
  /** Суммарная прибыль или суммарный убыток за день в валюте расчётов */
  up?: UnrealisedPlCurr;
  /**
   * `True` для валютных остатков (денег), `false` - для торговых инструментов
   * @example false
   */
  cur?: boolean;
}

export type PositionsHeavy = PositionHeavy[];

export interface PositionHeavy {
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  volume?: number;
  /**
   * Объём, рассчитанный по текущей цене
   * @format decimal
   * @example 38798790
   */
  currentVolume?: number;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Средняя цена
   * @format decimal
   * @example 16.6
   */
  avgPrice?: number;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsDec;
  /**
   * Количество открытых позиций на момент открытия (начала торгов)
   * @format decimal
   * @example 30
   */
  openUnits?: number;
  /** Размер лота */
  lotSize?: LotSize;
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
  /** Количество (штуки) */
  qtyTFuture?: QuantityUnitsDec;
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
   * Агрегированное количество на момент открытия (начала торгов) (лоты)
   * @format decimal
   * @example 20
   */
  openQtyBatch?: number;
  /** суммарная прибыль или суммарный убыток за день в процентах */
  dailyUnrealisedPl?: UnrealisedPlPerc;
  /** Суммарная прибыль или суммарный убыток за день в валюте расчётов */
  unrealisedPl?: UnrealisedPlCurr;
  /**
   * `True` для валютных остатков (денег), `false` - для торговых инструментов
   * @example false
   */
  isCurrency?: boolean;
}

export type Trades = Trade[];

export type TradesSlim = TradeSlim[];

export type TradesHeavy = TradeHeavy[];

export type TradesV2 = TradeV2[];

export type TradesV2Slim = TradeV2Slim[];

export type TradesV2Heavy = TradeV2Heavy[];

/** Данные о запрашиваемом "биржевом стакане" */
export interface Orderbook {
  /**
   * Deprecated. Устаревшее поле, будет удалено в будущих обновлениях
   * @deprecated
   * @example true
   */
  snapshot?: boolean;
  /** Биды */
  bids?: OrderbookBid[];
  /** Аски */
  asks?: OrderbookAsk[];
  /**
   * Deprecated. Устаревшее поле, будет удалено в будущих обновлениях. Вместо этого поля используйте поле `ms_timestamp`
   * @deprecated
   * @format decimal
   * @example 1610982677
   */
  timestamp?: number;
  /** Время (UTC) в формате Unix Time Milliseconds */
  ms_timestamp?: TimeUnixMilliseconds;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
}

/** Данные о запрашиваемом "биржевом стакане" */
export interface OrderbookSlim {
  /** Биды */
  b?: OrderbookBidSlim[];
  /** Аски */
  a?: OrderbookAskSlim[];
  /** Время (UTC) в формате Unix Time Milliseconds */
  t?: TimeUnixMilliseconds;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  h?: Snapshot;
}

/** Данные о запрашиваемом "биржевом стакане" */
export interface OrderbookHeavy {
  /** Биды */
  bids?: OrderbookBid[];
  /** Аски */
  asks?: OrderbookAsk[];
  /** Время (UTC) в формате Unix Time Milliseconds */
  msTimestamp?: TimeUnixMilliseconds;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
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

export interface OrderbookBidSlim {
  /**
   * Цена
   * @format decimal
   * @example 115820
   */
  p?: number;
  /**
   * Объём
   * @format int32
   * @example 23
   */
  v?: number;
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

export interface OrderbookAskSlim {
  /**
   * Цена
   * @format decimal
   * @example 116030
   */
  p?: number;
  /**
   * Объём
   * @format int32
   * @example 31
   */
  v?: number;
}

export type Alltrades = Alltrade[];

export type AlltradesSlim = AlltradeSlim[];

export type AlltradesHeavy = AlltradeHeavy[];

export interface Alltradeshistory {
  /**
   * Количество записей
   * @format int32
   * @example 23
   */
  total?: number;
  list?: Alltrade[];
}

export interface AlltradeshistorySlim {
  /**
   * Количество записей
   * @format int32
   * @example 23
   */
  total?: number;
  list?: AlltradeSlim[];
}

export interface AlltradeshistoryHeavy {
  /**
   * Количество записей
   * @format int32
   * @example 23
   */
  total?: number;
  list?: AlltradeHeavy[];
}

export type Securities = Security[];

export interface Security {
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
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
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Тип финансового инструмента.
   *
   * Возможные значения для MOEX:
   * * FOR — Валюта
   * * CS — Обыкновенные акции компании
   * * PS — Привилегированные акции компании
   * * MF — Паевой инвестиционный фонд
   * * RDR — Российская депозитарная расписка
   * * EUSOV — Облигация федерального займа
   * * MUNI — Муниципальная облигация
   * * CORP — Корпоративная облигация
   * * "Фьючерсный контракт X" — Фьючерсный контракт с указанием базового актива
   * * "Марж. амер. Call X" — Опцион с указанием основных параметров контракта
   *
   * От SPBX возвращается только тип "t", присваиваемый всем доступным инструментам.
   */
  type?: InstrumentType;
  /** Размер лота */
  lotsize?: LotSize;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  facevalue?: FaceValue;
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
   * Цена маржинальной покупки (заемные средства). Только срочный рынок
   * @format decimal
   * @example 6707.86
   */
  marginbuy?: number;
  /**
   * Цена маржинальной продажи (заемные средства). Только срочный рынок
   * @format decimal
   * @example 6707.86
   */
  marginsell?: number;
  /**
   * Отношение цены маржинальной покупки к цене последней сделки. Только срочный рынок
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
  /** Максимальная цена */
  priceMax?: PriceMaximum;
  /** Минимальная цена */
  priceMin?: PriceMinimum;
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
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  yield?: number | null;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /**
   * Код базового режима торгов. Применяется в случае, если при создании заявки не было задано иное значение.
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  primary_board?: PrimaryBoard;
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
  /** Множитель цены, использующийся при расчёте объёма */
  priceMultiplier?: PriceMultiplier;
  /** Количество единиц валютного инструмента, за которое указывается курс в котировках. Для прочих инструментов значение всегда равно 1 */
  priceShownUnits?: PriceShownUnits;
  /** Только для опционов. Цена Страйк (Цена исполнения опциона) */
  strikePrice?: StrikePrice;
  /** Только для опционов. Срок действия опциона (UTC) */
  endExpiration?: EndExpiration;
  /** Только для опционов. Сумма дисконтированных значений объявленных денежных потоков */
  fixedSpotDiscount?: FixedSpotDiscount;
  /** Только для опционов. Сумма дисконтированных значений прогнозных денежных потоков */
  projectedSpotDiscount?: ProjectedSpotDiscount;
  /** Только для опционов. Краткий код опциона */
  underlyingSymbol?: UnderlyingSymbol;
  /**
   * Только для опционов. Сторона опциона:
   *   * `Call` — Купля
   *   * `Put` — Продажа
   */
  optionSide?: OptionSide;
}

export type SecuritiesSlim = SecuritySlim[];

export interface SecuritySlim {
  /** Тикер (Код финансового инструмента) */
  sym?: Ticker;
  /**
   * Краткое наименование инструмента
   * @example "Сбербанк"
   */
  n?: string;
  /**
   * Краткое описание инструмента
   * @example "Сбербанк России ПАО ао"
   */
  desc?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Тип финансового инструмента.
   *
   * Возможные значения для MOEX:
   * * FOR — Валюта
   * * CS — Обыкновенные акции компании
   * * PS — Привилегированные акции компании
   * * MF — Паевой инвестиционный фонд
   * * RDR — Российская депозитарная расписка
   * * EUSOV — Облигация федерального займа
   * * MUNI — Муниципальная облигация
   * * CORP — Корпоративная облигация
   * * "Фьючерсный контракт X" — Фьючерсный контракт с указанием базового актива
   * * "Марж. амер. Call X" — Опцион с указанием основных параметров контракта
   *
   * От SPBX возвращается только тип "t", присваиваемый всем доступным инструментам.
   */
  t?: InstrumentType;
  /** Размер лота */
  lot?: LotSize;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  fv?: FaceValue;
  /**
   * Тип ценной бумаги согласно стандарту ISO 10962
   * @example "ESXXXX"
   */
  cfi?: string;
  /**
   * Дата и время (UTC) окончания действия
   * @example "2018-09-03T00:00:00"
   */
  cncl?: string;
  /**
   * Минимальный шаг цены
   * @format decimal
   * @example 0.01
   */
  stp?: number;
  /**
   * @format decimal
   * @example 195613886
   */
  rt?: number;
  /**
   * Цена маржинальной покупки (заемные средства). Только срочный рынок
   * @format decimal
   * @example 6707.86
   */
  mgb?: number;
  /**
   * Цена маржинальной продажи (заемные средства). Только срочный рынок
   * @format decimal
   * @example 6707.86
   */
  mgs?: number;
  /**
   * Отношение цены маржинальной покупки к цене последней сделки. Только срочный рынок
   * @format decimal
   * @example 89.3428
   */
  mgrt?: number;
  /**
   * Минимальный шаг цены, выраженный в рублях
   * @format decimal
   * @example 6.30202
   */
  stppx?: number;
  /** Максимальная цена */
  pxmx?: PriceMaximum;
  /** Минимальная цена */
  pxmn?: PriceMinimum;
  /**
   * Теоретическая цена опциона
   * @format decimal
   * @example 0
   */
  pxt?: number;
  /**
   * Теоретическая цена опциона с учетом лимитов
   * @format decimal
   * @example 0
   */
  pxtl?: number;
  /** Множитель цены, использующийся при расчёте объёма */
  pxmu?: PriceMultiplier;
  /** Количество единиц валютного инструмента, за которое указывается курс в котировках. Для прочих инструментов значение всегда равно 1 */
  pxu?: PriceShownUnits;
  /**
   * Волатильность
   * @format decimal
   * @example 0
   */
  vl?: number;
  /**
   * Валюта
   * @example "RUB"
   */
  cur?: string | null;
  /**
   * Идентификатор ценной бумаги согласно стандарту ISO 6166
   * @example "RU000A1014L8"
   */
  isin?: string | null;
  /**
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  yld?: number | null;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  bd?: Board;
  /**
   * Код базового режима торгов. Применяется в случае, если при создании заявки не было задано иное значение.
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  pbd?: PrimaryBoard;
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
  st?: TradingStatus;
  /**
   * Описание торгового статуса инструмента
   * @example "нормальный период торгов"
   */
  sti?: string | null;
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
  cpct?: ComplexProductCategory;
  /** Только для опционов. Цена Страйк (Цена исполнения опциона) */
  pxs?: StrikePrice;
  /** Только для опционов. Срок действия опциона (UTC) */
  exp?: EndExpiration;
  /** Только для опционов. Сумма дисконтированных значений объявленных денежных потоков */
  fdis?: FixedSpotDiscount;
  /** Только для опционов. Сумма дисконтированных значений прогнозных денежных потоков */
  pdis?: ProjectedSpotDiscount;
  /** Только для опционов. Краткий код опциона */
  usym?: UnderlyingSymbol;
  /**
   * Только для опционов. Сторона опциона:
   *   * `Call` — Купля
   *   * `Put` — Продажа
   */
  osd?: OptionSide;
}

export type SecuritiesHeavy = SecurityHeavy[];

export interface SecurityHeavy {
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /**
   * Краткое наименование инструмента
   * @example "Сбербанк"
   */
  shortName?: string;
  /**
   * Краткое описание инструмента
   * @example "Сбербанк России ПАО ао"
   */
  description?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Тип финансового инструмента.
   *
   * Возможные значения для MOEX:
   * * FOR — Валюта
   * * CS — Обыкновенные акции компании
   * * PS — Привилегированные акции компании
   * * MF — Паевой инвестиционный фонд
   * * RDR — Российская депозитарная расписка
   * * EUSOV — Облигация федерального займа
   * * MUNI — Муниципальная облигация
   * * CORP — Корпоративная облигация
   * * "Фьючерсный контракт X" — Фьючерсный контракт с указанием базового актива
   * * "Марж. амер. Call X" — Опцион с указанием основных параметров контракта
   *
   * От SPBX возвращается только тип "t", присваиваемый всем доступным инструментам.
   */
  type?: InstrumentType;
  /** Размер лота */
  lotSize?: LotSize;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  faceValue?: FaceValue;
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
  minStep?: number;
  /**
   * Количество знаков после запятой в цене
   * @format int32
   * @example 2
   */
  roundTo?: number;
  /**
   * @format decimal
   * @example 195613886
   */
  rating?: number;
  /**
   * Цена маржинальной покупки (заемные средства). Только срочный рынок
   * @format decimal
   * @example 6707.86
   */
  marginBuy?: number;
  /**
   * Цена маржинальной продажи (заемные средства). Только срочный рынок
   * @format decimal
   * @example 6707.86
   */
  marginSell?: number;
  /**
   * Отношение цены маржинальной покупки к цене последней сделки. Только срочный рынок
   * @format decimal
   * @example 89.3428
   */
  marginRate?: number;
  /**
   * Минимальный шаг цены, выраженный в рублях
   * @format decimal
   * @example 6.30202
   */
  priceStep?: number;
  /** Максимальная цена */
  priceMax?: PriceMaximum;
  /** Минимальная цена */
  priceMin?: PriceMinimum;
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
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  yield?: number | null;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /**
   * Код базового режима торгов. Применяется в случае, если при создании заявки не было задано иное значение.
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  primaryBoard?: PrimaryBoard;
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
  /** Множитель цены, использующийся при расчёте объёма */
  priceMultiplier?: PriceMultiplier;
  /** Количество единиц валютного инструмента, за которое указывается курс в котировках. Для прочих инструментов значение всегда равно 1 */
  priceShownUnits?: PriceShownUnits;
  /** Только для опционов. Цена Страйк (Цена исполнения опциона) */
  strikePrice?: StrikePrice;
  /** Только для опционов. Срок действия опциона (UTC) */
  endExpiration?: EndExpiration;
  /** Только для опционов. Сумма дисконтированных значений объявленных денежных потоков */
  fixedSpotDiscount?: FixedSpotDiscount;
  /** Только для опционов. Сумма дисконтированных значений прогнозных денежных потоков */
  projectedSpotDiscount?: ProjectedSpotDiscount;
  /** Только для опционов. Краткий код опциона */
  underlyingSymbol?: UnderlyingSymbol;
  /**
   * Только для опционов. Сторона опциона:
   *   * `Call` — Купля
   *   * `Put` — Продажа
   */
  optionSide?: OptionSide;
}

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
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Свободные средства
   * @format decimal
   * @example 525.25
   */
  free?: number;
}

export interface MoneySlim {
  /**
   * Количество средств
   * @format decimal
   * @example 25614.89
   */
  c?: number;
  /**
   * Количество использованных
   * @format decimal
   * @example 45536.11
   */
  u?: number;
  /**
   * Средства на момент открытия
   * @format decimal
   * @example 45536.11
   */
  o?: number;
  /**
   * Прибыль
   * @format decimal
   * @example -354.7
   */
  pf?: number;
  /**
   * Прибыль в процентах
   * @format decimal
   * @example -354.7
   */
  pfr?: number;
  /**
   * Комиссия (в рублях)
   * @format decimal
   * @example 2
   */
  cms?: number;
  /**
   * Изменения
   * @format decimal
   * @example 525.21
   */
  ch?: number;
  /** Идентификатор клиентского портфеля */
  p?: Portfolio;
  /**
   * Свободные средства
   * @format decimal
   * @example 525.25
   */
  f?: number;
}

export interface MoneyHeavy {
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
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Свободные средства
   * @format decimal
   * @example 525.25
   */
  free?: number;
}

export interface Order {
  /** Уникальный идентификатор заявки */
  id?: OrderId;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Тип заявки:
   *   * `limit` - Лимитная заявка
   *   * `market` - Рыночная заявка
   * @example "market"
   */
  type?: "limit" | "market";
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Дата и время выставления (UTC) */
  transTime?: TransitionTime;
  /** Дата и время изменения статуса заявки (UTC) */
  updateTime?: UpdateTime;
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsInt;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество (лоты) */
  qty?: LotQuantity;
  /** Количество исполненных (штуки) */
  filledQtyUnits?: FilledQtyUnits;
  /** Количество исполненных (лоты) */
  filledQtyBatch?: FilledQtyBatch;
  /** Количество исполненных (лоты) */
  filled?: FilledQtyBatch;
  /** Цена */
  price?: PriceCommon;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Специальные поля для сделок со скрытой частью */
  iceberg?: {
    /** Видимая постоянная часть айсберг-заявки в лотах, указанная при создании стоп-лимитной заявки */
    creationFixedQuantity?: CreationFixedQuantity;
    /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки, указанная при создании стоп-лимитной заявки. Только срочный рынок */
    creationVarianceQuantity?: CreationVarianceQuantity;
    /** Видимая постоянная часть айсберг-заявки (штуки) */
    visibleQuantity?: VisibleQuantity;
    /** Видимая постоянная часть айсберг-заявки (лоты) */
    visibleQuantityBatch?: VisibleQuantityBatch;
    /** Исполненная часть айсберг-заявки (штуки) */
    visibleFilledQuantity?: VisibleFilledQuantity;
    /** Исполненная часть айсберг-заявки (лоты) */
    visibleFilledQuantityBatch?: VisibleFilledQuantityBatch;
  };
  /** Объем, для рыночных заявок - null */
  volume?: Volume;
}

export interface OrderSlim {
  /** Уникальный идентификатор заявки */
  id?: OrderId;
  /** Тикер (Код финансового инструмента) */
  sym?: Ticker;
  /** Пара Биржа:Тикер */
  tic?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  p?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /** Пользовательский комментарий к заявке */
  cmt?: Comment;
  /**
   * Тип заявки:
   *   * `limit` - Лимитная заявка
   *   * `market` - Рыночная заявка
   * @example "market"
   */
  t?: "limit" | "market";
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  s?: Side;
  /**
   * Статус исполнения:
   *   * `working` - На исполнении
   *   * `filled` - Исполнена
   *   * `canceled` - Отменена
   *   * `rejected` - Отклонена
   */
  st?: OrderStatus;
  /** Дата и время выставления (UTC) */
  tt?: TransitionTime;
  /** Дата и время изменения статуса заявки (UTC) */
  ut?: UpdateTime;
  /** Дата и время завершения (UTC) */
  et?: EndTime;
  /** Количество (штуки) */
  q?: QuantityUnitsInt;
  /** Количество (лоты) */
  qb?: LotQuantity;
  /** Количество исполненных (штуки) */
  fq?: FilledQtyUnits;
  /** Количество исполненных (лоты) */
  fqb?: FilledQtyBatch;
  /** Цена */
  px?: PriceCommon;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  h?: Snapshot;
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  tf?: TimeInForce;
  /** Специальные поля для сделок со скрытой частью */
  i?: {
    /** Видимая постоянная часть айсберг-заявки в лотах, указанная при создании стоп-лимитной заявки */
    cf?: CreationFixedQuantity;
    /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки, указанная при создании стоп-лимитной заявки. Только срочный рынок */
    cv?: CreationVarianceQuantity;
    /** Видимая постоянная часть айсберг-заявки (штуки) */
    v?: VisibleQuantity;
    /** Видимая постоянная часть айсберг-заявки (лоты) */
    vb?: VisibleQuantityBatch;
    /** Исполненная часть айсберг-заявки (штуки) */
    vf?: VisibleFilledQuantity;
    /** Исполненная часть айсберг-заявки (лоты) */
    vfb?: VisibleFilledQuantityBatch;
  };
  /** Объем, для рыночных заявок - null */
  v?: Volume;
}

export interface OrderHeavy {
  /** Уникальный идентификатор заявки */
  id?: OrderId;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Тип заявки:
   *   * `limit` - Лимитная заявка
   *   * `market` - Рыночная заявка
   * @example "market"
   */
  type?: "limit" | "market";
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Дата и время выставления (UTC) */
  transTime?: TransitionTime;
  /** Дата и время изменения статуса заявки (UTC) */
  updateTime?: UpdateTime;
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsInt;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество исполненных (штуки) */
  filledQtyUnits?: FilledQtyUnits;
  /** Количество исполненных (лоты) */
  filledQtyBatch?: FilledQtyBatch;
  /** Цена */
  price?: PriceCommon;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Специальные поля для сделок со скрытой частью */
  iceberg?: {
    /** Видимая постоянная часть айсберг-заявки в лотах, указанная при создании стоп-лимитной заявки */
    creationFixedQuantity?: CreationFixedQuantity;
    /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки, указанная при создании стоп-лимитной заявки. Только срочный рынок */
    creationVarianceQuantity?: CreationVarianceQuantity;
    /** Видимая постоянная часть айсберг-заявки (штуки) */
    visibleQuantity?: VisibleQuantity;
    /** Видимая постоянная часть айсберг-заявки (лоты) */
    visibleQuantityBatch?: VisibleQuantityBatch;
    /** Исполненная часть айсберг-заявки (штуки) */
    visibleFilledQuantity?: VisibleFilledQuantity;
    /** Исполненная часть айсберг-заявки (лоты) */
    visibleFilledQuantityBatch?: VisibleFilledQuantityBatch;
  };
  /** Объем, для рыночных заявок - null */
  volume?: Volume;
}

export interface Stoporder {
  /** Уникальный идентификатор стоп-заявки */
  id?: StopOrderId;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   */
  type?: OrderTypeStopLimit;
  /**
   * Условная цена
   * @format decimal
   * @example 215
   */
  stopPrice?: number;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
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
   * Цена (Лимит)
   * @format decimal
   * @example 208.6
   */
  price?: number;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
}

export interface StoporderSlim {
  /** Уникальный идентификатор стоп-заявки */
  id?: StopOrderId;
  /** Тикер (Код финансового инструмента) */
  sym?: Ticker;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /** Пара Биржа:Тикер */
  tic?: BrokerSymbol;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   */
  t?: OrderTypeStopLimit;
  /**
   * Условная цена
   * @format decimal
   * @example 215
   */
  pxs?: number;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  s?: Side;
  /**
   * Статус исполнения:
   *   * `working` - На исполнении
   *   * `filled` - Исполнена
   *   * `canceled` - Отменена
   *   * `rejected` - Отклонена
   */
  st?: OrderStatus;
  /** Дата и время завершения (UTC) */
  exp?: EndTime;
  /**
   * Количество
   * @format decimal
   * @example 1
   */
  q?: number;
  /**
   * Количество исполненных
   * @format decimal
   * @example 1
   */
  fqb?: number;
  /**
   * Цена (Лимит)
   * @format decimal
   * @example 208.6
   */
  px?: number;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  e?: Snapshot;
}

export interface StoporderHeavy {
  /** Уникальный идентификатор стоп-заявки */
  id?: StopOrderId;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   */
  type?: OrderTypeStopLimit;
  /**
   * Условная цена
   * @format decimal
   * @example 215
   */
  stopPrice?: number;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
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
   * Цена (Лимит)
   * @format decimal
   * @example 208.6
   */
  price?: number;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
}

export interface StoporderWarp {
  /** Уникальный идентификатор стоп-заявки */
  id?: StopOrderId;
  /** Уникальный идентификатор биржевой заявки */
  exchangeOrderId?: ExchangeOrderId;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   */
  type?: OrderTypeStopLimit;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Дата и время выставления (UTC) */
  transTime?: TransitionTime;
  /** Дата и время изменения статуса заявки (UTC) */
  updateTime?: UpdateTime;
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
  /** Причина отмены стоп-заявки */
  error?: ErrorDuringTriggering;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsDec;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество (лоты) */
  qty?: LotQuantity;
  /**
   * Количество исполненных (штуки)
   * @deprecated
   * @format decimal
   * @example 10
   */
  filled?: number;
  /** Количество исполненных (штуки) */
  filledQtyUnits?: FilledQtyUnits;
  /** Количество исполненных (лоты) */
  filledQtyBatch?: FilledQtyBatch;
  /**
   * Цена (Лимит)
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
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  iceberg?: {
    /** Видимая постоянная часть айсберг-заявки в лотах, указанная при создании стоп-лимитной заявки */
    creationFixedQuantity?: CreationFixedQuantity;
    /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки, указанная при создании стоп-лимитной заявки. Только срочный рынок */
    creationVarianceQuantity?: CreationVarianceQuantity;
    /** Видимая постоянная часть айсберг-заявки (штуки) */
    visibleQuantity?: VisibleQuantity;
    /** Видимая постоянная часть айсберг-заявки (лоты) */
    visibleQuantityBatch?: VisibleQuantityBatch;
    /** Исполненная часть айсберг-заявки (штуки) */
    visibleFilledQuantity?: VisibleFilledQuantity;
    /** Исполненная часть айсберг-заявки (лоты) */
    visibleFilledQuantityBatch?: VisibleFilledQuantityBatch;
  };
  /** Объем, для рыночных заявок - null */
  volume?: Volume;
}

export interface StoporderWarpSlim {
  /** Уникальный идентификатор стоп-заявки */
  id?: StopOrderId;
  /** Уникальный идентификатор биржевой заявки */
  eid?: ExchangeOrderId;
  /** Тикер (Код финансового инструмента) */
  sym?: Ticker;
  /** Пара Биржа:Тикер */
  tic?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  p?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   */
  t?: OrderTypeStopLimit;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  s?: Side;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  cnd?: Condition;
  /**
   * Статус исполнения:
   *   * `working` - На исполнении
   *   * `filled` - Исполнена
   *   * `canceled` - Отменена
   *   * `rejected` - Отклонена
   */
  st?: OrderStatus;
  /** Дата и время выставления (UTC) */
  tt?: TransitionTime;
  /** Дата и время изменения статуса заявки (UTC) */
  ut?: UpdateTime;
  /** Дата и время завершения (UTC) */
  et?: EndTime;
  /** Причина отмены стоп-заявки */
  err?: ErrorDuringTriggering;
  /** Количество (штуки) */
  q?: QuantityUnitsDec;
  /** Количество (лоты) */
  qb?: LotQuantity;
  /** Количество исполненных (штуки) */
  fq?: FilledQtyUnits;
  /** Количество исполненных (лоты) */
  fqb?: FilledQtyBatch;
  /**
   * Цена (Лимит)
   * @format decimal
   * @example 208.6
   */
  px?: number;
  /**
   * Средняя цена
   * @format decimal
   * @example 0
   */
  pxavg?: number;
  /**
   * Условная цена
   * @format decimal
   * @example 215
   */
  pxs?: number;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  h?: Snapshot;
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  tf?: TimeInForce;
  i?: {
    /** Видимая постоянная часть айсберг-заявки в лотах, указанная при создании стоп-лимитной заявки */
    cf?: CreationFixedQuantity;
    /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки, указанная при создании стоп-лимитной заявки. Только срочный рынок */
    cv?: CreationVarianceQuantity;
    /** Видимая постоянная часть айсберг-заявки (штуки) */
    v?: VisibleQuantity;
    /** Видимая постоянная часть айсберг-заявки (лоты) */
    vb?: VisibleQuantityBatch;
    /** Исполненная часть айсберг-заявки (штуки) */
    vf?: VisibleFilledQuantity;
    /** Исполненная часть айсберг-заявки (лоты) */
    vfb?: VisibleFilledQuantityBatch;
  };
  /** Объем, для рыночных заявок - null */
  v?: Volume;
}

export interface StoporderWarpHeavy {
  /** Уникальный идентификатор стоп-заявки */
  id?: StopOrderId;
  /** Уникальный идентификатор биржевой заявки */
  exchangeOrderId?: ExchangeOrderId;
  /** Тикер (Код финансового инструмента) */
  symbol?: Ticker;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Тип заявки:
   *   * `stop` - Стоп-заявка
   *   * `stoplimit` - Стоп-лимитная заявка
   */
  type?: OrderTypeStopLimit;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
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
  /** Дата и время выставления (UTC) */
  transTime?: TransitionTime;
  /** Дата и время изменения статуса заявки (UTC) */
  updateTime?: UpdateTime;
  /** Дата и время завершения (UTC) */
  endTime?: EndTime;
  /** Причина отмены стоп-заявки */
  error?: ErrorDuringTriggering;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsDec;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество исполненных (штуки) */
  filledQtyUnits?: FilledQtyUnits;
  /** Количество исполненных (лоты) */
  filledQtyBatch?: FilledQtyBatch;
  /**
   * Цена (Лимит)
   * @format decimal
   * @example 208.6
   */
  price?: number;
  /**
   * Средняя цена
   * @format decimal
   * @example 0
   */
  avgPrice?: number;
  /**
   * Условная цена
   * @format decimal
   * @example 215
   */
  stopPrice?: number;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  iceberg?: {
    /** Видимая постоянная часть айсберг-заявки в лотах, указанная при создании стоп-лимитной заявки */
    creationFixedQuantity?: CreationFixedQuantity;
    /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки, указанная при создании стоп-лимитной заявки. Только срочный рынок */
    creationVarianceQuantity?: CreationVarianceQuantity;
    /** Видимая постоянная часть айсберг-заявки (штуки) */
    visibleQuantity?: VisibleQuantity;
    /** Видимая постоянная часть айсберг-заявки (лоты) */
    visibleQuantityBatch?: VisibleQuantityBatch;
    /** Исполненная часть айсберг-заявки (штуки) */
    visibleFilledQuantity?: VisibleFilledQuantity;
    /** Исполненная часть айсберг-заявки (лоты) */
    visibleFilledQuantityBatch?: VisibleFilledQuantityBatch;
  };
  /** Объем, для рыночных заявок - null */
  volume?: Volume;
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

export interface SummarySlim {
  /**
   * Покупательская способность на утро
   * @format decimal
   * @example 439844.15
   */
  bpm?: number;
  /**
   * Покупательская способность
   * @format decimal
   * @example 452404
   */
  bp?: number;
  /**
   * Прибыль за сегодня
   * @format decimal
   * @example 12560
   */
  p?: number;
  /**
   * Норма прибыли, %
   * @format decimal
   * @example 1.93
   */
  pr?: number;
  /**
   * Ликвидный портфель
   * @format decimal
   * @example 651717
   */
  pe?: number;
  /**
   * Оценка портфеля
   * @format decimal
   * @example 651717
   */
  plv?: number;
  /**
   * Маржа
   * @format decimal
   * @example 199313
   */
  im?: number;
  /**
   * Риск до закрытия
   * @format decimal
   * @example 552061
   */
  r?: number;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  cms?: number | null;
}

export interface SummaryHeavy {
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

export interface Fortsrisk {
  /**
   * Сальдо денежных торговых переводов за текущую сессию (поле будет удалено в будущих обновлениях)
   * @deprecated
   * @format decimal
   * @example 1.93
   */
  balanceMoney?: number;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Свободные средства. Сумма рублей и залогов, дисконтированных в рубли, доступная для открытия позиций. (`MoneyFree` = `MoneyAmount` + `VmInterCl` – `MoneyBlocked` – `VmReserve` – `Fee`)
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
   * Вариационная маржа, рассчитанная по формуле `VmCurrentPositions` + `VmInterCl`
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

export interface FortsriskSlim {
  /** Идентификатор клиентского портфеля */
  p?: Portfolio;
  /**
   * Свободные средства. Сумма рублей и залогов, дисконтированных в рубли, доступная для открытия позиций. (`MoneyFree` = `MoneyAmount` + `VmInterCl` – `MoneyBlocked` – `VmReserve` – `Fee`)
   * @format decimal
   * @example 452404
   */
  f?: number;
  /**
   * Средства, заблокированные под ГО
   * @format decimal
   * @example 12560
   */
  b?: number;
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
  o?: number;
  /**
   * Общее количество рублей и дисконтированных в рубли залогов
   * @format decimal
   * @example 199313
   */
  a?: number;
  /**
   * Сумма залогов, дисконтированных в рубли
   * @format decimal
   * @example 552061
   */
  pa?: number;
  /**
   * Вариационная маржа, списанная или полученная в пром. клиринг
   * @format decimal
   * @example 651717
   */
  mgc?: number;
  /**
   * Сагрегированная вармаржа по текущим позициям
   * @format decimal
   * @example 199313
   */
  mgp?: number;
  /**
   * Наличие установленных денежного и залогового лимитов
   * @example false
   */
  lim?: boolean;
}

export interface FortsriskHeavy {
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Свободные средства. Сумма рублей и залогов, дисконтированных в рубли, доступная для открытия позиций. (`MoneyFree` = `MoneyAmount` + `VmInterCl` – `MoneyBlocked` – `VmReserve` – `Fee`)
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
   * Вариационная маржа, рассчитанная по формуле `VmCurrentPositions` + `VmInterCl`
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
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
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

export interface RiskSlim {
  /** Идентификатор клиентского портфеля */
  p?: Portfolio;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Общая стоимость портфеля
   * @format decimal
   * @example 646270.9
   */
  pe?: number;
  /**
   * Стоимость ликвидного портфеля
   * @format decimal
   * @example 646270.9
   */
  plv?: number;
  /**
   * Начальная маржа
   * @format decimal
   * @example 15752.115
   */
  mgi?: number;
  /**
   * Минимальная маржа
   * @format decimal
   * @example 65177.0575
   */
  mgmn?: number;
  /**
   * Скорректированная маржа
   * @format decimal
   * @example 15752.115
   */
  mgc?: number;
  /**
   * НПР1
   * @format decimal
   * @example 630518.785
   */
  r1?: number;
  /**
   * НПР2
   * @format decimal
   * @example 638394.8425
   */
  r2?: number;
  /** Категория риска. */
  rid?: RiskCategoryId;
  /**
   * Тип клиента:
   *   * `StandardRisk` - Стандартный уровень риска (КСУР)
   *   * `HighRisk` - Высокий уровень риска (КПУР)
   *   * `Special` -  Особый уровень риска (КОУР)
   */
  ct?: ClientType;
  /**
   * Имеются ли запретные позиции
   * @example false
   */
  fpos?: boolean;
  /**
   * Имеются ли отрицательные количества
   * @example false
   */
  nq?: boolean;
}

export interface RiskHeavy {
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
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
   * Уникальный идентификатор
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
   * Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /** Количество */
  qty?: Quantity;
  /** Цена */
  price?: PriceCommon;
  /**
   * Дата и время (UTC) закрытия заявки
   * @format date-time
   * @example "2018-08-07T08:40:03.445Z"
   */
  time?: string;
  /** Время (UTC) в формате Unix Time Milliseconds */
  timestamp?: TimeUnixMilliseconds;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  oi?: OpenInterest;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
}

export interface AlltradeSlim {
  /**
   * Уникальный идентификатор
   * @format int64
   * @example 159
   */
  id?: number;
  /**
   * Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен
   * @example "SBER"
   */
  sym?: string;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  bd?: Board;
  /** Количество */
  q?: Quantity;
  /** Цена */
  px?: PriceCommon;
  /** Время (UTC) в формате Unix Time Milliseconds */
  t?: TimeUnixMilliseconds;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  s?: Side;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  oi?: OpenInterest;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  h?: Snapshot;
}

export interface AlltradeHeavy {
  /**
   * Уникальный идентификатор
   * @format int64
   * @example 159
   */
  id?: number;
  /**
   * Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен
   * @example "SBER"
   */
  symbol?: string;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /** Количество */
  qty?: Quantity;
  /** Цена */
  price?: PriceCommon;
  /**
   * Дата и время (UTC) закрытия заявки
   * @format date-time
   * @example "2018-08-07T08:40:03.445Z"
   */
  time?: string;
  /** Время (UTC) в формате Unix Time Milliseconds */
  timestamp?: TimeUnixMilliseconds;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  oi?: OpenInterest;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
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
   * Id категории бумаги для категоризации
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
   * Чаще всего будет null. Поле показывает к какому базовому инструменту принадлежит данный инструмент
   * @example "SBER"
   */
  underlyingAsset?: string | null;
  /**
   * Чаще всего будет null. Поле показывает к множеству инструменту принадлежит данный инструмент
   * @example "SBER"
   */
  setName?: string | null;
  /**
   * Является ли зависимость инструмента к базовому активу прямой или обратной
   * @example false
   */
  isDirect?: boolean;
  /**
   * ISIN инструмента. Если есть
   * @example "RU0009029557"
   */
  isin?: string;
  /**
   * Код валюты расчетов
   * @example "RUB"
   */
  currencyCode?: string;
  /**
   * Ставка риска повышения цены. Применяется для шортов
   * @format decimal
   * @example 20
   */
  rateUp?: number;
  /**
   * Ставка риска понижения цены. Применяется для лонгов
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
   * Разрешен ли шорт по бумаге. True если да
   * @example true
   */
  isShortSellPossible?: boolean;
  /**
   * Доступен ли данный инструмент в маржу. Т.е. есть ли он в списке маржинальных инструментов брокера
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
   * @format date-time
   * @example "2021-08-24T10:13:01.6584899"
   */
  createdAt?: string;
  /**
   * Время последнего обновления ставки риска
   * @format date-time
   * @example "2021-10-13T16:01:42.7957367"
   */
  updatedAt?: string;
  /**
   * Инициатор последнего обновления ставки риска
   * @example "RiskRatesLoader"
   */
  updatedBy?: string;
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
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен
   * @example "SBER"
   */
  symbol?: string;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
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
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsInt;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество (лоты) */
  qty?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  /** Начислено (НКД) */
  accruedInt?: AccruedInterest;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  commission?: number | null;
  /** Специальные поля для сделок РЕПО */
  repoSpecificFields?: {
    /**
     * Цена репо в процентах годовых.
     * @format decimal
     * @example 23.45
     */
    repoRate?: number;
    /**
     * Поле-примечание, используется для обратной связи с внешними
     * системами. Например, идентификатор пользователя внешней системы,
     * поставившего заявку.
     * @example "MB0014100002"
     */
    extRef?: string;
    /**
     * Срок РЕПО - промежуток времени, выраженный в календарных днях,
     * между датами исполнения первой и второй частей сделки РЕПО.
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
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  volume?: number;
}

export interface TradeSlim {
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
  eid?: string;
  /** Пользовательский комментарий к заявке */
  cmt?: Comment;
  /**
   * Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен
   * @example "SBER"
   */
  sym?: string;
  /** Пара Биржа:Тикер */
  tic?: BrokerSymbol;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Дата и время (UTC) закрытия заявки
   * @format date-time
   * @example "2018-08-07T08:40:03.445Z"
   */
  d?: string;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  b?: Board;
  /** Количество (штуки) */
  q?: QuantityUnitsInt;
  /** Количество (лоты) */
  qb?: LotQuantity;
  /** Цена */
  px?: PriceCommon;
  /** Начислено (НКД) */
  ai?: AccruedInterest;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  s?: Side;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  h?: Snapshot;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  cms?: number | null;
  /** Специальные поля для сделок РЕПО */
  r?: {
    /**
     * Цена репо в процентах годовых.
     * @format decimal
     * @example 23.45
     */
    r?: number;
    /**
     * Поле-примечание, используется для обратной связи с внешними
     * системами. Например, идентификатор пользователя внешней системы,
     * поставившего заявку.
     * @example "MB0014100002"
     */
    exr?: string;
    /**
     * Срок РЕПО - промежуток времени, выраженный в календарных днях,
     * между датами исполнения первой и второй частей сделки РЕПО.
     * @format int32
     * @example 2
     */
    tm?: number;
    /**
     * Торговый счет, в счет которого заключена данная сделка
     * @example "MB0014100002"
     */
    a?: string;
    /**
     * Описание типа сделки
     * @example "Расчетная по операции своп"
     */
    t?: string;
    /**
     * Объем сделки, выраженный в валюте расчетов
     * @format decimal
     * @example 46
     */
    v?: number;
    /**
     * Доходность, рассчитанная по цене сделки
     * @format decimal
     * @example 23.45
     */
    y?: number;
  };
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  v?: number;
}

export interface TradeHeavy {
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
  orderNo?: string;
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен
   * @example "SBER"
   */
  symbol?: string;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
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
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsInt;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество (лоты) */
  qty?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  /** Начислено (НКД) */
  accruedInt?: AccruedInterest;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  commission?: number | null;
  /** Специальные поля для сделок РЕПО */
  repoSpecificFields?: {
    /**
     * Цена репо в процентах годовых.
     * @format decimal
     * @example 23.45
     */
    repoRate?: number;
    /**
     * Поле-примечание, используется для обратной связи с внешними
     * системами. Например, идентификатор пользователя внешней системы,
     * поставившего заявку.
     * @example "MB0014100002"
     */
    extRef?: string;
    /**
     * Срок РЕПО - промежуток времени, выраженный в календарных днях,
     * между датами исполнения первой и второй частей сделки РЕПО.
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
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  volume?: number;
}

export interface TradeV2 {
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
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /** Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен */
  symbol?: TickerUndefined;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
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
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsInt;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество (лоты) */
  qty?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  commission?: number | null;
  /** Специальные поля для сделок РЕПО */
  repoSpecificFields?: {
    /**
     * Цена репо в процентах годовых.
     * @format decimal
     * @example 23.45
     */
    repoRate?: number;
    /**
     * Поле-примечание, используется для обратной связи с внешними
     * системами. Например, идентификатор пользователя внешней системы,
     * поставившего заявку.
     * @example "MB0014100002"
     */
    extRef?: string;
    /**
     * Срок РЕПО - промежуток времени, выраженный в календарных днях,
     * между датами исполнения первой и второй частей сделки РЕПО.
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
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  volume?: number;
}

export interface TradeV2Slim {
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
  eid?: string;
  /** Пользовательский комментарий к заявке */
  cmt?: Comment;
  /** Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен */
  sym?: TickerUndefined;
  /** Пара Биржа:Тикер */
  tic?: BrokerSymbol;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Дата и время (UTC) закрытия заявки
   * @format date-time
   * @example "2018-08-07T08:40:03.445Z"
   */
  d?: string;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  b?: Board;
  /** Количество (штуки) */
  q?: QuantityUnitsInt;
  /** Количество (лоты) */
  qb?: LotQuantity;
  /** Цена */
  px?: PriceCommon;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  s?: Side;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  h?: Snapshot;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  cms?: number | null;
  /** Специальные поля для сделок РЕПО */
  r?: {
    /**
     * Цена репо в процентах годовых.
     * @format decimal
     * @example 23.45
     */
    r?: number;
    /**
     * Поле-примечание, используется для обратной связи с внешними
     * системами. Например, идентификатор пользователя внешней системы,
     * поставившего заявку.
     * @example "MB0014100002"
     */
    exr?: string;
    /**
     * Срок РЕПО - промежуток времени, выраженный в календарных днях,
     * между датами исполнения первой и второй частей сделки РЕПО.
     * @format int32
     * @example 2
     */
    tm?: number;
    /**
     * Торговый счет, в счет которого заключена данная сделка
     * @example "MB0014100002"
     */
    a?: string;
    /**
     * Описание типа сделки
     * @example "Расчетная по операции своп"
     */
    t?: string;
    /**
     * Объем сделки, выраженный в валюте расчетов
     * @format decimal
     * @example 46
     */
    v?: number;
    /**
     * Доходность, рассчитанная по цене сделки
     * @format decimal
     * @example 23.45
     */
    y?: number;
  };
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  v?: number;
}

export interface TradeV2Heavy {
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
  orderNo?: string;
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /** Тикер (Код финансового инструмента). "[N/A]" используется, если `symbol` не определен */
  symbol?: TickerUndefined;
  /** Пара Биржа:Тикер */
  brokerSymbol?: BrokerSymbol;
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
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /** Количество (штуки) */
  qtyUnits?: QuantityUnitsInt;
  /** Количество (лоты) */
  qtyBatch?: LotQuantity;
  /** Количество (лоты) */
  qty?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** `True` - для данных из "снепшота", то есть из истории. `False` - для новых событий */
  existing?: Snapshot;
  /**
   * Суммарная комиссия (null для Срочного рынка)
   * @format decimal
   * @example 24.21
   */
  commission?: number | null;
  /** Специальные поля для сделок РЕПО */
  repoSpecificFields?: {
    /**
     * Цена репо в процентах годовых.
     * @format decimal
     * @example 23.45
     */
    repoRate?: number;
    /**
     * Поле-примечание, используется для обратной связи с внешними
     * системами. Например, идентификатор пользователя внешней системы,
     * поставившего заявку.
     * @example "MB0014100002"
     */
    extRef?: string;
    /**
     * Срок РЕПО - промежуток времени, выраженный в календарных днях,
     * между датами исполнения первой и второй частей сделки РЕПО.
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
  /**
   * Объём, рассчитанный по средней цене
   * @format decimal
   * @example 38767080
   */
  volume?: number;
}

export interface Tradingsession {
  /**
   * Рынок:
   * * `FORTS` - Срочный рынок Московской биржи
   * * `FOND` - Фондовый рынок Московской биржи
   * * `CURR` - Валютный рынок Московской биржи
   * * `SPBX` - Рынок Санкт-Петербургской биржи
   */
  code?: Market;
  /**
   * Текущий статус торгов
   * @example "open"
   */
  status?: string;
}

export interface TradingsessionSlim {
  /**
   * Рынок:
   * * `FORTS` - Срочный рынок Московской биржи
   * * `FOND` - Фондовый рынок Московской биржи
   * * `CURR` - Валютный рынок Московской биржи
   * * `SPBX` - Рынок Санкт-Петербургской биржи
   */
  code?: Market;
  /**
   * Текущий статус торгов
   * @example "open"
   */
  status?: string;
}

export interface TradingsessionHeavy {
  /**
   * Рынок:
   * * `FORTS` - Срочный рынок Московской биржи
   * * `FOND` - Фондовый рынок Московской биржи
   * * `CURR` - Валютный рынок Московской биржи
   * * `SPBX` - Рынок Санкт-Петербургской биржи
   */
  code?: Market;
  /**
   * Текущий статус торгов
   * @example "open"
   */
  status?: string;
}

export interface CurrencyPair {
  /**
   * Базовая валюта
   * @example "EUR"
   */
  firstCode?: string;
  /**
   * Котируемая валюта
   * @example "RUB"
   */
  secondCode?: string;
  /**
   * Код валютной пары как инструмента
   * @example "EUR_RUB__TOM"
   */
  symbolTom?: string;
}

export type CurrencyPairs = CurrencyPair[];

export interface Futures {
  /**
   * Имя фьючерса
   * @example "SBRF-12.23"
   */
  symbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Тикер фьючерсного контракта
   * @example "SRZ3"
   */
  description?: string;
  /**
   * Цена предыдущего закрытия
   * @format decimal
   * @example 26822
   */
  prev_close_price?: number;
  /** Последняя цена */
  last_price?: PriceLast;
  /** UTC-timestamp для значения поля `last_price` */
  last_price_timestamp?: LastPriceTimestamp;
  /** Максимальная цена */
  high_price?: PriceMaximum;
  /** Минимальная цена */
  low_price?: PriceMinimum;
  /** Начислено (НКД) */
  accruedInt?: AccruedInterest;
  /** Объем, для рыночных заявок - null */
  volume?: Volume;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  open_interest?: OpenInterest;
  /** Аск */
  ask?: Ask;
  /** Бид */
  bid?: Bid;
  /** Количество лотов в ближайшем аске в биржевом стакане */
  ask_vol?: AskVolume;
  /** Количество лотов в ближайшем биде в биржевом стакане */
  bid_vol?: BidVolume;
  /** Временная метка (UTC) сообщения о состоянии биржевого стакана в формате Unix Time Milliseconds */
  ob_ms_timestamp?: OrderBookMSTimestamp;
  /** Цена открытия */
  open_price?: PriceOpen;
  /**
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  yield?: number | null;
  /** Размер лота */
  lotsize?: LotSize;
  /** Суммарная стоимость лота */
  lotvalue?: LotValue;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  facevalue?: FaceValue;
  /**
   * Полное название фьючерса
   * @example "Фьючерсный контракт SBRF-12.23"
   */
  type?: string;
  /** Суммарное количество лотов во всех бидах в биржевом стакане */
  total_bid_vol?: BidVolumeTotal;
  /** Суммарное количество лотов во всех асках в биржевом стакане */
  total_ask_vol?: AskVolumeTotal;
  /**
   * Начислено (НКД)
   * @deprecated
   * @format decimal
   * @example 0
   */
  accrued_interest?: number;
  /** Разность цены и цены предыдущего закрытия */
  change?: Change;
  /** Относительное изменение цены */
  change_percent?: ChangePercent;
}

export interface FuturesSlim {
  /**
   * Имя фьючерса
   * @example "SBRF-12.23"
   */
  sym?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  ex?: Exchange;
  /**
   * Тикер фьючерсного контракта
   * @example "SRZ3"
   */
  desc?: string;
  /** UTC-timestamp для значения поля `last_price` */
  tst?: LastPriceTimestamp;
  /** Временная метка (UTC) сообщения о состоянии биржевого стакана в формате Unix Time Milliseconds */
  tso?: OrderBookMSTimestamp;
  /** Цена открытия */
  o?: PriceOpen;
  /** Максимальная цена */
  h?: PriceMaximum;
  /** Минимальная цена */
  l?: PriceMinimum;
  /** Последняя цена */
  c?: PriceLast;
  /** Объем, для рыночных заявок - null */
  v?: Volume;
  /** Начислено (НКД) */
  acci?: AccruedInterest;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  oi?: OpenInterest;
  /**
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  y?: number | null;
  /** Аск */
  ask?: Ask;
  /** Бид */
  bid?: Bid;
  /** Количество лотов в ближайшем аске в биржевом стакане */
  av?: AskVolume;
  /** Количество лотов в ближайшем биде в биржевом стакане */
  bv?: BidVolume;
  /** Суммарное количество лотов во всех бидах в биржевом стакане */
  tbv?: BidVolumeTotal;
  /** Суммарное количество лотов во всех асках в биржевом стакане */
  tav?: AskVolumeTotal;
  /** Размер лота */
  lot?: LotSize;
  /** Суммарная стоимость лота */
  lotv?: LotValue;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  fv?: FaceValue;
  /**
   * Полное название фьючерса
   * @example "Фьючерсный контракт SBRF-12.23"
   */
  t?: string;
}

export interface FuturesHeavy {
  /**
   * Имя фьючерса
   * @example "SBRF-12.23"
   */
  symbol?: string;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /**
   * Тикер фьючерсного контракта
   * @example "SRZ3"
   */
  description?: string;
  /** Валюта расчетов */
  currency?: Currency;
  /**
   * Цена предыдущего закрытия
   * @format decimal
   * @example 26822
   */
  prevClosePrice?: number;
  /** Последняя цена */
  lastPrice?: PriceLast;
  /** UTC-timestamp для значения поля `last_price` */
  lastPriceTimestamp?: LastPriceTimestamp;
  /** Максимальная цена */
  highPrice?: PriceMaximum;
  /** Минимальная цена */
  lowPrice?: PriceMinimum;
  /** Начислено (НКД) */
  accruedInterest?: AccruedInterest;
  /** Объем, для рыночных заявок - null */
  volume?: Volume;
  /** Открытый интерес (open interest). Если не поддерживается инструментом — значение 0 или `null` */
  openInterest?: OpenInterest;
  /** Аск */
  ask?: Ask;
  /** Бид */
  bid?: Bid;
  /** Количество лотов в ближайшем аске в биржевом стакане */
  askVol?: AskVolume;
  /** Количество лотов в ближайшем биде в биржевом стакане */
  bidVol?: BidVolume;
  /** Временная метка (UTC) сообщения о состоянии биржевого стакана в формате Unix Time Milliseconds */
  obMsTimestamp?: OrderBookMSTimestamp;
  /** Цена открытия */
  openPrice?: PriceOpen;
  /**
   * Доходность, рассчитанная по цене сделки
   * @format int32
   * @example null
   */
  yield?: number | null;
  /** Размер лота */
  lotSize?: LotSize;
  /** Суммарная стоимость лота */
  lotValue?: LotValue;
  /**
   * Показатель, значение которого варьируется в зависимости от выбранного рынка:
   * * Для фондового рынка — номинальная стоимость единицы финансового инструмента
   * * Для срочного рынка — размер одного лота
   * * Для валютного рынка — количество валюты лота, за которое указывается цена в котировках
   */
  faceValue?: FaceValue;
  /**
   * Полное название фьючерса
   * @example "Фьючерсный контракт SBRF-12.23"
   */
  type?: string;
  /** Суммарное количество лотов во всех бидах в биржевом стакане */
  totalBidVol?: BidVolumeTotal;
  /** Суммарное количество лотов во всех асках в биржевом стакане */
  totalAskVol?: AskVolumeTotal;
  /** Разность цены и цены предыдущего закрытия */
  change?: Change;
  /** Относительное изменение цены */
  changePercent?: ChangePercent;
}

export type AvailableBoards = Board[];

export interface WsResAllTradesGetAndSubscribe {
  data?: Alltrade;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimAllTradesGetAndSubscribe {
  data?: AlltradeSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyAllTradesGetAndSubscribe {
  data?: AlltradeHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResOrderBookGetAndSubscribe {
  /** Данные о запрашиваемом "биржевом стакане" */
  data?: Orderbook;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimOrderBookGetAndSubscribe {
  /** Данные о запрашиваемом "биржевом стакане" */
  data?: OrderbookSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyOrderBookGetAndSubscribe {
  /** Данные о запрашиваемом "биржевом стакане" */
  data?: OrderbookHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResBarsGetAndSubscribe {
  data?: HistoryObject;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimBarsGetAndSubscribe {
  data?: HistoryObjectSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyBarsGetAndSubscribe {
  data?: HistoryObjectSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResQuotesSubscribe {
  data?: Symbol;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimQuotesSubscribe {
  data?: SymbolSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyQuotesSubscribe {
  data?: SymbolHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResPositionsGetAndSubscribe {
  data?: Position;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimPositionsGetAndSubscribe {
  data?: PositionSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyPositionsGetAndSubscribe {
  data?: PositionHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResTradesGetAndSubscribe {
  data?: Trade;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimTradesGetAndSubscribe {
  data?: TradeSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyTradesGetAndSubscribe {
  data?: TradeHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSummariesGetAndSubscribeV2 {
  data?: Summary;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimSummariesGetAndSubscribeV2 {
  data?: SummarySlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavySummariesGetAndSubscribeV2 {
  data?: SummaryHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResRisksGetAndSubscribe {
  data?: Risk;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimRisksGetAndSubscribe {
  data?: RiskSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyRisksGetAndSubscribe {
  data?: RiskHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSpectraRisksGetAndSubscribe {
  data?: Fortsrisk;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimSpectraRisksGetAndSubscribe {
  data?: FortsriskSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavySpectraRisksGetAndSubscribe {
  data?: FortsriskHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResStopOrdersGetAndSubscribe {
  data?: Stoporder;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimStopOrdersGetAndSubscribe {
  data?: StoporderSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyStopOrdersGetAndSubscribe {
  data?: StoporderHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResStopOrdersGetAndSubscribeWarp {
  data?: StoporderWarp;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimStopOrdersGetAndSubscribeWarp {
  data?: StoporderWarpSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyStopOrdersGetAndSubscribeWarp {
  data?: StoporderWarpHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResOrdersGetAndSubscribe {
  data?: Order;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimOrdersGetAndSubscribe {
  data?: OrderSlim;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyOrdersGetAndSubscribe {
  data?: OrderHeavy;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResInstrumentsGetAndSubscribeV2 {
  data?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    board?: Board;
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
    tradingStatusInfo?: string;
    /** Минимальная цена */
    priceMin?: PriceMinimum;
    /** Максимальная цена */
    priceMax?: PriceMaximum;
  };
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResSlimInstrumentsGetAndSubscribeV2 {
  data?: {
    /** Тикер (Код финансового инструмента) */
    sym?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    ex?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    bd?: Board;
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
    st?: TradingStatus;
    /**
     * Описание торгового статуса инструмента
     * @example "нормальный период торгов"
     */
    sti?: string;
    /** Минимальная цена */
    pxmn?: PriceMinimum;
    /** Максимальная цена */
    pxmx?: PriceMaximum;
  };
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHeavyInstrumentsGetAndSubscribeV2 {
  data?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
    /**
     * Код режима торгов (Борд):
     * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
     * * Для Биржи СПБ всегда SPBX
     */
    board?: Board;
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
    tradingStatusInfo?: string;
    /** Минимальная цена */
    priceMin?: PriceMinimum;
    /** Максимальная цена */
    priceMax?: PriceMaximum;
  };
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
}

export interface WsResHandledSuccessfully {
  /**
   * Текстовое представление возвращаемого сообщения
   * @example "Handled successfully"
   */
  message?: string;
  /** HTTP-код ответа */
  httpCode?: HTTP200;
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  requestGuid?: GuidWs;
}

export interface WsResInvalidJWT {
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  requestGuid?: GuidWs;
  /**
   * HTTP-код ответа
   * @format int32
   * @example 401
   */
  httpCode?: number;
  /**
   * Текстовое представление возвращаемого сообщения
   * @example "Invalid JWT token!"
   */
  message?: string;
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
  /** Клиентский идентификатор подписки. В качестве идентификатора требуется уникальная случайная строка. Значение в возвращаемых в рамках подписки сообщениях равно значению поля `guid`, переданному при отправке команды. */
  guid?: GuidWs;
  /** JWT токен для авторизации */
  token?: Token;
}

export type WsReqOrderBookGetAndSubscribe = {
  /**
   * Код операции.
   * @example "OrderBookGetAndSubscribe"
   */
  opcode?: "OrderBookGetAndSubscribe";
  /** Тикер (Код финансового инструмента) */
  code?: Ticker;
  /**
   * Глубина стакана. Стандартное и максимальное значение - 20
   * (20х20).
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
  /** Тикер (Код финансового инструмента) */
  code?: Ticker;
  /**
   * Длительность таймфрейма. В качестве значения можно указать точное количество секунд или код таймфрейма:
   * * `15` — 15 секунд
   * * `60` — 60 секунд или 1 минута
   * * `3600` — 3600 секунд или 1 час
   * * `D` — сутки (соответствует значению 86400)
   * * `W` — неделя (соответствует значению 604800)
   * * `M` — месяц (соответствует значению 2592000)
   * * `Y` — год (соответствует значению 31536000)
   * @example "60"
   */
  tf?: string;
  /**
   * Дата и время (UTC) для первой запрашиваемой свечи
   * @format int64
   * @example 1536557084
   */
  from?: number;
  /**
   * Данные c задержкой в 15 минут. Для авторизованых клиентов
   * задержка не применяется.
   * @example false
   */
  delayed?: boolean;
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
} & WsReqBaseObject;

export type WsReqQuotesSubscribe = {
  /**
   * Код операции
   * @example "QuotesSubscribe"
   */
  opcode?: "QuotesSubscribe";
  /** Тикер (Код финансового инструмента) */
  code?: Ticker;
} & WsReqBaseObject;

export type WsReqPositionsGetAndSubscribe = {
  /** Код операции */
  opcode?: "PositionsGetAndSubscribeV2";
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
} & WsReqBaseObject;

export type WsReqTradesGetAndSubscribe = {
  /** Код операции */
  opcode?: "TradesGetAndSubscribeV2";
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
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
   * Если указать, то перед актуальными данными придут данные о
   * последних N сделках.
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
  /** Тикер (Код финансового инструмента) */
  code?: Ticker;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  instrumentGroup?: Board;
} & WsReqBaseObject;

export type WsReqSummariesGetAndSubscribeV2 = {
  /** Код операции */
  opcode?: "SummariesGetAndSubscribeV2";
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
} & WsReqBaseObject;

export type WsReqRisksGetAndSubscribe = {
  /**
   * Код операции
   * @example "RisksGetAndSubscribe"
   */
  opcode?: string;
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
} & WsReqBaseObject;

export type WsReqSpectraRisksGetAndSubscribe = {
  /** Код операции */
  opcode?: "SpectraRisksGetAndSubscribe";
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
} & WsReqBaseObject;

export type WsReqStopOrdersGetAndSubscribe = {
  /** Код операции */
  opcode?: "StopOrdersGetAndSubscribe";
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
} & WsReqBaseObject;

export type WsReqStopOrdersGetAndSubscribeV2 = {
  /** Код операции */
  opcode?: "StopOrdersGetAndSubscribeV2";
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /** Опциональный фильтр по статусам заявок. Влияет только на фильтрацию первичных исторических данных при подписке */
  orderStatuses?: OrderStatus[];
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
} & WsReqBaseObject;

export type WsReqOrdersGetAndSubscribe = {
  /** Код операции */
  opcode?: "OrdersGetAndSubscribeV2";
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /** Опциональный фильтр по статусам заявок. Влияет только на фильтрацию первичных исторических данных при подписке */
  orderStatuses?: OrderStatus[];
  /**
   * Флаг отсеивания исторических данных:
   * * `true` — отображать только новые данные
   * * `false` — отображать в том числе данные из истории
   */
  skipHistory?: SkipHistory;
} & WsReqBaseObject;

export type WsReqInstrumentsGetAndSubscribeV2 = {
  /** Код операции */
  opcode?: "InstrumentsGetAndSubscribeV2";
  /** Тикер (Код финансового инструмента) */
  code?: Ticker;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  instrumentGroup?: Board;
} & WsReqBaseObject;

export interface WsReqUnsubscribe {
  /** Код операции */
  opcode?: "unsubscribe";
  /** JWT токен для авторизации */
  token?: Token;
  /**
   * Уникальный идентификатор подписки, от которой отписываемся.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  guid?: string;
}

/** Модель результата оценки стоимости и количества в лотах */
export interface EstimateOrderModel {
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /** Тикер (Код финансового инструмента) */
  ticker?: Ticker;
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
  /** Идентификатор клиентского портфеля */
  portfolio?: Portfolio;
  /** Тикер (Код финансового инструмента) */
  ticker?: Ticker;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  /** Цена */
  price?: PriceCommon;
  /** Количество (лоты) */
  lotQuantity?: LotQuantity;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  /**
   * Учитывать ли лимитные заявки при расчете
   * @default false
   */
  includeLimitOrders?: boolean;
}

export interface CommandwsResAuthorize {
  /**
   * Уникальный идентификатор подписки. Значение во входящем сообщении
   * равно значению поля \"guid\", переданному при отправке команды.
   * @example "f35a2373-612c-4518-54af-72025384f59b"
   */
  requestGuid?: string;
  /** HTTP-код ответа */
  httpCode?: HTTP200;
  /**
   * Информация об инициализации токена.
   * @example "The connection has been initialized."
   */
  message?: string;
}

export interface CommandwsResSuccessfullyCreated {
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  requestGuid?: GuidCws;
  /** HTTP-код ответа */
  httpCode?: HTTP200;
  /**
   * Информация о результате выполнения команды
   * @example "An order '12345' has been created."
   */
  message?: string;
  /** Уникальный идентификатор заявки */
  orderNumber?: OrderId;
}

export interface CommandwsResSuccessfullyUpdated {
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  requestGuid?: GuidCws;
  /** HTTP-код ответа */
  httpCode?: HTTP200;
  /**
   * Информация о результате выполнения команды
   * @example "An order has been updated. New order Id is '12345'."
   */
  message?: string;
  /** Уникальный идентификатор заявки */
  orderNumber?: OrderId;
}

export interface CommandwsResSuccessfullyDeleted {
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  requestGuid?: GuidCws;
  /** HTTP-код ответа */
  httpCode?: HTTP200;
  /**
   * Информация о результате выполнения команды
   * @example "An order '12345' has been deleted."
   */
  message?: string;
  /** Уникальный идентификатор заявки */
  orderNumber?: OrderId;
}

export interface CommandwsResBadrequest {
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  requestGuid?: GuidCws;
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
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** JWT токен для авторизации */
  token?: Token;
}

export interface CommandwsReqCreateMarketOrder {
  /** Код операции */
  opcode?: "create:market";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface CommandwsReqCreateLimitOrder {
  /** Код операции */
  opcode?: "create:limit";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface CommandwsReqCreateStopOrder {
  /** Код операции */
  opcode?: "create:stop";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
  /** Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders' */
  activate?: ActivateFlag;
}

export interface CommandwsReqCreateStopLimitOrder {
  /** Код операции */
  opcode?: "create:stopLimit";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
  /** Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders' */
  activate?: ActivateFlag;
}

export interface CommandwsReqUpdateMarketOrder {
  /** Код операции */
  opcode?: "update:market";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface CommandwsReqUpdateLimitOrder {
  /** Код операции */
  opcode?: "update:limit";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /** Пользовательский комментарий к заявке */
  comment?: Comment;
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface CommandwsReqUpdateStopOrder {
  /** Код операции */
  opcode?: "update:stop";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
  /** Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders' */
  activate?: ActivateFlag;
}

export interface CommandwsReqUpdateStopLimitOrder {
  /** Код операции */
  opcode?: "update:stopLimit";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Направление сделки:
   *   * `buy` — Купля
   *   * `sell` — Продажа
   */
  side?: Side;
  /** Количество (лоты) */
  quantity?: LotQuantity;
  /** Цена */
  price?: PriceCommon;
  /**
   * Условие срабатывания стоп/стоп-лимитной заявки:
   *   * `More` - Цена срабатывания больше текущей цены
   *   * `Less` - Цена срабатывания меньше текущей цены
   *   * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
   *   * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене
   */
  condition?: Condition;
  /** Стоп-цена */
  triggerPrice?: PriceTrigger;
  /** Срок действия (UTC) в формате Unix Time seconds */
  stopEndUnixTime?: EndTimeUnix;
  instrument?: {
    /** Тикер (Код финансового инструмента) */
    symbol?: Ticker;
    /**
     * Биржа:
     *   * `MOEX` - Московская биржа
     *   * `SPBX` - СПБ Биржа
     */
    exchange?: Exchange;
  };
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   */
  board?: Board;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /**
   * Тип заявки:
   *   * `oneday` - До конца дня
   *   * `immediateorcancel` - Снять остаток
   *   * `fillorkill` - Исполнить целиком или отклонить
   *   * `goodtillcancelled` - Активна до отмены
   */
  timeInForce?: TimeInForce;
  /** Видимая постоянная часть айсберг-заявки в лотах */
  icebergFixed?: IcebergFixed;
  /** Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок */
  icebergVariance?: IcebergVariance;
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
  /** Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders' */
  activate?: ActivateFlag;
}

export interface CommandwsReqDeleteMarketOrder {
  /** Код операции */
  opcode?: "delete:market";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface CommandwsReqDeleteLimitOrder {
  /** Код операции */
  opcode?: "delete:limit";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface CommandwsReqDeleteStopOrder {
  /** Код операции */
  opcode?: "delete:stop";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface CommandwsReqDeleteStopLimitOrder {
  /** Код операции */
  opcode?: "delete:stopLimit";
  /** Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно. */
  guid?: GuidCws;
  /** Уникальный идентификатор заявки */
  orderId?: OrderId;
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange?: Exchange;
  user?: {
    /** Идентификатор клиентского портфеля */
    portfolio?: Portfolio;
  };
  /** Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки. */
  checkDuplicates?: CheckDuplicates;
}

export interface RefreshCreateParams {
  /** Refresh token, получаемый в кабинете разработчика */
  token: string;
}

export interface DevGetAllOrdersParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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

export interface DevGetAllStopOrdersParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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
   * Флаг отображения заявок с РЕПО
   * @example false
   */
  withRepo?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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

export interface FortsriskParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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

export interface DevGetAllPositionsByLoginV2Params {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
  /**
   * Исключить из ответа все денежные инструменты
   * @example false
   */
  withoutCurrency?: boolean;
  /**
   * Логин торгового аккаунта
   * @example "P039004"
   */
  login: string;
}

export interface TradeStatsParams {
  /**
   * Начиная с какой даты отдавать историю сделок
   * @format date
   * @example "2021-10-13"
   */
  dateFrom?: string;
  /**
   * Тикер\код инструмента, ISIN для облигаций
   * @example "SBER"
   */
  ticker?: string;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   * @example "buy"
   */
  side?: "buy" | "sell";
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
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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

export interface TradeStatsV2Params {
  /**
   * Начиная с какой даты отдавать историю сделок
   * @format date
   * @example "2021-10-13"
   */
  dateFrom?: string;
  /**
   * Тикер\код инструмента, ISIN для облигаций
   * @example "SBER"
   */
  ticker?: string;
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
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   * @example "buy"
   */
  side?: "buy" | "sell";
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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

export interface TradeStatsBySymbolV2Params {
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
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   * @example "buy"
   */
  side?: "buy" | "sell";
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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
   * @example "SBER"
   */
  query?: string;
  /**
   * Ограничение на количество выдаваемых результатов поиска
   * @format int32
   * @default 25
   * @example 100
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
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   * @example "TQBR"
   */
  instrumentGroup?: string;
  /**
   * Флаг выгрузки инструментов для всех режимов торгов, включая отличающиеся от установленного для инструмента значения параметра `primary_board`
   * @example false
   */
  includeNonBaseBoards?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
}

export interface DevSecuritiesSearchExchangeParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
  /**
   * Рынок:
   *   * `FORTS` - Срочный рынок Московской биржи
   *   * `FOND` - Фондовый рынок Московской биржи
   *   * `CURR` - Валютный рынок Московской биржи
   *   * `SPBX` - Рынок Санкт-Петербургской биржи
   * @example "FOND"
   */
  market?: "FORTS" | "FOND" | "CURR" | "SPBX";
  /**
   * Флаг загрузки устаревших инструментов
   * @example false
   */
  includeOld?: boolean;
  /**
   * Ограничение на количество выдаваемых результатов поиска
   * @format int32
   * @example 3
   */
  limit?: number;
  /**
   * Флаг выгрузки инструментов для всех режимов торгов, включая отличающиеся от установленного для инструмента значения параметра `primary_board`
   * @example false
   */
  includeNonBaseBoards?: boolean;
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
}

export interface DevSecuritiesSearchExchangeCodeParams {
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   * @example "TQBR"
   */
  instrumentGroup?: string;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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

export interface DevSecuritiesSearchAllTradesParams {
  /**
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   * @example "TQBR"
   */
  instrumentGroup?: string;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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
   * Нижняя граница объёма сделки в лотах
   * @format int32
   * @example 10
   */
  qtyFrom?: number;
  /**
   * Верхняя граница объёма сделки в лотах
   * @format int32
   * @example 100
   */
  qtyTo?: number;
  /**
   * Нижняя граница цены, по которой была совершена сделка
   * @format decimal
   * @example 178.2
   */
  priceFrom?: number;
  /**
   * Верхняя граница цены, по которой была совершена сделка
   * @format decimal
   * @example 179.1
   */
  priceTo?: number;
  /**
   * Направление сделки:
   *   * `buy` - Купля
   *   * `sell` - Продажа
   * @example "buy"
   */
  side?: "buy" | "sell";
  /**
   * Смещение начала выборки (для пагинации)
   * @format int32
   * @example 10
   */
  offset?: number;
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
   * Код режима торгов (Борд):
   * * Для Московской Биржи список кодов доступен в [таблице](https://fs.moex.com/files/3864/)
   * * Для Биржи СПБ всегда SPBX
   * @example "TQBR"
   */
  instrumentGroup?: string;
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
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
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
  format?: "Simple" | "Slim" | "Heavy";
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

export interface DevQuotesParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
  /**
   * Принимает несколько пар биржа-тикер. Пары отделены запятыми. Биржа и тикер разделены двоеточием
   * @example "MOEX:SBER,MOEX:GAZP,SPBX:AAPL"
   */
  symbols: string;
}

export interface DevOrderbookExchangSeccodeParams {
  /**
   * Глубина стакана. Стандартное и максимальное значение - 20 (20х20)
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
  format?: "Simple" | "Slim" | "Heavy";
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
   * Длительность таймфрейма. В качестве значения можно указать точное количество секунд или код таймфрейма:
   * * `15` — 15 секунд
   * * `60` — 60 секунд или 1 минута
   * * `3600` — 3600 секунд или 1 час
   * * `D` — сутки (соответствует значению 86400)
   * * `W` — неделя (соответствует значению 604800)
   * * `M` — месяц (соответствует значению 2592000)
   * * `Y` — год (соответствует значению 31536000)
   * @example "60"
   */
  tf: string;
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
  format?: "Simple" | "Slim" | "Heavy";
}

export interface DevTradingSessionStatusParams {
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
  /**
   * Биржа:
   *   * `MOEX` - Московская биржа
   *   * `SPBX` - СПБ Биржа
   */
  exchange: "MOEX" | "SPBX";
  /**
   * Рынок:
   *   * `FORTS` - Срочный рынок Московской биржи
   *   * `FOND` - Фондовый рынок Московской биржи
   *   * `CURR` - Валютный рынок Московской биржи
   *   * `SPBX` - Рынок Санкт-Петербургской биржи
   * @example "FOND"
   */
  market: "FORTS" | "FOND" | "CURR" | "SPBX";
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
   * Ответ в формате JSON. В виде отдельного параметра для обратной совместимости
   * @example false
   */
  jsonResponse?: boolean;
  /**
   * Формат возвращаемого сервером JSON
   * @example "Simple"
   */
  format?: "Simple" | "Slim" | "Heavy";
  /**
   * Идентификатор заявки
   * @format int64
   * @example 93713183
   */
  orderId: number;
}
