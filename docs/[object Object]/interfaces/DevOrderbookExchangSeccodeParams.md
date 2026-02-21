# Interface: DevOrderbookExchangSeccodeParams

Defined in: [models/models.ts:7148](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7148)

## Properties

### depth?

> `optional` **depth**: `number`

Defined in: [models/models.ts:7157](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7157)

Глубина стакана. Стандартное и максимальное значение - 20 (20х20).

#### Format

int32

#### Min

1

#### Max

20

#### Default

```ts
20
```

#### Example

```ts
5
```

***

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7168](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7168)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7162](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7162)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### seccode

> **seccode**: `string`

Defined in: [models/models.ts:7173](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7173)

Инструмент

#### Example

```ts
"RTS-9.20"
```
