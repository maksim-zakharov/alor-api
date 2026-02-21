# Interface: TradeStatsParams

Defined in: [models/models.ts:6953](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6953)

## Properties

### dateFrom?

> `optional` **dateFrom**: `string`

Defined in: [models/models.ts:6959](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6959)

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

Defined in: [models/models.ts:6977](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6977)

Флаг обратной сортировки выдачи

#### Example

```ts
false
```

***

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:6988](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6988)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:6982](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6982)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### from?

> `optional` **from**: `number`

Defined in: [models/models.ts:6965](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6965)

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

Defined in: [models/models.ts:6972](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6972)

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

Defined in: [models/models.ts:6993](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6993)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```
