# Interface: Alltrade

Defined in: [models/models.ts:4633](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4633)

## Properties

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:4691](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4691)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:4639](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4639)

Уникальный идентификатор.

#### Format

int64

#### Example

```ts
159
```

***

### oi?

> `optional` **oi**: `number`

Defined in: [models/models.ts:4686](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4686)

Открытый интерес (open interest). Если не поддерживается инстурментом - значение 0.

#### Format

int32

#### Example

```ts
523920
```

***

### orderno?

> `optional` **orderno**: `number`

Defined in: [models/models.ts:4645](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4645)

Идентификатор заявки

#### Format

int64

#### Example

```ts
0
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:4662](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4662)

Цена

#### Format

decimal

#### Example

```ts
142.52
```

***

### qty?

> `optional` **qty**: `number`

Defined in: [models/models.ts:4656](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4656)

Количество

#### Format

int32

#### Example

```ts
1
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:4680](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4680)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:4650](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4650)

Тикер (Код финансового инструмента). "[N/A]" используется, если symbol не определен.

#### Example

```ts
"SBER"
```

***

### time?

> `optional` **time**: `string`

Defined in: [models/models.ts:4668](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4668)

Дата и время (UTC) закрытия заявки

#### Format

date-time

#### Example

```ts
"2018-08-07T08:40:03.445Z"
```

***

### timestamp?

> `optional` **timestamp**: `number`

Defined in: [models/models.ts:4674](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4674)

Время (UTC) в формате Unix Time Milliseconds

#### Format

int64

#### Example

```ts
1611158710768
```
