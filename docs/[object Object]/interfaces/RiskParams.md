# Interface: RiskParams

Defined in: [models/models.ts:6934](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L6934)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:6945](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L6945)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:6939](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L6939)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### portfolio

> **portfolio**: `string`

Defined in: [models/models.ts:6950](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L6950)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```
