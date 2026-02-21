# Interface: DevQuotesParams

Defined in: [models/models.ts:7135](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7135)

## Properties

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7140](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7140)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### symbols

> **symbols**: `string`

Defined in: [models/models.ts:7145](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7145)

Принимает несколько пар биржа-тикер. Пары отделены запятыми. Биржа и тикер разделены двоеточием

#### Example

```ts
"MOEX:SBER,MOEX:GAZP,SPBX:AAPL"
```
