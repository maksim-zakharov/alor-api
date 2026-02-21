# Interface: DevQuotesParams

Defined in: [models/models.ts:7135](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7135)

## Properties

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7140](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7140)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### symbols

> **symbols**: `string`

Defined in: [models/models.ts:7145](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7145)

Принимает несколько пар биржа-тикер. Пары отделены запятыми. Биржа и тикер разделены двоеточием

#### Example

```ts
"MOEX:SBER,MOEX:GAZP,SPBX:AAPL"
```
