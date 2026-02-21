# OrdersWss (Заявки по WebSocket)

Доступ: `api.ordersWss`

Сервис выставления и управления заявками через WebSocket (низкая задержка по сравнению с REST).

## Авторизация

| Метод | Описание |
|-------|----------|
| `authorize(req, dataHandler)` | Авторизация в потоке заявок (передать токен/параметры в `req`). |

## Создание заявок

| Метод | Описание |
|-------|----------|
| `sendMarketOrder(req, dataHandler)` | Рыночная заявка. |
| `sendLimitOrder(req, dataHandler)` | Лимитная заявка. |
| `sendStopOrder(req, dataHandler)` | Стоп-заявка. |
| `sendStopLimitOrder(req, dataHandler)` | Стоп-лимитная заявка. |

## Изменение заявок

| Метод | Описание |
|-------|----------|
| `updateMarketOrder(req, dataHandler)` | Изменить рыночную. |
| `updateLimitOrder(req, dataHandler)` | Изменить лимитную. |
| `updateStopOrder(req, dataHandler)` | Изменить стоп. |
| `updateStopLimitOrder(req, dataHandler)` | Изменить стоп-лимитную. |

## Снятие заявок

| Метод | Описание |
|-------|----------|
| `cancelMarketOrder(req, dataHandler)` | Снять рыночную. |
| `cancelLimitOrder(req, dataHandler)` | Снять лимитную. |
| `cancelStopOrder(req, dataHandler)` | Снять стоп. |
| `cancelStopLimitOrder(req, dataHandler)` | Снять стоп-лимитную. |

Результат операции приходит в `dataHandler`. Типы запросов и ответов — в [API Reference](/docs/api).

## Пример

```typescript
api.ordersWss.authorize({ token: api.accessToken }, (res) => console.log('Authorized', res));

const sub = api.ordersWss.sendLimitOrder(
  { portfolio: 'D12345', exchange: 'MOEX', symbol: 'SBER', side: 'buy', quantity: 10, price: 250 },
  (res) => console.log('Order result', res)
);
```
