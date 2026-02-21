# Interface: OrderSlim

Defined in: [models/models.ts:3182](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3182)

## Properties

### cmt?

> `optional` **cmt**: `string`

Defined in: [models/models.ts:3208](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3208)

Комментарий

#### Example

```ts
"Первая заявка"
```

***

### et?

> `optional` **et**: `string`

Defined in: [models/models.ts:3241](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3241)

Время завершения (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### ex?

> `optional` **ex**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:3203](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3203)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### fq?

> `optional` **fq**: `number`

Defined in: [models/models.ts:3259](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3259)

Количество исполненных (штуки)

#### Format

decimal

#### Example

```ts
1
```

***

### fqb?

> `optional` **fqb**: `number`

Defined in: [models/models.ts:3265](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3265)

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

Defined in: [models/models.ts:3276](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3276)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### id?

> `optional` **id**: `string`

Defined in: [models/models.ts:3187](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3187)

Уникальный идентификатор заявки

#### Example

```ts
"18995978560"
```

***

### px?

> `optional` **px**: `number`

Defined in: [models/models.ts:3271](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3271)

Цена

#### Format

decimal

#### Example

```ts
208.6
```

***

### q?

> `optional` **q**: `number`

Defined in: [models/models.ts:3247](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3247)

Количество (штуки)

#### Format

int32

#### Example

```ts
1
```

***

### qb?

> `optional` **qb**: `number`

Defined in: [models/models.ts:3253](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3253)

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

Defined in: [models/models.ts:3221](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3221)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### st?

> `optional` **st**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3229](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3229)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:3192](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3192)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### t?

> `optional` **t**: `"limit"` \| `"market"`

Defined in: [models/models.ts:3215](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3215)

Тип заявки:
  * `limit` - Лимитная заявка
  * `market` - Рыночная заявка

#### Example

```ts
"market"
```

***

### tic?

> `optional` **tic**: `string`

Defined in: [models/models.ts:3197](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3197)

Пара биржа-Тикер

#### Example

```ts
"MOEX:SBER"
```

***

### tt?

> `optional` **tt**: `string`

Defined in: [models/models.ts:3235](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3235)

Время выставления (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### v?

> `optional` **v**: `number` \| `null`

Defined in: [models/models.ts:3282](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L3282)

Объем, для рыночных заявок - null

#### Format

decimal

#### Example

```ts
2086.3
```
