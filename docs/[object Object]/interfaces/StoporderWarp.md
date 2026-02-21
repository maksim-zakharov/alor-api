# Interface: StoporderWarp

Defined in: [models/models.ts:3631](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3631)

## Properties

### avg\_price?

> `optional` **avg\_price**: `number`

Defined in: [models/models.ts:3755](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3755)

Средняя цена

#### Format

decimal

#### Example

```ts
0
```

***

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:3653](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3653)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### condition?

> `optional` **condition**: [`Condition`](../enumerations/Condition.md)

Defined in: [models/models.ts:3685](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3685)

Условие срабатывания стоп/стоп-лимитной заявки:
  * `More` - Цена срабатывания больше текущей цены
  * `Less` - Цена срабатывания меньше текущей цены
  * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
  * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене

***

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:3705](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3705)

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

Defined in: [models/models.ts:3664](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3664)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### exchangeOrderId?

> `optional` **exchangeOrderId**: `number`

Defined in: [models/models.ts:3643](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3643)

Уникальный идентификатор стоп-заявки

#### Format

int64

#### Example

```ts
425242362
```

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:3766](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3766)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### ~~filled?~~

> `optional` **filled**: `number`

Defined in: [models/models.ts:3743](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3743)

Количество исполненных (штуки)

#### Deprecated

#### Format

decimal

#### Example

```ts
1
```

***

### filledQtyBatch?

> `optional` **filledQtyBatch**: `number`

Defined in: [models/models.ts:3736](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3736)

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

Defined in: [models/models.ts:3730](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3730)

Количество исполненных (штуки)

#### Format

decimal

#### Example

```ts
10
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:3637](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3637)

Уникальный идентификатор стоп-заявки

#### Format

int64

#### Example

```ts
347499
```

***

### portfolio?

> `optional` **portfolio**: `string`

Defined in: [models/models.ts:3658](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3658)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:3749](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3749)

Цена(Лимит)

#### Format

decimal

#### Example

```ts
208.6
```

***

### ~~qty?~~

> `optional` **qty**: `number`

Defined in: [models/models.ts:3724](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3724)

Количество (Лоты)

#### Deprecated

#### Format

decimal

#### Example

```ts
1
```

***

### qtyBatch?

> `optional` **qtyBatch**: `number`

Defined in: [models/models.ts:3717](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3717)

Количество (Лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### qtyUnits?

> `optional` **qtyUnits**: `number`

Defined in: [models/models.ts:3711](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3711)

Количество (Штуки)

#### Format

decimal

#### Example

```ts
10
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:3677](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3677)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### status?

> `optional` **status**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3693](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3693)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### stopPrice?

> `optional` **stopPrice**: `number`

Defined in: [models/models.ts:3761](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3761)

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

Defined in: [models/models.ts:3648](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3648)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### transTime?

> `optional` **transTime**: `string`

Defined in: [models/models.ts:3699](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3699)

Время выставления заявки (UTC)

#### Format

date-time

#### Example

```ts
"2020-05-16T23:59:59.9990000"
```

***

### type?

> `optional` **type**: `"stop"` \| `"stoplimit"`

Defined in: [models/models.ts:3671](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3671)

Тип заявки:
  * `stop` - Стоп-заявка
  * `stoplimit` - Стоп-лимитная заявка

#### Example

```ts
"stop"
```

***

### volume?

> `optional` **volume**: `number` \| `null`

Defined in: [models/models.ts:3772](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3772)

Объем, для рыночных заявок - null

#### Format

decimal

#### Example

```ts
2086.3
```
