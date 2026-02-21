# Orders (Заявки)

Доступ: `api.orders`

Сервис выставления и изменения лимитных и рыночных заявок по REST. Типы тел запросов и ответов описаны в [API Reference](/docs/api): интерфейсы `BodyrequestOrdersActionsMarketTV`, `BodyrequestOrdersActionsLimitTV`, `OrdersActionsLimitMarketCommandAPI`, `OrdersActions400CommandAPI`, `CommandApiV2ClientOrdersDeleteParams`, `EstimateOrderViewModel`, `EstimateOrderModel`.

---

## sendMarketOrder

Создаёт рыночную заявку (исполнение по текущей рыночной цене).

**Параметры:** один объект типа [`BodyrequestOrdersActionsMarketTV`](/docs/api/interfaces/BodyrequestOrdersActionsMarketTV).

Основные поля: `portfolio`, `exchange`, `symbol`, `side` (`"buy"` | `"sell"`), `quantity`, `type: "market"`. Опционально: `timeInForce`, `brokerRef` и др.

**Возвращает:** `Promise<OrdersActionsLimitMarketCommandAPI | OrdersActions400CommandAPI>` — данные заявки или ошибка (400).

**Пример:**

```typescript
const result = await api.orders.sendMarketOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  symbol: 'SBER',
  side: 'buy',
  quantity: 10,
  type: 'market',
});
if ('orderNumber' in result) {
  console.log('Заявка создана:', result.orderNumber);
} else {
  console.error('Ошибка:', result);
}
```

---

## sendLimitOrder

Создаёт лимитную заявку (исполнение по указанной цене или лучше).

**Параметры:** объект типа [`BodyrequestOrdersActionsLimitTV`](/docs/api/interfaces/BodyrequestOrdersActionsLimitTV).

Дополнительно к полям рыночной заявки: `price` — цена лимита.

**Возвращает:** `Promise<OrdersActionsLimitMarketCommandAPI | OrdersActions400CommandAPI>`

**Пример:**

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

---

## updateMarketOrder

Изменяет существующую рыночную заявку.

**Параметры:** объект типа [`BodyrequestOrdersActionsMarketTVput`](/docs/api/interfaces/BodyrequestOrdersActionsMarketTVput) с полем **`id`** — идентификатор заявки.

Можно изменить: `quantity`, `side` и др. (согласно модели).

**Возвращает:** `Promise<OrdersActionsLimitMarket>`

**Пример:**

```typescript
await api.orders.updateMarketOrder({
  id: 12345678,
  portfolio: 'D12345',
  exchange: 'MOEX',
  symbol: 'SBER',
  side: 'buy',
  quantity: 5,
  type: 'market',
});
```

---

## updateLimitOrder

Изменяет существующую лимитную заявку.

**Параметры:** объект типа [`BodyrequestOrdersActionsLimitTVput`](/docs/api/interfaces/BodyrequestOrdersActionsLimitTVput) с полем **`id`** — идентификатор заявки.

Можно изменить: `price`, `quantity`, `side` и др.

**Возвращает:** `Promise<OrdersActionsLimitMarket>`

**Пример:**

```typescript
await api.orders.updateLimitOrder({
  id: 12345678,
  portfolio: 'D12345',
  exchange: 'MOEX',
  symbol: 'SBER',
  side: 'buy',
  quantity: 15,
  price: 249,
  type: 'limit',
});
```

---

## cancelOrder

Снимает заявку с биржи.

**Параметры:** объект типа [`CommandApiV2ClientOrdersDeleteParams`](/docs/api/interfaces/CommandApiV2ClientOrdersDeleteParams).

| Параметр     | Тип       | Описание |
|--------------|-----------|----------|
| `portfolio`  | `string`  | Портфель, например `"D39004"`. |
| `exchange`   | `"MOEX"`  | Биржа.   |
| `orderId`    | `string`  | Идентификатор заявки. |
| `stop`       | `boolean` | `true` для стоп-заявки, `false` для обычной. |

**Возвращает:** `Promise<string>`

**Пример:**

```typescript
await api.orders.cancelOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  orderId: '12345678',
  stop: false,
});
```

---

## estimateOrder

Проводит оценку одной заявки перед отправкой (комиссия, возможность исполнения и т.д.).

**Параметры:** объект типа [`EstimateOrderViewModel`](/docs/api/interfaces/EstimateOrderViewModel): `portfolio`, `exchange`, `ticker`, `price`, `quantity`, `side` и др.

**Возвращает:** `Promise<EstimateOrderModel>` — результат оценки.

**Пример:**

```typescript
const estimate = await api.orders.estimateOrder({
  portfolio: 'D12345',
  exchange: 'MOEX',
  ticker: 'SBER',
  side: 'buy',
  quantity: 10,
  price: 250,
});
console.log('Оценка:', estimate);
```

---

## estimateAllOrders

Оценка нескольких заявок за один запрос.

**Параметры:** массив объектов [`EstimateOrderViewModel`](/docs/api/interfaces/EstimateOrderViewModel).

**Возвращает:** `Promise<EstimateOrderModel[]>`

**Пример:**

```typescript
const estimates = await api.orders.estimateAllOrders([
  { portfolio: 'D12345', exchange: 'MOEX', ticker: 'SBER', side: 'buy', quantity: 10, price: 250 },
  { portfolio: 'D12345', exchange: 'MOEX', ticker: 'GAZP', side: 'sell', quantity: 5, price: 140 },
]);
```
