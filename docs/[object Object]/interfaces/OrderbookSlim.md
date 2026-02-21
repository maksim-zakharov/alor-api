# Interface: OrderbookSlim

Defined in: [models/models.ts:2203](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2203)

Данные о запрашиваемом "биржевом стакане"

## Properties

### a?

> `optional` **a**: [`OrderbookAskSlim`](OrderbookAskSlim.md)[]

Defined in: [models/models.ts:2207](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2207)

Аски

***

### b?

> `optional` **b**: [`OrderbookBidSlim`](OrderbookBidSlim.md)[]

Defined in: [models/models.ts:2205](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2205)

Биды

***

### h?

> `optional` **h**: `boolean`

Defined in: [models/models.ts:2218](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2218)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### t?

> `optional` **t**: `number`

Defined in: [models/models.ts:2213](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2213)

Время(UTC) в формате Unix Time Milliseconds

#### Format

int64

#### Example

```ts
1610982677578
```
