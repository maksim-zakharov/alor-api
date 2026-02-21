# Orders (Заявки)

Доступ: `api.orders`

Сервис выставления и изменения лимитных и рыночных заявок (REST).

## Методы

| Метод | Описание |
|-------|----------|
| `sendMarketOrder(body)` | Создать рыночную заявку. |
| `sendLimitOrder(body)` | Создать лимитную заявку. |
| `updateMarketOrder(body)` | Изменить рыночную заявку (по `id` в body). |
| `updateLimitOrder(body)` | Изменить лимитную заявку (по `id` в body). |
| `cancelOrder(params)` | Снять заявку по `orderId`. |
| `estimateOrder(params)` | Оценка одной заявки перед отправкой. |
| `estimateAllOrders(params)` | Оценка нескольких заявок. |

В теле заявок передаются: портфель, биржа, тикер, количество, сторона (buy/sell), для лимитных — цена и т.д. Подробности типов — в [API Reference](/docs/api).

## Пример

```typescript
const result = await api.orders.sendLimitOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  symbol: 'SBER',
  side: 'buy',
  quantity: 10,
  price: 250.5,
  type: 'limit',
});
```
