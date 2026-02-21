# Interface: TradeSlim

Defined in: [models/models.ts:5031](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5031)

## Properties

### b?

> `optional` **b**: `string`

Defined in: [models/models.ts:5074](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5074)

Код режима торгов

#### Example

```ts
"TQBR"
```

***

### cmt?

> `optional` **cmt**: `string`

Defined in: [models/models.ts:5063](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5063)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### d?

> `optional` **d**: `string`

Defined in: [models/models.ts:5069](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5069)

Дата и время (UTC) закрытия заявки

#### Format

date-time

#### Example

```ts
"2018-08-07T08:40:03.445Z"
```

***

### eid?

> `optional` **eid**: `string`

Defined in: [models/models.ts:5042](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5042)

Идентификатор заявки

#### Example

```ts
7271479
```

***

### ex?

> `optional` **ex**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:5058](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5058)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### h?

> `optional` **h**: `boolean`

Defined in: [models/models.ts:5103](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5103)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:5037](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5037)

Уникальный идентификатор сделки

#### Format

decimal

#### Example

```ts
159
```

***

### px?

> `optional` **px**: `number`

Defined in: [models/models.ts:5092](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5092)

Цена

#### Format

decimal

#### Example

```ts
142.52
```

***

### q?

> `optional` **q**: `number`

Defined in: [models/models.ts:5080](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5080)

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

Defined in: [models/models.ts:5086](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5086)

Количество (лоты)

#### Format

int32

#### Example

```ts
1
```

***

### r?

> `optional` **r**: `object`

Defined in: [models/models.ts:5111](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5111)

Специальные поля для сделок РЕПО

#### a?

> `optional` **a**: `string`

Торговый счет, в счет которого заключена данная сделка

##### Example

```ts
"MB0014100002"
```

#### exr?

> `optional` **exr**: `string`

Поле-примечание, используется для обратной связи с внешними системами. Например, идентификатор пользователя внешней системы, поставившего заявку.

##### Example

```ts
"MB0014100002"
```

#### r?

> `optional` **r**: `number`

Цена репо в процентах годовых.

##### Format

decimal

##### Example

```ts
23.45
```

#### t?

> `optional` **t**: `string`

Описание типа сделки

##### Example

```ts
"Расчетная по операции своп"
```

#### tm?

> `optional` **tm**: `number`

Срок РЕПО - промежуток времени, выраженный в календарных днях, между датами исполнения первой и второй частей сделки РЕПО.

##### Format

int32

##### Example

```ts
2
```

#### v?

> `optional` **v**: `number`

Объем сделки, выраженный в валюте расчетов

##### Format

decimal

##### Example

```ts
46
```

#### y?

> `optional` **y**: `number`

Доходность, рассчитанная по цене сделки

##### Format

decimal

##### Example

```ts
23.45
```

***

### s?

> `optional` **s**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:5098](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5098)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:5047](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5047)

Тикер (Код финансового инструмента). "[N/A]" используется, если symbol не определен.

#### Example

```ts
"GAZP"
```

***

### tic?

> `optional` **tic**: `string`

Defined in: [models/models.ts:5052](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5052)

Пара Биржа:Тикер

#### Example

```ts
"GAZP:MOEX"
```

***

### v?

> `optional` **v**: `number`

Defined in: [models/models.ts:5109](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5109)

Объем

#### Format

decimal

#### Example

```ts
1421.52
```
