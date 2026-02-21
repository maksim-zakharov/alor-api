# StopOrders (Стоп-заявки)

Доступ: `api.stoporders`

Сервис стоп- и стоп-лимитных заявок (REST). Типы: [`BodyrequestOrdersActionsStopMarketTVWarp`](/docs/api/interfaces/BodyrequestOrdersActionsStopMarketTVWarp), [`BodyrequestOrdersActionsStopLimitTVWarp`](/docs/api/interfaces/BodyrequestOrdersActionsStopLimitTVWarp), [`CommandwsReqUpdateStopOrder`](/docs/api/interfaces/CommandwsReqUpdateStopOrder), [`CommandwsReqUpdateStopLimitOrder`](/docs/api/interfaces/CommandwsReqUpdateStopLimitOrder), [`CommandApiV2ClientOrdersDeleteParams`](/docs/api/interfaces/CommandApiV2ClientOrdersDeleteParams).

---

## sendStopOrder

Создаёт стоп-заявку (стоп-маркет): при достижении триггерной цены заявка исполняется по рынку.

**Параметры:** объект [`BodyrequestOrdersActionsStopMarketTVWarp`](/docs/api/interfaces/BodyrequestOrdersActionsStopMarketTVWarp).

Обязательные/типичные поля: `portfolio`, `exchange`, `symbol`, `side`, `quantity`, `triggerPrice`, тип заявки и др. (см. модель).

**Возвращает:** `Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI>`

**Пример:**

```typescript
const result = await api.stoporders.sendStopOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  symbol: 'SBER',
  side: 'sell',
  quantity: 10,
  triggerPrice: 240,
  type: 'stop',
  // ... остальные поля по модели
});
```

---

## sendStopLimitOrder

Создаёт стоп-лимитную заявку: при срабатывании по триггерной цене выставляется лимитная заявка с заданной ценой.

**Параметры:** объект [`BodyrequestOrdersActionsStopLimitTVWarp`](/docs/api/interfaces/BodyrequestOrdersActionsStopLimitTVWarp).

Дополнительно к стоп-полям указывается `price` для лимитной части.

**Возвращает:** `Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI>`

**Пример:**

```typescript
await api.stoporders.sendStopLimitOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  symbol: 'SBER',
  side: 'sell',
  quantity: 10,
  triggerPrice: 238,
  price: 237.5,
  type: 'stopLimit',
});
```

---

## updateStopOrder

Изменяет стоп-заявку.

**Параметры:** объект [`CommandwsReqUpdateStopOrder`](/docs/api/interfaces/CommandwsReqUpdateStopOrder). В теле обязательно поле **`orderId`** — идентификатор стоп-заявки, плюс поля, которые нужно изменить.

**Возвращает:** `Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI>`

**Пример:**

```typescript
await api.stoporders.updateStopOrder({
  orderId: '12345678',
  portfolio: 'D12345',
  exchange: 'MOEX',
  triggerPrice: 235,
  quantity: 15,
  // ...
});
```

---

## updateStopLimitOrder

Изменяет стоп-лимитную заявку.

**Параметры:** объект [`CommandwsReqUpdateStopLimitOrder`](/docs/api/interfaces/CommandwsReqUpdateStopLimitOrder) с полем **`orderId`** и новыми значениями полей.

**Возвращает:** `Promise<OrdersActionsLimitMarket | OrdersActions400CommandAPI>`

**Пример:**

```typescript
await api.stoporders.updateStopLimitOrder({
  orderId: '12345678',
  portfolio: 'D12345',
  exchange: 'MOEX',
  triggerPrice: 236,
  price: 235,
  quantity: 20,
});
```

---

## cancelOrder

Снимает стоп- или стоп-лимитную заявку.

**Параметры:** объект [`CommandApiV2ClientOrdersDeleteParams`](/docs/api/interfaces/CommandApiV2ClientOrdersDeleteParams): `portfolio`, `exchange`, `orderId`, **`stop: true`** (для стоп-заявок).

**Возвращает:** `Promise<string>`

**Пример:**

```typescript
await api.stoporders.cancelOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  orderId: '12345678',
  stop: true,
});
```
