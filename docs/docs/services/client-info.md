# ClientInfo (Клиентская информация)

Доступ: `api.clientInfo`

Сервис для работы с данными клиента: счета, портфели, заявки, позиции, сделки, стоп-заявки, операции и справочники.

## Торговые данные (биржевое API)

| Метод | Описание |
|-------|----------|
| `getOrders(params)` | Список всех заявок по счёту и бирже. |
| `getOrderById(params)` | Одна заявка по `orderId`. |
| `getPositions(params)` | Позиции по счёту. |
| `getPositionBySymbol(params)` | Позиция по инструменту. |
| `getSummary(params)` | Сводка по портфелю. |
| `getTrades(params)` | Сделки по счёту. |
| `getTradesBySymbol(params)` | Сделки по инструменту. |
| `getHistoryTrades(params)` | История сделок. |
| `getHistoryTradesBySymbol(params)` | История сделок по тикеру. |
| `getStopOrders(params)` | Список стоп-заявок. |
| `getStopOrderByOrderId(params)` | Одна стоп-заявка по `orderId`. |
| `getRisk(params)` | Риски по счёту. |
| `getFortsRisk(params)` | Риски срочного рынка (FORTS). |

## ЛК и операции

| Метод | Описание |
|-------|----------|
| `getUserInfo()` | Данные пользователя (договоры, счета). Требует авторизацию. |
| `getOperations(clientId, params)` | Операции по клиенту. |
| `getOperation(id)` | Операция по идентификатору. |
| `createOperation(agreementNumber, data)` | Создание операции на вывод. |
| `getOperationCode(data)` | Отправка СМС-кода для операции. |
| `signOperation(data)` | Подтверждение операции по коду. |

## Справочники и отчёты

| Метод | Описание |
|-------|----------|
| `getCategories()` | Категории риска. |
| `getProfileCategories(clientId)` | Категории риска по профилю. |
| `getMoneyMoves(clientId, params)` | Движение денежных средств. |
| `getAllEventsCalendar(params)` | Календарь корпоративных событий. |
| `getEquityDynamics(params)` | Динамика баланса портфеля. |
| `getPublicOffering(params)` | Список IPO. |
| `getPublicOfferingById(params)` | IPO по идентификатору. |

## Пример

```typescript
const orders = await api.clientInfo.getOrders({ portfolio: 'D12345', exchange: 'MOEX' });
const summary = await api.clientInfo.getSummary({ portfolio: 'D12345', exchange: 'MOEX' });
const user = await api.clientInfo.getUserInfo();
```
