# Interface: DevSecuritiesSearchAllTradesHistoryParams

Defined in: [models/models.ts:7235](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7235)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7272](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7272)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7266](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7266)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### from?

> `optional` **from**: `number`

Defined in: [models/models.ts:7241](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7241)

Начало отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds

#### Format

int64

#### Example

```ts
1593430060
```

***

### limit

> **limit**: `number`

Defined in: [models/models.ts:7255](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7255)

Ограничение на количество выдаваемых результатов поиска (1-50000)

#### Format

int32

#### Min

1

#### Max

50000

#### Example

```ts
100
```

***

### offset?

> `optional` **offset**: `number`

Defined in: [models/models.ts:7261](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7261)

Смещение начала выборки (для пагинации)

#### Format

int32

#### Example

```ts
10
```

***

### symbol

> **symbol**: `string`

Defined in: [models/models.ts:7277](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7277)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```

***

### to?

> `optional` **to**: `number`

Defined in: [models/models.ts:7247](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7247)

Конец отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds

#### Format

int64

#### Example

```ts
1593430560
```
