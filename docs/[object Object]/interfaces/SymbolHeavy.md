# Interface: SymbolHeavy

Defined in: [models/models.ts:1470](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1470)

## Properties

### accruedInterest?

> `optional` **accruedInterest**: `number` \| `null`

Defined in: [models/models.ts:1551](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1551)

Начислено

#### Format

decimal

#### Example

```ts
0
```

***

### ask?

> `optional` **ask**: `number`

Defined in: [models/models.ts:1497](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1497)

Аск

#### Format

decimal

#### Example

```ts
303.65
```

***

### bid?

> `optional` **bid**: `number`

Defined in: [models/models.ts:1503](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1503)

Бид

#### Format

decimal

#### Example

```ts
303.59
```

***

### change?

> `optional` **change**: `number` \| `null`

Defined in: [models/models.ts:1527](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1527)

Разность цены и цены предыдущего закрытия

#### Format

decimal

#### Example

```ts
-0.11
```

***

### changePercent?

> `optional` **changePercent**: `number` \| `null`

Defined in: [models/models.ts:1533](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1533)

Относительное изменение цены

#### Format

decimal

#### Example

```ts
-0.04
```

***

### currency?

> `optional` **currency**: `string` \| `null`

Defined in: [models/models.ts:1491](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1491)

Валюта расчетов

#### Example

```ts
"RUB"
```

***

### description?

> `optional` **description**: `string`

Defined in: [models/models.ts:1486](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1486)

Короткое описание на русском языке

#### Example

```ts
"Сбербанк России ПАО ао"
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:1481](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1481)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### faceValue?

> `optional` **faceValue**: `number`

Defined in: [models/models.ts:1586](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1586)

Номинальная стоимость

#### Format

decimal

#### Example

```ts
3
```

***

### highPrice?

> `optional` **highPrice**: `number`

Defined in: [models/models.ts:1539](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1539)

Максимальная цена

#### Format

decimal

#### Example

```ts
305
```

***

### lastPrice?

> `optional` **lastPrice**: `number`

Defined in: [models/models.ts:1515](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1515)

Последняя цена

#### Format

decimal

#### Example

```ts
303.59
```

***

### lastPriceTimestamp?

> `optional` **lastPriceTimestamp**: `number`

Defined in: [models/models.ts:1521](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1521)

Время последней цены (UTC)

#### Format

int64

#### Example

```ts
1620221538
```

***

### lotSize?

> `optional` **lotSize**: `number`

Defined in: [models/models.ts:1575](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1575)

Размер лота

#### Format

decimal

#### Example

```ts
10
```

***

### lotValue?

> `optional` **lotValue**: `number`

Defined in: [models/models.ts:1580](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1580)

#### Format

decimal

#### Example

```ts
3035.9
```

***

### lowPrice?

> `optional` **lowPrice**: `number`

Defined in: [models/models.ts:1545](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1545)

Минимальная цена

#### Format

decimal

#### Example

```ts
302.71
```

***

### openPrice?

> `optional` **openPrice**: `number`

Defined in: [models/models.ts:1563](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1563)

Цена открытия

#### Format

decimal

#### Example

```ts
304.01
```

***

### prevClosePrice?

> `optional` **prevClosePrice**: `number`

Defined in: [models/models.ts:1509](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1509)

Цена предыдущего закрытия

#### Format

decimal

#### Example

```ts
303.7
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:1475](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1475)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### type?

> `optional` **type**: `string` \| `null`

Defined in: [models/models.ts:1588](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1588)

#### Example

```ts
"CS"
```

***

### volume?

> `optional` **volume**: `number`

Defined in: [models/models.ts:1557](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1557)

Объём

#### Format

decimal

#### Example

```ts
38767080
```

***

### yield?

> `optional` **yield**: `number` \| `null`

Defined in: [models/models.ts:1569](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1569)

Доходность, рассчитанная по цене сделки

#### Format

int32

#### Example

```ts
null
```
