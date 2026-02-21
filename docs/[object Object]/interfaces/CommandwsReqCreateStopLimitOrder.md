# Interface: CommandwsReqCreateStopLimitOrder

Defined in: [models/models.ts:6169](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6169)

## Properties

### activate?

> `optional` **activate**: `boolean`

Defined in: [models/models.ts:6268](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6268)

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

Defined in: [models/models.ts:6229](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6229)

Режим торгов (борд)

***

### checkDuplicates?

> `optional` **checkDuplicates**: `boolean`

Defined in: [models/models.ts:6262](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6262)

Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.

#### Example

```ts
true
```

***

### condition?

> `optional` **condition**: [`Condition`](../enumerations/Condition.md)

Defined in: [models/models.ts:6202](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6202)

Условие срабатывания стоп/стоп-лимитной заявки:
  * `More` - Цена срабатывания больше текущей цены
  * `Less` - Цена срабатывания меньше текущей цены
  * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
  * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:6176](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6176)

Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### icebergFixed?

> `optional` **icebergFixed**: `number` \| `null`

Defined in: [models/models.ts:6250](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6250)

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

Defined in: [models/models.ts:6257](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6257)

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

Defined in: [models/models.ts:6215](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6215)

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

> `optional` **opcode**: `"create:stopLimit"`

Defined in: [models/models.ts:6171](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6171)

Код операции

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:6194](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6194)

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

Defined in: [models/models.ts:6188](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6188)

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

Defined in: [models/models.ts:6182](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6182)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### stopEndUnixTime?

> `optional` **stopEndUnixTime**: `number`

Defined in: [models/models.ts:6214](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6214)

Срок действия (UTC) в формате Unix Time seconds

#### Format

int64

#### Example

```ts
1590094740
```

***

### timeInForce?

> `optional` **timeInForce**: [`TimeInForce`](../enumerations/TimeInForce.md)

Defined in: [models/models.ts:6244](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6244)

Тип заявки:
  * `OneDay` - До конца дня
  * `ImmediateOrCancel` - Снять остаток
  * `FillOrKill` - Исполнить целиком или отклонить
  * `GoodTillCancelled` - Активна до отмены

***

### triggerPrice?

> `optional` **triggerPrice**: `number`

Defined in: [models/models.ts:6208](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6208)

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

Defined in: [models/models.ts:6230](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6230)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
