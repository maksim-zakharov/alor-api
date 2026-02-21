# Interface: DevSecuritiesSearchExchangeParams

Defined in: [models/models.ts:7088](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7088)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7113](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7113)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7093](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7093)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### includeOld?

> `optional` **includeOld**: `boolean`

Defined in: [models/models.ts:7107](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7107)

Флаг загрузки устаревших инструментов

#### Example

```ts
false
```

***

### market?

> `optional` **market**: `"SPBX"` \| `"FORTS"` \| `"FOND"` \| `"CURR"`

Defined in: [models/models.ts:7102](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7102)

Рынок:
  * `FORTS` - Срочный рынок Московской биржи
  * `FOND` - Фондовый рынок Московской биржи
  * `CURR` - Валютный рынок Московской биржи
  * `SPBX` - Рынок Санкт-Петербургской биржи

#### Example

```ts
"FOND"
```
