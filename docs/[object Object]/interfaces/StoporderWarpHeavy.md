# Interface: StoporderWarpHeavy

Defined in: [models/models.ts:3905](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3905)

## Properties

### avgPrice?

> `optional` **avgPrice**: `number`

Defined in: [models/models.ts:4015](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4015)

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

Defined in: [models/models.ts:3927](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3927)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### condition?

> `optional` **condition**: [`Condition`](../enumerations/Condition.md)

Defined in: [models/models.ts:3959](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3959)

Условие срабатывания стоп/стоп-лимитной заявки:
  * `More` - Цена срабатывания больше текущей цены
  * `Less` - Цена срабатывания меньше текущей цены
  * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
  * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене

***

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:3979](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3979)

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

Defined in: [models/models.ts:3938](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3938)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### exchangeOrderId?

> `optional` **exchangeOrderId**: `number`

Defined in: [models/models.ts:3917](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3917)

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

Defined in: [models/models.ts:4026](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4026)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### filledQtyBatch?

> `optional` **filledQtyBatch**: `number`

Defined in: [models/models.ts:4003](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4003)

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

Defined in: [models/models.ts:3997](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3997)

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

Defined in: [models/models.ts:3911](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3911)

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

Defined in: [models/models.ts:3932](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3932)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:4009](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4009)

Цена(Лимит)

#### Format

decimal

#### Example

```ts
208.6
```

***

### qtyBatch?

> `optional` **qtyBatch**: `number`

Defined in: [models/models.ts:3991](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3991)

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

Defined in: [models/models.ts:3985](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3985)

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

Defined in: [models/models.ts:3951](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3951)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### status?

> `optional` **status**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3967](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3967)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### stopPrice?

> `optional` **stopPrice**: `number`

Defined in: [models/models.ts:4021](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4021)

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

Defined in: [models/models.ts:3922](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3922)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### transTime?

> `optional` **transTime**: `string`

Defined in: [models/models.ts:3973](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3973)

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

Defined in: [models/models.ts:3945](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3945)

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

Defined in: [models/models.ts:4032](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4032)

Объем, для рыночных заявок - null

#### Format

decimal

#### Example

```ts
2086.3
```
