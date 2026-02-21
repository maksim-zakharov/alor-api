# Interface: EstimateOrderViewModel

Defined in: [models/models.ts:5862](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5862)

Модель заявки для оценки стоимости и количества в лотах

## Properties

### board?

> `optional` **board**: `string` \| `null`

Defined in: [models/models.ts:5880](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5880)

Режим торгов (борд)

***

### exchange?

> `optional` **exchange**: `string`

Defined in: [models/models.ts:5868](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5868)

Биржа

***

### includeLimitOrders?

> `optional` **includeLimitOrders**: `boolean`

Defined in: [models/models.ts:5885](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5885)

Учитывать ли лимитные заявки при расчете

#### Default

```ts
false
```

***

### lotQuantity?

> `optional` **lotQuantity**: `number`

Defined in: [models/models.ts:5878](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5878)

Количество лотов

#### Format

int64

***

### portfolio?

> `optional` **portfolio**: `string`

Defined in: [models/models.ts:5864](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5864)

Портфель клиента

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:5873](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5873)

Цена

#### Format

decimal

***

### ticker?

> `optional` **ticker**: `string`

Defined in: [models/models.ts:5866](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5866)

Инструмент
