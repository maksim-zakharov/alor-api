# Interface: DevGetTickerTradesParams

Defined in: [models/models.ts:6892](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6892)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:6903](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6903)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:6897](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6897)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### portfolio

> **portfolio**: `string`

Defined in: [models/models.ts:6908](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6908)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### ticker

> **ticker**: `string`

Defined in: [models/models.ts:6913](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6913)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```
