# Interface: StoporderHeavy

Defined in: [models/models.ts:3550](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3550)

## Properties

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:3572](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3572)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:3605](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3605)

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

Defined in: [models/models.ts:3567](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3567)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:3628](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3628)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### filledQtyBatch?

> `optional` **filledQtyBatch**: `number`

Defined in: [models/models.ts:3617](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3617)

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

Defined in: [models/models.ts:3556](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3556)

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

Defined in: [models/models.ts:3623](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3623)

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

Defined in: [models/models.ts:3611](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3611)

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

Defined in: [models/models.ts:3591](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3591)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### status?

> `optional` **status**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3599](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3599)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### stopPrice?

> `optional` **stopPrice**: `number`

Defined in: [models/models.ts:3585](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3585)

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

Defined in: [models/models.ts:3561](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3561)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### type?

> `optional` **type**: `"stop"` \| `"stoplimit"`

Defined in: [models/models.ts:3579](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L3579)

Тип заявки:
  * `stop` - Стоп-заявка
  * `stoplimit` - Стоп-лимитная заявка

#### Example

```ts
"stop"
```
