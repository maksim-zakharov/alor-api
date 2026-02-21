# OrdersWss (Заявки по WebSocket)

Доступ: `api.ordersWss`

Сервис выставления и управления заявками через WebSocket (низкая задержка по сравнению с REST). Каждый метод принимает объект запроса `req` и колбэк `dataHandler`; возвращает объект подписки с `unsubscribe()`. Токен и `opcode` подставляются автоматически. Типы запросов/ответов — в [API Reference](/docs/api): `CommandwsReqCreateMarketOrder`, `CommandwsResHandledSuccessfully`, `CommandwsReqAuthorize` и др.

---

## authorize

Авторизация в потоке заявок. Вызывается перед отправкой заявок по WebSocket.

**Параметры:**

| Параметр     | Тип      | Описание |
|--------------|----------|----------|
| `req`        | объект   | Минимум: `token` (access-токен). Тип: [`CommandwsReqAuthorize`](/docs/api/interfaces/CommandwsReqAuthorize). |
| `dataHandler`| функция  | Колбэк `(response: CommandwsResAuthorize) => void`. |

**Возвращает:** объект подписки.

```typescript
api.ordersWss.authorize(
  { token: api.accessToken },
  (res) => console.log('Авторизован:', res)
);
```

---

## sendMarketOrder

Создание рыночной заявки по WebSocket.

**Параметры:** `req` — [`CommandwsReqCreateMarketOrder`](/docs/api/interfaces/CommandwsReqCreateMarketOrder) (портфель, биржа, тикер, сторона, количество и т.д.); `dataHandler(response)` — [`CommandwsResHandledSuccessfully`](/docs/api/interfaces/CommandwsResHandledSuccessfully) или ошибка.

**Пример:**

```typescript
api.ordersWss.sendMarketOrder(
  {
    portfolio: 'D12345',
    exchange: 'MOEX',
    symbol: 'SBER',
    side: 'buy',
    quantity: 10,
    type: 'market',
  },
  (res) => console.log('Результат заявки:', res)
);
```

---

## sendLimitOrder

Создание лимитной заявки по WebSocket.

**Параметры:** `req` — [`CommandwsReqCreateLimitOrder`](/docs/api/interfaces/CommandwsReqCreateLimitOrder); `dataHandler(response)` — результат исполнения/ошибка.

---

## sendStopOrder / sendStopLimitOrder

Создание стоп- и стоп-лимитной заявки по WebSocket.

**Параметры:** `req` — [`CommandwsReqCreateStopOrder`](/docs/api/interfaces/CommandwsReqCreateStopOrder) / [`CommandwsReqCreateStopLimitOrder`](/docs/api/interfaces/CommandwsReqCreateStopLimitOrder); `dataHandler(response)` — результат.

---

## updateMarketOrder / updateLimitOrder

Изменение рыночной или лимитной заявки.

**Параметры:** `req` — [`CommandwsReqUpdateMarketOrder`](/docs/api/interfaces/CommandwsReqUpdateMarketOrder) / [`CommandwsReqUpdateLimitOrder`](/docs/api/interfaces/CommandwsReqUpdateLimitOrder) (в т.ч. идентификатор заявки и новые поля); `dataHandler(response)` — результат.

---

## updateStopOrder / updateStopLimitOrder

Изменение стоп- или стоп-лимитной заявки.

**Параметры:** `req` — [`CommandwsReqUpdateStopOrder`](/docs/api/interfaces/CommandwsReqUpdateStopOrder) / [`CommandwsReqUpdateStopLimitOrder`](/docs/api/interfaces/CommandwsReqUpdateStopLimitOrder); `dataHandler(response)` — результат.

---

## cancelMarketOrder / cancelLimitOrder

Снятие рыночной или лимитной заявки.

**Параметры:** `req` — [`CommandwsReqDeleteMarketOrder`](/docs/api/interfaces/CommandwsReqDeleteMarketOrder) / [`CommandwsReqDeleteLimitOrder`](/docs/api/interfaces/CommandwsReqDeleteLimitOrder) (портфель, биржа, идентификатор заявки и т.д.); `dataHandler(response)` — результат.

---

## cancelStopOrder / cancelStopLimitOrder

Снятие стоп- или стоп-лимитной заявки.

**Параметры:** `req` — [`CommandwsReqDeleteStopOrder`](/docs/api/interfaces/CommandwsReqDeleteStopOrder) / [`CommandwsReqDeleteStopLimitOrder`](/docs/api/interfaces/CommandwsReqDeleteStopLimitOrder); `dataHandler(response)` — результат.

**Пример:**

```typescript
const sub = api.ordersWss.cancelLimitOrder(
  { portfolio: 'D12345', exchange: 'MOEX', orderId: '12345678' },
  (res) => {
    console.log('Заявка снята:', res);
    sub.unsubscribe();
  }
);
```
