# Interface: Trade

Defined in: [models/models.ts:4908](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4908)

## Properties

### board?

> `optional` **board**: `string`

Defined in: [models/models.ts:4951](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4951)

Код режима торгов

#### Example

```ts
"TQBR"
```

***

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:4929](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4929)

Пара Биржа:Тикер

#### Example

```ts
"GAZP:MOEX"
```

***

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:4940](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4940)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### date?

> `optional` **date**: `string`

Defined in: [models/models.ts:4946](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4946)

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

Defined in: [models/models.ts:4935](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4935)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:4986](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4986)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:4914](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4914)

Уникальный идентификатор сделки

#### Format

decimal

#### Example

```ts
159
```

***

### orderno?

> `optional` **orderno**: `string`

Defined in: [models/models.ts:4919](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4919)

Идентификатор заявки

#### Example

```ts
7271479
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:4975](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4975)

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

Defined in: [models/models.ts:4969](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4969)

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

Defined in: [models/models.ts:4963](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4963)

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

Defined in: [models/models.ts:4957](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4957)

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

Defined in: [models/models.ts:4988](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4988)

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

Defined in: [models/models.ts:4981](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4981)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:4924](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L4924)

Тикер (Код финансового инструмента). "[N/A]" используется, если symbol не определен.

#### Example

```ts
"GAZP"
```
