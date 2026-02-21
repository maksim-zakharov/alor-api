# Interface: Stoporder

Defined in: [models/models.ts:3388](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3388)

## Properties

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:3410](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3410)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:3443](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3443)

Время действия заявки (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:3405](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3405)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:3466](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3466)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### filledQtyBatch?

> `optional` **filledQtyBatch**: `number`

Defined in: [models/models.ts:3455](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3455)

Количество исполненных

#### Format

decimal

#### Example

```ts
1
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:3394](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3394)

Уникальный идентификатор стоп-заявки

#### Format

decimal

#### Example

```ts
347498
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:3461](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3461)

Цена(Лимит)

#### Format

decimal

#### Example

```ts
208.6
```

***

### qty?

> `optional` **qty**: `number`

Defined in: [models/models.ts:3449](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3449)

Количество

#### Format

decimal

#### Example

```ts
1
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:3429](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3429)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### status?

> `optional` **status**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3437](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3437)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### stopPrice?

> `optional` **stopPrice**: `number`

Defined in: [models/models.ts:3423](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3423)

Условная цена

#### Format

decimal

#### Example

```ts
215
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:3399](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3399)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### type?

> `optional` **type**: `"stop"` \| `"stoplimit"`

Defined in: [models/models.ts:3417](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3417)

Тип заявки:
  * `stop` - Стоп-заявка
  * `stoplimit` - Стоп-лимитная заявка

#### Example

```ts
"stop"
```
