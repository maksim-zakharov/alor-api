# Interface: CommandwsReqUpdateStopOrder

Defined in: [models/models.ts:6418](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6418)

## Properties

### activate?

> `optional` **activate**: `boolean`

Defined in: [models/models.ts:6496](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6496)

Флаг указывает, создать активную заявку, или не активную. Не активная заявка отображается в системе, но не участвует в процессе выставления на биржу, пока не станет активной. Данный флаг необходим при создании группы заявок с типом 'TriggerBracketOrders'

#### Default

```ts
true
```

#### Example

```ts
true
```

***

### board?

> `optional` **board**: `string` \| `null`

Defined in: [models/models.ts:6478](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6478)

Режим торгов (борд)

***

### checkDuplicates?

> `optional` **checkDuplicates**: `boolean`

Defined in: [models/models.ts:6490](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6490)

Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.

#### Example

```ts
true
```

***

### condition?

> `optional` **condition**: [`Condition`](../enumerations/Condition.md)

Defined in: [models/models.ts:6451](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6451)

Условие срабатывания стоп/стоп-лимитной заявки:
  * `More` - Цена срабатывания больше текущей цены
  * `Less` - Цена срабатывания меньше текущей цены
  * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
  * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:6425](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6425)

Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### instrument?

> `optional` **instrument**: `object`

Defined in: [models/models.ts:6464](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6464)

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

> `optional` **opcode**: `"update:stop"`

Defined in: [models/models.ts:6420](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6420)

Код операции

***

### orderId?

> `optional` **orderId**: `number`

Defined in: [models/models.ts:6431](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6431)

Идентификатор заявки

#### Format

int64

#### Example

```ts
18936040296
```

***

### quantity?

> `optional` **quantity**: `number`

Defined in: [models/models.ts:6443](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6443)

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

Defined in: [models/models.ts:6437](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6437)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### stopEndUnixTime?

> `optional` **stopEndUnixTime**: `number`

Defined in: [models/models.ts:6463](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6463)

Срок действия (UTC) в формате Unix Time seconds

#### Format

int64

#### Example

```ts
1590094740
```

***

### triggerPrice?

> `optional` **triggerPrice**: `number`

Defined in: [models/models.ts:6457](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6457)

Цена срабатывания

#### Format

decimal

#### Example

```ts
191.33
```

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:6479](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L6479)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
