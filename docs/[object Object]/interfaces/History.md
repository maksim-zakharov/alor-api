# Interface: History

Defined in: [models/models.ts:1609](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1609)

## Properties

### history?

> `optional` **history**: [`HistoryObject`](HistoryObject.md)[]

Defined in: [models/models.ts:1610](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1610)

***

### next?

> `optional` **next**: `number` \| `null`

Defined in: [models/models.ts:1616](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1616)

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

Defined in: [models/models.ts:1622](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1622)

Время (UTC) начала предыдущей свечи

#### Format

int64

#### Example

```ts
1532944860
```
