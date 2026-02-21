# Interface: StoporderSlim

Defined in: [models/models.ts:3469](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3469)

## Properties

### e?

> `optional` **e**: `boolean`

Defined in: [models/models.ts:3547](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3547)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### ex?

> `optional` **ex**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:3486](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3486)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### exp?

> `optional` **exp**: `string`

Defined in: [models/models.ts:3524](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3524)

Время действия заявки (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### fqb?

> `optional` **fqb**: `number`

Defined in: [models/models.ts:3536](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3536)

Количество исполненных

#### Format

decimal

#### Example

```ts
1
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:3475](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3475)

Уникальный идентификатор стоп-заявки

#### Format

decimal

#### Example

```ts
347498
```

***

### px?

> `optional` **px**: `number`

Defined in: [models/models.ts:3542](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3542)

Цена(Лимит)

#### Format

decimal

#### Example

```ts
208.6
```

***

### pxs?

> `optional` **pxs**: `number`

Defined in: [models/models.ts:3504](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3504)

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

Defined in: [models/models.ts:3530](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3530)

Количество

#### Format

decimal

#### Example

```ts
1
```

***

### s?

> `optional` **s**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:3510](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3510)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### st?

> `optional` **st**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3518](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3518)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:3480](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3480)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### t?

> `optional` **t**: `"stop"` \| `"stoplimit"`

Defined in: [models/models.ts:3498](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3498)

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

Defined in: [models/models.ts:3491](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3491)

Пара Биржа:Тикер

#### Example

```ts
"MOEX:LKOH"
```
