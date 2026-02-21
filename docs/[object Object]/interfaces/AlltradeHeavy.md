# Interface: AlltradeHeavy

Defined in: [models/models.ts:4743](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4743)

## Properties

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:4795](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4795)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:4749](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4749)

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

Defined in: [models/models.ts:4790](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4790)

Открытый интерес (open interest). Если не поддерживается инстурментом - значение 0.

#### Format

int32

#### Example

```ts
523920
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:4766](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4766)

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

Defined in: [models/models.ts:4760](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4760)

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

Defined in: [models/models.ts:4784](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4784)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:4754](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4754)

Тикер (Код финансового инструмента). "[N/A]" используется, если symbol не определен.

#### Example

```ts
"SBER"
```

***

### time?

> `optional` **time**: `string`

Defined in: [models/models.ts:4772](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4772)

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

Defined in: [models/models.ts:4778](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4778)

Время (UTC) в формате Unix Time Milliseconds

#### Format

int64

#### Example

```ts
1611158710768
```
