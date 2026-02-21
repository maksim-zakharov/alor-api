# Interface: CommandwsReqUpdateLimitOrder

Defined in: [models/models.ts:6331](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6331)

## Properties

### board?

> `optional` **board**: `string` \| `null`

Defined in: [models/models.ts:6382](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6382)

Режим торгов (борд)

***

### checkDuplicates?

> `optional` **checkDuplicates**: `boolean`

Defined in: [models/models.ts:6415](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6415)

Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.

#### Example

```ts
true
```

***

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:6380](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6380)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:6338](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6338)

Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### icebergFixed?

> `optional` **icebergFixed**: `number` \| `null`

Defined in: [models/models.ts:6403](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6403)

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

Defined in: [models/models.ts:6410](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6410)

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

Defined in: [models/models.ts:6363](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6363)

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

> `optional` **opcode**: `"update:limit"`

Defined in: [models/models.ts:6333](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6333)

Код операции

***

### orderId?

> `optional` **orderId**: `number`

Defined in: [models/models.ts:6344](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6344)

Идентификатор заявки

#### Format

int64

#### Example

```ts
18936040296
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:6362](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6362)

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

Defined in: [models/models.ts:6356](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6356)

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

Defined in: [models/models.ts:6350](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6350)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### timeInForce?

> `optional` **timeInForce**: [`TimeInForce`](../enumerations/TimeInForce.md)

Defined in: [models/models.ts:6397](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6397)

Тип заявки:
  * `OneDay` - До конца дня
  * `ImmediateOrCancel` - Снять остаток
  * `FillOrKill` - Исполнить целиком или отклонить
  * `GoodTillCancelled` - Активна до отмены

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:6383](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6383)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
