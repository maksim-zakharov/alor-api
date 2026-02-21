# Interface: CommandwsReqCreateLimitOrder

Defined in: [models/models.ts:6013](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6013)

## Properties

### board?

> `optional` **board**: `string` \| `null`

Defined in: [models/models.ts:6058](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6058)

Режим торгов (борд)

***

### checkDuplicates?

> `optional` **checkDuplicates**: `boolean`

Defined in: [models/models.ts:6091](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6091)

Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.

#### Example

```ts
true
```

***

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:6056](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6056)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:6020](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6020)

Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### icebergFixed?

> `optional` **icebergFixed**: `number` \| `null`

Defined in: [models/models.ts:6079](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6079)

Видимая постоянная часть айсберг-заявки в лотах

#### Format

decimal

#### Example

```ts
100
```

***

### icebergVariance?

> `optional` **icebergVariance**: `number` \| `null`

Defined in: [models/models.ts:6086](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6086)

Амплитуда отклонения (в % от icebergFixed) случайной надбавки к видимой части айсберг-заявки. Только срочный рынок

#### Format

decimal

#### Max

20

#### Example

```ts
2
```

***

### instrument?

> `optional` **instrument**: `object`

Defined in: [models/models.ts:6039](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6039)

#### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

#### symbol?

> `optional` **symbol**: `string`

Тикер (Код финансового инструмента)

##### Example

```ts
"SBER"
```

***

### opcode?

> `optional` **opcode**: `"create:limit"`

Defined in: [models/models.ts:6015](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6015)

Код операции

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:6038](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6038)

Цена

#### Format

decimal

#### Example

```ts
190.97
```

***

### quantity?

> `optional` **quantity**: `number`

Defined in: [models/models.ts:6032](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6032)

Количество (лоты)

#### Format

int32

#### Example

```ts
2
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:6026](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6026)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### timeInForce?

> `optional` **timeInForce**: [`TimeInForce`](../enumerations/TimeInForce.md)

Defined in: [models/models.ts:6073](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6073)

Тип заявки:
  * `OneDay` - До конца дня
  * `ImmediateOrCancel` - Снять остаток
  * `FillOrKill` - Исполнить целиком или отклонить
  * `GoodTillCancelled` - Активна до отмены

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:6059](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L6059)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
