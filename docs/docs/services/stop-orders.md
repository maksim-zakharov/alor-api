# StopOrders (Стоп-заявки)

Доступ: `api.stoporders`

Сервис стоп- и стоп-лимитных заявок (REST).

## Методы

| Метод | Описание |
|-------|----------|
| `sendStopOrder(body)` | Создать стоп-заявку (стоп-маркет). |
| `sendStopLimitOrder(body)` | Создать стоп-лимитную заявку. |
| `updateStopOrder(body)` | Изменить стоп-заявку (в body передаётся `orderId`). |
| `updateStopLimitOrder(body)` | Изменить стоп-лимитную заявку. |
| `cancelOrder(params)` | Снять стоп-заявку по `orderId`. |

В теле указываются портфель, биржа, тикер, количество, условия срабатывания (стоп-цена и т.д.). Типы запросов см. в [API Reference](/docs/api).

## Пример

```typescript
await api.stoporders.sendStopOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  symbol: 'SBER',
  side: 'sell',
  quantity: 10,
  triggerPrice: 240,
  type: 'stop',
  // ... остальные поля
});
```
