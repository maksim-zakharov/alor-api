# Interface: RiskRate

Defined in: [models/models.ts:4798](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4798)

## Properties

### assetType?

> `optional` **assetType**: `string`

Defined in: [models/models.ts:4828](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4828)

Тип актива

#### Example

```ts
"stock"
```

***

### createdAt?

> `optional` **createdAt**: `string`

Defined in: [models/models.ts:4892](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4892)

Время добавления ставки риска

#### Example

```ts
"2021-08-24T10:13:01.6584899"
```

***

### currencyCode?

> `optional` **currencyCode**: `string`

Defined in: [models/models.ts:4853](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4853)

Код валюты расчетов

#### Example

```ts
"RUB"
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:4815](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4815)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:4804](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4804)

Id записи

#### Format

int64

#### Example

```ts
22229
```

***

### instrument?

> `optional` **instrument**: `string`

Defined in: [models/models.ts:4809](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4809)

Инструмент

#### Example

```ts
"SBERP"
```

***

### isDirect?

> `optional` **isDirect**: `boolean`

Defined in: [models/models.ts:4843](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4843)

Является ли зависимость инструмента к базовому активу прямой или обратной.

#### Example

```ts
false
```

***

### isin?

> `optional` **isin**: `string`

Defined in: [models/models.ts:4848](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4848)

ISIN инструмента. Если есть.

#### Example

```ts
"RU0009029557"
```

***

### isMarginal?

> `optional` **isMarginal**: `boolean`

Defined in: [models/models.ts:4881](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4881)

Доступен ли данный инструмент в маржу. Т.е. есть ли он в списке маржинальных инструментов брокера.

#### Example

```ts
true
```

***

### isShortSellPossible?

> `optional` **isShortSellPossible**: `boolean`

Defined in: [models/models.ts:4876](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4876)

Разрешен ли шорт по бумаге. True если да.

#### Example

```ts
true
```

***

### rateDown?

> `optional` **rateDown**: `number`

Defined in: [models/models.ts:4865](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4865)

Ставка риска понижения цены. Применяется для лонгов.

#### Format

decimal

#### Example

```ts
10
```

***

### rateSymmetric?

> `optional` **rateSymmetric**: `number`

Defined in: [models/models.ts:4871](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4871)

Симметричная ставка риска. Приведена для справки, не используется

#### Format

decimal

#### Example

```ts
10
```

***

### rateUp?

> `optional` **rateUp**: `number`

Defined in: [models/models.ts:4859](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4859)

Ставка риска повышения цены. Применяется для шортов.

#### Format

decimal

#### Example

```ts
20
```

***

### riskCategoryId?

> `optional` **riskCategoryId**: `number`

Defined in: [models/models.ts:4817](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4817)

Категория риска.

***

### securityRiskCategoryId?

> `optional` **securityRiskCategoryId**: `number` \| `null`

Defined in: [models/models.ts:4823](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4823)

Id категории бумаги для категоризации.

#### Format

decimal

#### Example

```ts
1
```

***

### setName?

> `optional` **setName**: `string` \| `null`

Defined in: [models/models.ts:4838](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4838)

Чаще всего будет null. Поле показывает к множеству инструменту принадлежит данный инструмент.

#### Example

```ts
"SBER"
```

***

### setRate?

> `optional` **setRate**: `number`

Defined in: [models/models.ts:4887](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4887)

Ставка риска множества

#### Format

decimal

#### Example

```ts
0
```

***

### underlyingAsset?

> `optional` **underlyingAsset**: `string` \| `null`

Defined in: [models/models.ts:4833](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4833)

Чаще всего будет null. Поле показывает к какому базовому инструменту принадлежит данный инструмент.

#### Example

```ts
"SBER"
```

***

### updatedAt?

> `optional` **updatedAt**: `string`

Defined in: [models/models.ts:4898](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4898)

Время последнего обновления ставки риска

#### Format

date-time

#### Example

```ts
"2021-10-13T16:01:42.7957367"
```
