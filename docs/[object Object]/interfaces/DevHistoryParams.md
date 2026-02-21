# Interface: DevHistoryParams

Defined in: [models/models.ts:7322](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7322)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7333](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7333)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7360](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7360)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### from

> **from**: `number`

Defined in: [models/models.ts:7344](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7344)

Начало отрезка времени (UTC) в формате Unix Time Seconds

#### Format

int64

#### Example

```ts
1549000661
```

***

### symbol

> **symbol**: `string`

Defined in: [models/models.ts:7327](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7327)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### tf

> **tf**: `"15"` \| `"60"` \| `"300"` \| `"3600"` \| `"D"` \| `"W"` \| `"M"` \| `"Y"`

Defined in: [models/models.ts:7338](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7338)

Длительность таймфрейма в секундах или код ("D" - дни, "W" - недели, "M" - месяцы, "Y" - годы)

#### Example

```ts
"60"
```

***

### to

> **to**: `number`

Defined in: [models/models.ts:7350](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7350)

Конец отрезка времени (UTC) в формате Unix Time Seconds

#### Format

int64

#### Example

```ts
1550060661
```

***

### untraded?

> `optional` **untraded**: `boolean`

Defined in: [models/models.ts:7355](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7355)

Флаг для поиска данных по устаревшим или экспирированным инструментам. При использовании требуется точное совпадение тикера

#### Example

```ts
false
```
