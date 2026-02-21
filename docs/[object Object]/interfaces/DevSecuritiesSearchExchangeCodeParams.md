# Interface: DevSecuritiesSearchExchangeCodeParams

Defined in: [models/models.ts:7116](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7116)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7127](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7127)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7121](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7121)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### symbol

> **symbol**: `string`

Defined in: [models/models.ts:7132](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7132)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```
