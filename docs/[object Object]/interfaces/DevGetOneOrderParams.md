# Interface: DevGetOneOrderParams

Defined in: [models/models.ts:6762](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6762)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:6773](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6773)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:6767](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6767)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### orderId

> **orderId**: `number`

Defined in: [models/models.ts:6784](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6784)

Идентификатор заявки

#### Format

int64

#### Example

```ts
93713183
```

***

### portfolio

> **portfolio**: `string`

Defined in: [models/models.ts:6778](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6778)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```
