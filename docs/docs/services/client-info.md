# ClientInfo (Клиентская информация)

Доступ: `api.clientInfo`

Сервис для работы с данными клиента: заявки, позиции, сделки, стоп-заявки, портфель, операции, справочники и IPO. Параметры запросов и типы ответов описаны в [API Reference](/docs/api) (интерфейсы `DevGetAllOrdersParams`, `Orders`, `Positions`, `Summary`, `UserInfoResponse` и др.).

---

## Торговые данные (биржевое API)

Методы ниже работают с портфелем `portfolio` и биржей `exchange` (`MOEX` | `SPBX`). Во многих запросах можно передать `format?: "Simple" | "Slim" | "Heavy"` для объёма данных в ответе.

### getOrders

Список всех заявок по счёту.

**Параметры:** объект с полями `portfolio`, `exchange`, опционально `format`. Тип: [`DevGetAllOrdersParams`](/docs/api/interfaces/DevGetAllOrdersParams).

**Возвращает:** `Promise<Orders | OrdersSlim | OrdersHeavy>`

```typescript
const orders = await api.clientInfo.getOrders({ portfolio: 'D12345', exchange: 'MOEX' });
```

### getOrderById

Одна заявка по идентификатору.

**Параметры:** `DevGetOneOrderParams` — `portfolio`, `exchange`, `orderId`.

**Возвращает:** `Promise<Order | OrderSlim | OrderHeavy>`

### getPositions

Позиции по счёту.

**Параметры:** `DevGetAllPositionsParams` — `portfolio`, `exchange`, опционально `format`.

**Возвращает:** `Promise<Positions | PositionsSlim | PositionsHeavy>`

```typescript
const positions = await api.clientInfo.getPositions({ portfolio: 'D12345', exchange: 'MOEX' });
```

### getPositionBySymbol

Позиция по одному инструменту.

**Параметры:** `DevGetOnePositionParams` — `portfolio`, `exchange`, `symbol`.

**Возвращает:** `Promise<Position | PositionSlim | PositionHeavy>`

### getSummary

Сводка по портфелю (оценка, денежные средства и т.д.).

**Параметры:** `ExchangePortfolioSummaryParams` — `portfolio`, `exchange`, опционально `format`.

**Возвращает:** `Promise<Summary | SummarySlim | SummaryHeavy>`

```typescript
const summary = await api.clientInfo.getSummary({ portfolio: 'D12345', exchange: 'MOEX' });
```

### getTrades

Сделки по счёту.

**Параметры:** `DevGetAllTradesParams` — `portfolio`, `exchange`, опционально `format` и фильтры.

**Возвращает:** `Promise<Trades | TradesSlim | TradesHeavy>`

### getTradesBySymbol

Сделки по одному инструменту.

**Параметры:** `DevGetTickerTradesParams` — `portfolio`, `exchange`, `ticker`, опционально `format`.

**Возвращает:** `Promise<Trades | TradesSlim | TradesHeavy>`

### getHistoryTrades / getHistoryTradesBySymbol

История сделок (все или по тикеру). Параметры: `TradeStatsParams` / `TradeStatsBySymbolParams`. Возвращают массив сделок в выбранном формате.

### getStopOrders

Список стоп-заявок.

**Параметры:** `DevGetAllStopOrdersParams` — `portfolio`, `exchange`, опционально `format`.

**Возвращает:** `Promise<Stoporders | StopordersSlim | StopordersHeavy>`

### getStopOrderByOrderId

Одна стоп-заявка по `orderId`. Параметры: `DevGetOneStopOrderParams`. Возвращает `Stoporder | StoporderSlim | StoporderHeavy`.

### getRisk / getFortsRisk

Риски по счёту и риски срочного рынка (FORTS). Параметры: `RiskParams` / `FortsriskParams`. Возвращают `Risk` / `Fortsrisk` (или Slim/Heavy).

---

## ЛК и операции

### getUserInfo

Данные пользователя (договоры, счета, профиль). Требует авторизацию (Bearer в заголовках).

**Параметры:** нет.

**Возвращает:** `Promise<UserInfoResponse>`

```typescript
const user = await api.clientInfo.getUserInfo();
console.log(user.agreements, user.fullName);
```

### getOperations

Операции по клиенту.

**Параметры:** `clientId: number`, объект параметров (даты, тип и т.д.) — тип `GetOperationsParams`.

**Возвращает:** `Promise<GetOperationsResponse>`

### getOperation

Операция по идентификатору.

**Параметры:** `id: string`.

**Возвращает:** `Promise<any>`

### createOperation

Создание операции на вывод средств. Параметры: `agreementNumber: string`, объект с полями `recipient`, `account`, `currency`, `amount`, `bic`, `bankName` и др.

**Возвращает:** объект с `operationId`, `success` и т.д.

### getOperationCode

Отправка СМС-кода для подтверждения операции. Параметры: `{ agreementNumber, operationId }`.

### signOperation

Подтверждение операции по коду. Параметры: `{ agreementNumber, operationId, confirmationCode }`.

---

## Справочники и отчёты

### getCategories

Категории риска. **Параметры:** нет. **Возвращает:** `Promise<Category[]>`.

### getProfileCategories

Категории риска по профилю. **Параметры:** `clientId: number`. **Возвращает:** `Promise<ProfileCategoriesResponse>`.

### getMoneyMoves

Движение денежных средств. **Параметры:** `clientId: number`, `MoneyMovesParams`. **Возвращает:** `Promise<MoneyMove[]>`.

### getAllEventsCalendar

Календарь корпоративных событий. **Параметры:** `AllEventsCalendarParams`. **Возвращает:** `Promise<AllEventsCalendarResponse>`.

### getEquityDynamics

Динамика баланса портфеля за период. **Параметры:** `EquityDynamicsRequest` (`startDate`, `endDate`, `portfolio`, `agreementNumber`). **Возвращает:** `Promise<EquityDynamicsResponse>`.

### getPublicOffering / getPublicOfferingById

Список IPO и детали по одному IPO. Параметры: `PublicOfferingRequest` (`category: "current" | "past"`) и `PublicOfferingByIdRequest` (`type`, `id`). Возвращают `PublicOfferingResponse` и `PublicOfferingByIdResponse`.
