# Interface: TradeHeavy

Defined in: [models/models.ts:5154](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5154)

## Properties

### board?

> `optional` **board**: `string`

Defined in: [models/models.ts:5197](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5197)

Код режима торгов

#### Example

```ts
"TQBR"
```

***

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:5175](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5175)

Пара Биржа:Тикер

#### Example

```ts
"GAZP:MOEX"
```

***

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:5186](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5186)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### date?

> `optional` **date**: `string`

Defined in: [models/models.ts:5192](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5192)

Дата и время (UTC) закрытия заявки

#### Format

date-time

#### Example

```ts
"2018-08-07T08:40:03.445Z"
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:5181](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5181)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:5232](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5232)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:5160](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5160)

Уникальный идентификатор сделки

#### Format

decimal

#### Example

```ts
159
```

***

### orderNo?

> `optional` **orderNo**: `string`

Defined in: [models/models.ts:5165](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5165)

Идентификатор заявки

#### Example

```ts
7271479
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:5221](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5221)

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

Defined in: [models/models.ts:5215](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5215)

Количество (лоты)

#### Format

int32

#### Example

```ts
1
```

***

### qtyBatch?

> `optional` **qtyBatch**: `number`

Defined in: [models/models.ts:5209](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5209)

Количество (лоты)

#### Format

int32

#### Example

```ts
1
```

***

### qtyUnits?

> `optional` **qtyUnits**: `number`

Defined in: [models/models.ts:5203](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5203)

Количество (штуки)

#### Format

int32

#### Example

```ts
1
```

***

### repoSpecificFields?

> `optional` **repoSpecificFields**: `object`

Defined in: [models/models.ts:5234](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5234)

Специальные поля для сделок РЕПО

#### account?

> `optional` **account**: `string`

Торговый счет, в счет которого заключена данная сделка

##### Example

```ts
"MB0014100002"
```

#### extRef?

> `optional` **extRef**: `string`

Поле-примечание, используется для обратной связи с внешними системами. Например, идентификатор пользователя внешней системы, поставившего заявку.

##### Example

```ts
"MB0014100002"
```

#### repoRate?

> `optional` **repoRate**: `number`

Цена репо в процентах годовых.

##### Format

decimal

##### Example

```ts
23.45
```

#### repoTerm?

> `optional` **repoTerm**: `number`

Срок РЕПО - промежуток времени, выраженный в календарных днях, между датами исполнения первой и второй частей сделки РЕПО.

##### Format

int32

##### Example

```ts
2
```

#### tradeTypeInfo?

> `optional` **tradeTypeInfo**: `string`

Описание типа сделки

##### Example

```ts
"Расчетная по операции своп"
```

#### value?

> `optional` **value**: `number`

Объем сделки, выраженный в валюте расчетов

##### Format

decimal

##### Example

```ts
46
```

#### yield?

> `optional` **yield**: `number`

Доходность, рассчитанная по цене сделки

##### Format

decimal

##### Example

```ts
23.45
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:5227](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5227)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:5170](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5170)

Тикер (Код финансового инструмента). "[N/A]" используется, если symbol не определен.

#### Example

```ts
"GAZP"
```
