# Subscriptions (Подписки WebSocket)

Доступ: `api.subscriptions`

Сервис подписок на рыночные и портфельные данные по WebSocket. Каждый метод возвращает объект подписки; данные приходят в переданный `dataHandler`.

## Методы (подписки)

| Метод | Описание |
|-------|----------|
| `orderBook(req, dataHandler)` | Биржевой стакан. |
| `candles(req, dataHandler)` | Свечи (история цен). |
| `quotes(req, dataHandler)` | Котировки. |
| `alltrades(req, dataHandler)` | Все сделки. |
| `positions(req, dataHandler)` | Позиции по инструментам и деньгам. |
| `summary(req, dataHandler)` | Сводка по портфелю. |
| `risks(req, dataHandler)` | Портфельные риски. |
| `spectraRisks(req, dataHandler)` | Риски срочного рынка (FORTS). |
| `trades(req, dataHandler)` | Сделки. |
| `orders(req, dataHandler)` | Заявки. |
| `stoporders(req, dataHandler)` | Стоп-заявки. |
| `instruments(req, dataHandler)` | Инструменты (обновления). |

В `req` передаются параметры подписки (портфель, биржа, тикер и т.д.); токен подставляется автоматически.

## Пример

```typescript
const sub = api.subscriptions.orderBook(
  { exchange: 'MOEX', code: 'SBER', depth: 10 },
  (data) => console.log('Orderbook:', data)
);
// отписка когда не нужна
sub.unsubscribe();
```
