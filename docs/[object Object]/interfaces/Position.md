# Interface: Position

Defined in: [models/models.ts:1776](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1776)

## Properties

### avgPrice?

> `optional` **avgPrice**: `number`

Defined in: [models/models.ts:1810](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1810)

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

Defined in: [models/models.ts:1786](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1786)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### currentVolume?

> `optional` **currentVolume**: `number`

Defined in: [models/models.ts:1804](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1804)

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

Defined in: [models/models.ts:1911](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1911)

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

Defined in: [models/models.ts:1792](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1792)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### isCurrency?

> `optional` **isCurrency**: `boolean`

Defined in: [models/models.ts:1921](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1921)

True для валютных остатков (денег), false - для торговых инструментов

#### Example

```ts
false
```

***

### lotSize?

> `optional` **lotSize**: `number`

Defined in: [models/models.ts:1828](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1828)

Размер лота

#### Format

decimal

#### Example

```ts
1
```

***

### open?

> `optional` **open**: `number`

Defined in: [models/models.ts:1905](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1905)

Агрегированное количество на момент открытия (начала торгов) (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### openQtyBatch?

> `optional` **openQtyBatch**: `number`

Defined in: [models/models.ts:1893](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1893)

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

Defined in: [models/models.ts:1822](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1822)

Количество открытых позиций на момент открытия (начала торгов)

#### Format

decimal

#### Example

```ts
30
```

***

### qty?

> `optional` **qty**: `number`

Defined in: [models/models.ts:1899](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1899)

Агрегированное количество (лоты)

#### Format

decimal

#### Example

```ts
20
```

***

### qtyBatch?

> `optional` **qtyBatch**: `number`

Defined in: [models/models.ts:1887](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1887)

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

Defined in: [models/models.ts:1839](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1839)

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

Defined in: [models/models.ts:1863](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1863)

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

Defined in: [models/models.ts:1845](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1845)

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

Defined in: [models/models.ts:1869](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1869)

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

Defined in: [models/models.ts:1851](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1851)

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

Defined in: [models/models.ts:1875](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1875)

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

Defined in: [models/models.ts:1857](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1857)

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

Defined in: [models/models.ts:1881](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1881)

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

Defined in: [models/models.ts:1816](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1816)

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

Defined in: [models/models.ts:1833](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1833)

Короткое наименование

#### Example

```ts
"ЛУКОЙЛ"
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:1781](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1781)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```

***

### unrealisedPl?

> `optional` **unrealisedPl**: `number`

Defined in: [models/models.ts:1916](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1916)

#### Format

decimal

#### Example

```ts
3250
```

***

### volume?

> `optional` **volume**: `number`

Defined in: [models/models.ts:1798](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1798)

Объём, рассчитанный по средней цене

#### Format

decimal

#### Example

```ts
38767080
```
