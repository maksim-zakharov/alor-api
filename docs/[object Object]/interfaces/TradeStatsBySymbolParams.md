# Interface: TradeStatsBySymbolParams

Defined in: [models/models.ts:6996](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6996)

## Properties

### dateFrom?

> `optional` **dateFrom**: `string`

Defined in: [models/models.ts:7002](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7002)

Начиная с какой даты отдавать историю сделок

#### Format

date

#### Example

```ts
"2021-10-13"
```

***

### descending?

> `optional` **descending**: `boolean`

Defined in: [models/models.ts:7020](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7020)

Флаг обратной сортировки выдачи

#### Example

```ts
false
```

***

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7031](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7031)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7025](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7025)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### from?

> `optional` **from**: `number`

Defined in: [models/models.ts:7008](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7008)

Начальный номер сделки для фильтра результатов

#### Format

int64

#### Example

```ts
93713183
```

***

### limit?

> `optional` **limit**: `number`

Defined in: [models/models.ts:7015](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7015)

Количество возвращаемых записей

#### Format

int32

#### Max

1000

#### Example

```ts
50
```

***

### portfolio

> **portfolio**: `string`

Defined in: [models/models.ts:7036](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7036)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### symbol

> **symbol**: `string`

Defined in: [models/models.ts:7041](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7041)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```
