# Interface: Orderbook

Defined in: [models/models.ts:2171](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2171)

Данные о запрашиваемом "биржевом стакане"

## Properties

### asks?

> `optional` **asks**: [`OrderbookAsk`](OrderbookAsk.md)[]

Defined in: [models/models.ts:2181](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2181)

Аски

***

### bids?

> `optional` **bids**: [`OrderbookBid`](OrderbookBid.md)[]

Defined in: [models/models.ts:2179](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2179)

Биды

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:2199](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2199)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### ms\_timestamp?

> `optional` **ms\_timestamp**: `number`

Defined in: [models/models.ts:2194](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2194)

Время(UTC) в формате Unix Time Milliseconds

#### Format

int64

#### Example

```ts
1610982677578
```

***

### ~~snapshot?~~

> `optional` **snapshot**: `boolean`

Defined in: [models/models.ts:2177](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2177)

Deprecated. Устаревшее поле, будет удалено в будущих обновлениях.

#### Deprecated

#### Example

```ts
true
```

***

### ~~timestamp?~~

> `optional` **timestamp**: `number`

Defined in: [models/models.ts:2188](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2188)

Deprecated. Устаревшее поле, будет удалено в будущих обновлениях. Вместо этого поля используйте поле "ms_timestamp".

#### Deprecated

#### Format

decimal

#### Example

```ts
1610982677
```
