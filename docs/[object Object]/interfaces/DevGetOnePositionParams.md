# Interface: DevGetOnePositionParams

Defined in: [models/models.ts:6849](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6849)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:6860](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6860)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:6854](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6854)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### portfolio

> **portfolio**: `string`

Defined in: [models/models.ts:6865](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6865)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### symbol

> **symbol**: `string`

Defined in: [models/models.ts:6870](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6870)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```
