# Subscriptions (Подписки WebSocket)

Доступ: `api.subscriptions`

Сервис подписок на рыночные и портфельные данные по WebSocket. Каждый метод принимает объект запроса `req` и колбэк `dataHandler`; возвращает объект подписки с методом `unsubscribe()` для отписки. Токен подставляется автоматически. Типы запросов и ответов — в [API Reference](/docs/api): `WsReqOrderBookGetAndSubscribe`, `WsResOrderBookGetAndSubscribe`, `WsReqBarsGetAndSubscribe`, `WsResBarsGetAndSubscribe` и др.

---

## orderBook

Подписка на биржевой стакан.

**Параметры:**

| Параметр     | Тип       | Описание |
|--------------|-----------|----------|
| `req`        | объект    | Поля без `opcode`: `exchange`, `code` (код инструмента), `depth` и др. Тип: [`WsReqOrderBookGetAndSubscribe`](/docs/api/type-aliases/WsReqOrderBookGetAndSubscribe). |
| `dataHandler`| функция  | Колбэк `(data: WsResOrderBookGetAndSubscribe["data"]) => void`. |

**Возвращает:** объект подписки с методом `unsubscribe()`.

```typescript
const sub = api.subscriptions.orderBook(
  { exchange: 'MOEX', code: 'SBER', depth: 10 },
  (data) => console.log('Стакан:', data)
);
// позже: sub.unsubscribe();
```

---

## candles

Подписка на свечи (история цен в реальном времени).

**Параметры:** `req` — [`WsReqBarsGetAndSubscribe`](/docs/api/type-aliases/WsReqBarsGetAndSubscribe) (`exchange`, `code`, `interval`, `from`, `to` и т.д.); `dataHandler(data)` — данные свечи.

**Возвращает:** объект подписки.

```typescript
api.subscriptions.candles(
  { exchange: 'MOEX', code: 'SBER', interval: 60, from: 0, to: Date.now() },
  (candle) => console.log('Свеча:', candle)
);
```

---

## quotes

Подписка на котировки.

**Параметры:** `req` — [`WsReqQuotesSubscribe`](/docs/api/type-aliases/WsReqQuotesSubscribe); `dataHandler(data)` — данные котировок.

---

## alltrades

Подписка на все сделки по инструменту.

**Параметры:** `req` — [`WsReqAllTradesGetAndSubscribe`](/docs/api/type-aliases/WsReqAllTradesGetAndSubscribe); `dataHandler(data)` — объект сделки [`Alltrade`](/docs/api/type-aliases/Alltrades).

---

## positions

Подписка на позиции по инструментам и деньгам.

**Параметры:** `req` — [`WsReqPositionsGetAndSubscribe`](/docs/api/type-aliases/WsReqPositionsGetAndSubscribe) (`portfolio`, `exchange` и др.); `dataHandler(data)` — данные позиций.

```typescript
api.subscriptions.positions(
  { portfolio: 'D12345', exchange: 'MOEX' },
  (data) => console.log('Позиции:', data)
);
```

---

## summary

Подписка на сводку по портфелю.

**Параметры:** `req` — [`WsReqSummariesGetAndSubscribeV2`](/docs/api/type-aliases/WsReqSummariesGetAndSubscribeV2); `dataHandler(data)` — сводка.

---

## risks

Подписка на портфельные риски.

**Параметры:** `req` — [`WsReqRisksGetAndSubscribe`](/docs/api/type-aliases/WsReqRisksGetAndSubscribe); `dataHandler(data)` — риски.

---

## spectraRisks

Подписка на риски срочного рынка (FORTS).

**Параметры:** `req` — [`WsReqSpectraRisksGetAndSubscribe`](/docs/api/type-aliases/WsReqSpectraRisksGetAndSubscribe); `dataHandler(data)` — данные рисков.

---

## trades

Подписка на сделки (свои).

**Параметры:** `req` — [`WsReqTradesGetAndSubscribe`](/docs/api/type-aliases/WsReqTradesGetAndSubscribe); `dataHandler(data)` — данные сделки.

---

## orders

Подписка на заявки (свои).

**Параметры:** `req` — [`WsReqOrdersGetAndSubscribe`](/docs/api/type-aliases/WsReqOrdersGetAndSubscribe); `dataHandler(data)` — данные заявки.

```typescript
api.subscriptions.orders(
  { portfolio: 'D12345', exchange: 'MOEX' },
  (order) => console.log('Заявка:', order)
);
```

---

## stoporders

Подписка на стоп-заявки.

**Параметры:** `req` — [`WsReqStopOrdersGetAndSubscribeV2`](/docs/api/type-aliases/WsReqStopOrdersGetAndSubscribeV2); `dataHandler(data)` — данные стоп-заявки (Slim/Heavy в зависимости от запроса).

---

## instruments

Подписка на обновления инструментов.

**Параметры:** `req` — [`WsReqInstrumentsGetAndSubscribeV2`](/docs/api/type-aliases/WsReqInstrumentsGetAndSubscribeV2); `dataHandler(data)` — объект инструмента [`Security`](/docs/api/interfaces/Security).
