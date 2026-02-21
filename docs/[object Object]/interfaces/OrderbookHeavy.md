# Interface: OrderbookHeavy

Defined in: [models/models.ts:2222](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2222)

Данные о запрашиваемом "биржевом стакане"

## Properties

### asks?

> `optional` **asks**: [`OrderbookAsk`](OrderbookAsk.md)[]

Defined in: [models/models.ts:2226](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2226)

Аски

***

### bids?

> `optional` **bids**: [`OrderbookBid`](OrderbookBid.md)[]

Defined in: [models/models.ts:2224](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2224)

Биды

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:2237](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2237)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### msTimestamp?

> `optional` **msTimestamp**: `number`

Defined in: [models/models.ts:2232](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2232)

Время(UTC) в формате Unix Time Milliseconds

#### Format

int64

#### Example

```ts
1610982677578
```
