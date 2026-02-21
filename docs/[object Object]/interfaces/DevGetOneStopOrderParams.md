# Interface: DevGetOneStopOrderParams

Defined in: [models/models.ts:7443](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7443)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7454](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7454)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7448](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7448)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### orderId

> **orderId**: `number`

Defined in: [models/models.ts:7465](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7465)

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

Defined in: [models/models.ts:7459](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7459)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```
