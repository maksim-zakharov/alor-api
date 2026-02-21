# Interface: BodyrequestOrdersActionsStopLimitTVWarp

Defined in: [models/models.ts:599](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L599)

## Properties

### activate?

> `optional` **activate**: `boolean`

Defined in: [models/models.ts:695](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L695)

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

### condition?

> `optional` **condition**: [`Condition`](../enumerations/Condition.md)

Defined in: [models/models.ts:613](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L613)

Условие срабатывания стоп/стоп-лимитной заявки:
  * `More` - Цена срабатывания больше текущей цены
  * `Less` - Цена срабатывания меньше текущей цены
  * `MoreOrEqual` - Цена срабатывания больше или равна текущей цене
  * `LessOrEqual` - Цена срабатывания меньше или равна текущей цене

***

### icebergFixed?

> `optional` **icebergFixed**: `number`

Defined in: [models/models.ts:682](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L682)

Видимая постоянная часть айсберг-заявки в лотах

#### Format

int32

#### Example

```ts
100
```

***

### icebergVariance?

> `optional` **icebergVariance**: `number`

Defined in: [models/models.ts:689](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L689)

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

Defined in: [models/models.ts:638](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L638)

#### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

#### instrumentGroup?

> `optional` **instrumentGroup**: `string`

Борд

##### Example

```ts
"TQBR"
```

#### symbol?

> `optional` **symbol**: `string`

Тикер (Код финансового инструмента)

##### Example

```ts
"SBER"
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:631](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L631)

Цена выставления стоп-лимитной заявки

#### Format

decimal

#### Example

```ts
191.33
```

***

### quantity?

> `optional` **quantity**: `number`

Defined in: [models/models.ts:637](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L637)

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

Defined in: [models/models.ts:605](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L605)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### stopEndUnixTime?

> `optional` **stopEndUnixTime**: `number`

Defined in: [models/models.ts:625](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L625)

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

Defined in: [models/models.ts:676](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L676)

Тип заявки:
  * `OneDay` - До конца дня
  * `ImmediateOrCancel` - Снять остаток
  * `FillOrKill` - Исполнить целиком или отклонить
  * `GoodTillCancelled` - Активна до отмены

***

### triggerPrice?

> `optional` **triggerPrice**: `number`

Defined in: [models/models.ts:619](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L619)

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

Defined in: [models/models.ts:656](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L656)

#### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
