# Interface: Order

Defined in: [models/models.ts:3067](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3067)

## Properties

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:3082](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3082)

Пара биржа-Тикер

#### Example

```ts
"MOEX:SBER"
```

***

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:3093](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3093)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:3126](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3126)

Время завершения (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:3088](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3088)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:3173](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3173)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### filled?

> `optional` **filled**: `number`

Defined in: [models/models.ts:3162](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3162)

Количество исполненных (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### filledQtyBatch?

> `optional` **filledQtyBatch**: `number`

Defined in: [models/models.ts:3156](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3156)

Количество исполненных (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### filledQtyUnits?

> `optional` **filledQtyUnits**: `number`

Defined in: [models/models.ts:3150](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3150)

Количество исполненных (штуки)

#### Format

decimal

#### Example

```ts
1
```

***

### id?

> `optional` **id**: `string`

Defined in: [models/models.ts:3072](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3072)

Уникальный идентификатор заявки

#### Example

```ts
"18995978560"
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:3168](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3168)

Цена

#### Format

decimal

#### Example

```ts
208.6
```

***

### qty?

> `optional` **qty**: `number`

Defined in: [models/models.ts:3144](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3144)

Количество (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### qtyBatch?

> `optional` **qtyBatch**: `number`

Defined in: [models/models.ts:3138](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3138)

Количество (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### qtyUnits?

> `optional` **qtyUnits**: `number`

Defined in: [models/models.ts:3132](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3132)

Количество (штуки)

#### Format

int32

#### Example

```ts
1
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:3106](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3106)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### status?

> `optional` **status**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3114](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3114)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:3077](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3077)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### transTime?

> `optional` **transTime**: `string`

Defined in: [models/models.ts:3120](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3120)

Время выставления (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### type?

> `optional` **type**: `"limit"` \| `"market"`

Defined in: [models/models.ts:3100](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3100)

Тип заявки:
  * `limit` - Лимитная заявка
  * `market` - Рыночная заявка

#### Example

```ts
"market"
```

***

### volume?

> `optional` **volume**: `number` \| `null`

Defined in: [models/models.ts:3179](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3179)

Объем, для рыночных заявок - null

#### Format

decimal

#### Example

```ts
2086.3
```
