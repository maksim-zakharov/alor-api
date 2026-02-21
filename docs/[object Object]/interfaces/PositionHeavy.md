# Interface: PositionHeavy

Defined in: [models/models.ts:2028](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2028)

## Properties

### avgPrice?

> `optional` **avgPrice**: `number`

Defined in: [models/models.ts:2062](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2062)

Средняя цена

#### Format

decimal

#### Example

```ts
16.6
```

***

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:2038](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2038)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### currentVolume?

> `optional` **currentVolume**: `number`

Defined in: [models/models.ts:2056](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2056)

Объём, рассчитанный по текущей цене

#### Format

decimal

#### Example

```ts
38798790
```

***

### dailyUnrealisedPl?

> `optional` **dailyUnrealisedPl**: `number`

Defined in: [models/models.ts:2151](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2151)

Нереализованная прибыль за день

#### Format

decimal

#### Example

```ts
2.8
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:2044](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2044)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### isCurrency?

> `optional` **isCurrency**: `boolean`

Defined in: [models/models.ts:2161](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2161)

True для валютных остатков (денег), false - для торговых инструментов

#### Example

```ts
false
```

***

### lotSize?

> `optional` **lotSize**: `number`

Defined in: [models/models.ts:2080](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2080)

Размер лота

#### Format

decimal

#### Example

```ts
1
```

***

### openQtyBatch?

> `optional` **openQtyBatch**: `number`

Defined in: [models/models.ts:2145](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2145)

Агрегированное количество на момент открытия (начала торгов) (лоты)

#### Format

decimal

#### Example

```ts
20
```

***

### openUnits?

> `optional` **openUnits**: `number`

Defined in: [models/models.ts:2074](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2074)

Количество открытых позиций на момент открытия (начала торгов)

#### Format

decimal

#### Example

```ts
30
```

***

### qtyBatch?

> `optional` **qtyBatch**: `number`

Defined in: [models/models.ts:2139](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2139)

Агрегированное количество TFuture

#### Format

decimal

#### Example

```ts
20
```

***

### qtyT0?

> `optional` **qtyT0**: `number`

Defined in: [models/models.ts:2091](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2091)

Агрегированное количество T0 (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyT0Batch?

> `optional` **qtyT0Batch**: `number`

Defined in: [models/models.ts:2115](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2115)

Агрегированное количество T0 (лоты)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyT1?

> `optional` **qtyT1**: `number`

Defined in: [models/models.ts:2097](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2097)

Агрегированное количество T1 (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyT1Batch?

> `optional` **qtyT1Batch**: `number`

Defined in: [models/models.ts:2121](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2121)

Агрегированное количество T1 (лоты)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyT2?

> `optional` **qtyT2**: `number`

Defined in: [models/models.ts:2103](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2103)

Агрегированное количество T2 (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyT2Batch?

> `optional` **qtyT2Batch**: `number`

Defined in: [models/models.ts:2127](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2127)

Агрегированное количество T2 (лоты)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyTFuture?

> `optional` **qtyTFuture**: `number`

Defined in: [models/models.ts:2109](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2109)

Количество (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyTFutureBatch?

> `optional` **qtyTFutureBatch**: `number`

Defined in: [models/models.ts:2133](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2133)

Агрегированное количество TFuture (лоты)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyUnits?

> `optional` **qtyUnits**: `number`

Defined in: [models/models.ts:2068](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2068)

Количество (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### shortName?

> `optional` **shortName**: `string`

Defined in: [models/models.ts:2085](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2085)

Короткое наименование

#### Example

```ts
"ЛУКОЙЛ"
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:2033](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2033)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```

***

### unrealisedPl?

> `optional` **unrealisedPl**: `number`

Defined in: [models/models.ts:2156](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2156)

#### Format

decimal

#### Example

```ts
3250
```

***

### volume?

> `optional` **volume**: `number`

Defined in: [models/models.ts:2050](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L2050)

Объём, рассчитанный по средней цене

#### Format

decimal

#### Example

```ts
38767080
```
