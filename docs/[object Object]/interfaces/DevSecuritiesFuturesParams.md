# Interface: DevSecuritiesFuturesParams

Defined in: [models/models.ts:7280](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7280)

## Properties

### exchange

> **exchange**: `"MOEX"`

Defined in: [models/models.ts:7290](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7290)

Биржа:
  * `MOEX` - Московская биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7285](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7285)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### symbol

> **symbol**: `string`

Defined in: [models/models.ts:7295](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7295)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```
