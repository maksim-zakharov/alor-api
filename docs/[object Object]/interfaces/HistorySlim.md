# Interface: HistorySlim

Defined in: [models/models.ts:1664](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1664)

## Properties

### history?

> `optional` **history**: [`HistoryObjectSlim`](HistoryObjectSlim.md)[]

Defined in: [models/models.ts:1665](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1665)

***

### next?

> `optional` **next**: `number` \| `null`

Defined in: [models/models.ts:1671](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1671)

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

Defined in: [models/models.ts:1677](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1677)

Время (UTC) начала предыдущей свечи

#### Format

int64

#### Example

```ts
1532944860
```
