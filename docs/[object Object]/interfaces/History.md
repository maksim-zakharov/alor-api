# Interface: History

Defined in: [models/models.ts:1609](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1609)

## Properties

### history?

> `optional` **history**: [`HistoryObject`](HistoryObject.md)[]

Defined in: [models/models.ts:1610](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1610)

***

### next?

> `optional` **next**: `number` \| `null`

Defined in: [models/models.ts:1616](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1616)

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

Defined in: [models/models.ts:1622](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1622)

Время (UTC) начала предыдущей свечи

#### Format

int64

#### Example

```ts
1532944860
```
