# Interface: HistoryHeavy

Defined in: [models/models.ts:1719](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1719)

## Properties

### history?

> `optional` **history**: [`HistoryObjectHeavy`](HistoryObjectHeavy.md)[]

Defined in: [models/models.ts:1720](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1720)

***

### next?

> `optional` **next**: `number` \| `null`

Defined in: [models/models.ts:1726](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1726)

Время (UTC) начала следующей свечи

#### Format

int64

#### Example

```ts
1532944860
```

***

### prev?

> `optional` **prev**: `number` \| `null`

Defined in: [models/models.ts:1732](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1732)

Время (UTC) начала предыдущей свечи

#### Format

int64

#### Example

```ts
1532944860
```
