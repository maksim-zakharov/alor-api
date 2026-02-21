# Interface: HistoryHeavy

Defined in: [models/models.ts:1719](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1719)

## Properties

### history?

> `optional` **history**: [`HistoryObjectHeavy`](HistoryObjectHeavy.md)[]

Defined in: [models/models.ts:1720](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1720)

***

### next?

> `optional` **next**: `number` \| `null`

Defined in: [models/models.ts:1726](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1726)

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

Defined in: [models/models.ts:1732](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L1732)

Время (UTC) начала предыдущей свечи

#### Format

int64

#### Example

```ts
1532944860
```
