# Interface: PositionSlim

Defined in: [models/models.ts:1926](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1926)

## Properties

### cur?

> `optional` **cur**: `boolean`

Defined in: [models/models.ts:2023](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2023)

True для валютных остатков (денег), false - для торговых инструментов

#### Example

```ts
false
```

***

### cv?

> `optional` **cv**: `number`

Defined in: [models/models.ts:1954](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1954)

Объём, рассчитанный по текущей цене

#### Format

decimal

#### Example

```ts
38798790
```

***

### ex?

> `optional` **ex**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:1942](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1942)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### lot?

> `optional` **lot**: `number`

Defined in: [models/models.ts:1978](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1978)

Размер лота

#### Format

decimal

#### Example

```ts
1
```

***

### n?

> `optional` **n**: `string`

Defined in: [models/models.ts:1983](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1983)

Короткое наименование

#### Example

```ts
"ЛУКОЙЛ"
```

***

### o?

> `optional` **o**: `number`

Defined in: [models/models.ts:1972](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1972)

Количество открытых позиций на момент открытия (начала торгов)

#### Format

decimal

#### Example

```ts
30
```

***

### pxavg?

> `optional` **pxavg**: `number`

Defined in: [models/models.ts:1960](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1960)

Средняя цена

#### Format

decimal

#### Example

```ts
16.6
```

***

### q?

> `optional` **q**: `number`

Defined in: [models/models.ts:1966](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1966)

Количество (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### q0?

> `optional` **q0**: `number`

Defined in: [models/models.ts:1989](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1989)

Агрегированное количество T0 (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### q1?

> `optional` **q1**: `number`

Defined in: [models/models.ts:1995](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1995)

Агрегированное количество T1 (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### q2?

> `optional` **q2**: `number`

Defined in: [models/models.ts:2001](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2001)

Агрегированное количество T2 (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### qf?

> `optional` **qf**: `number`

Defined in: [models/models.ts:2007](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2007)

Количество (штуки)

#### Format

decimal

#### Example

```ts
20
```

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:1931](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1931)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```

***

### tic?

> `optional` **tic**: `string`

Defined in: [models/models.ts:1936](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1936)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### up?

> `optional` **up**: `number`

Defined in: [models/models.ts:2018](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2018)

#### Format

decimal

#### Example

```ts
3250
```

***

### upd?

> `optional` **upd**: `number`

Defined in: [models/models.ts:2013](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2013)

Нереализованная прибыль за день

#### Format

decimal

#### Example

```ts
2.8
```

***

### v?

> `optional` **v**: `number`

Defined in: [models/models.ts:1948](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1948)

Объём, рассчитанный по средней цене

#### Format

decimal

#### Example

```ts
38767080
```
