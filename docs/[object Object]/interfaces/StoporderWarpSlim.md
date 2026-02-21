# Interface: StoporderWarpSlim

Defined in: [models/models.ts:3775](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3775)

## Properties

### cnd?

> `optional` **cnd**: [`Condition`](../enumerations/Condition.md)

Defined in: [models/models.ts:3829](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3829)

Условие срабатывания стоп/стоп-лимитной заявки:
  * `More` - Цена срабатывания больше текущей цены
  * `Less` - Цена срабатывания меньше текущей цены
  * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
  * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене

***

### eid?

> `optional` **eid**: `number`

Defined in: [models/models.ts:3787](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3787)

Уникальный идентификатор стоп-заявки

#### Format

int64

#### Example

```ts
425242362
```

***

### et?

> `optional` **et**: `string`

Defined in: [models/models.ts:3849](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3849)

Время действия заявки (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### ex?

> `optional` **ex**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:3808](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3808)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### fq?

> `optional` **fq**: `number`

Defined in: [models/models.ts:3867](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3867)

Количество исполненных (штуки)

#### Format

decimal

#### Example

```ts
10
```

***

### fqb?

> `optional` **fqb**: `number`

Defined in: [models/models.ts:3873](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3873)

Количество исполненных (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### h?

> `optional` **h**: `boolean`

Defined in: [models/models.ts:3896](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3896)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:3781](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3781)

Уникальный идентификатор стоп-заявки

#### Format

int64

#### Example

```ts
347499
```

***

### p?

> `optional` **p**: `string`

Defined in: [models/models.ts:3802](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3802)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### px?

> `optional` **px**: `number`

Defined in: [models/models.ts:3879](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3879)

Цена(Лимит)

#### Format

decimal

#### Example

```ts
208.6
```

***

### pxavg?

> `optional` **pxavg**: `number`

Defined in: [models/models.ts:3885](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3885)

Средняя цена

#### Format

decimal

#### Example

```ts
0
```

***

### pxs?

> `optional` **pxs**: `number`

Defined in: [models/models.ts:3891](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3891)

Условная цена

#### Format

decimal

#### Example

```ts
215
```

***

### q?

> `optional` **q**: `number`

Defined in: [models/models.ts:3855](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3855)

Количество (штуки)

#### Format

int32

#### Example

```ts
10
```

***

### qb?

> `optional` **qb**: `number`

Defined in: [models/models.ts:3861](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3861)

Количество (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### s?

> `optional` **s**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:3821](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3821)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### st?

> `optional` **st**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3837](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3837)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:3792](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3792)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### t?

> `optional` **t**: `"stop"` \| `"stoplimit"`

Defined in: [models/models.ts:3815](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3815)

Тип заявки:
  * `stop` - Стоп заявка
  * `stoplimit` - Стоп-лимитная заявка

#### Example

```ts
"stop"
```

***

### tic?

> `optional` **tic**: `string`

Defined in: [models/models.ts:3797](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3797)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```

***

### tt?

> `optional` **tt**: `string`

Defined in: [models/models.ts:3843](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3843)

Время выставления заявки (UTC)

#### Format

date-time

#### Example

```ts
"2020-05-16T23:59:59.9990000"
```

***

### v?

> `optional` **v**: `number` \| `null`

Defined in: [models/models.ts:3902](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3902)

Объем, для рыночных заявок - null

#### Format

decimal

#### Example

```ts
2086.3
```
