# Interface: DevQuotesParams

Defined in: [models/models.ts:7135](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L7135)

## Properties

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7140](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L7140)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### symbols

> **symbols**: `string`

Defined in: [models/models.ts:7145](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L7145)

Принимает несколько пар биржа-тикер. Пары отделены запятыми. Биржа и тикер разделены двоеточием

#### Example

```ts
"MOEX:SBER,MOEX:GAZP,SPBX:AAPL"
```
