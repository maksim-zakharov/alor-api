# Interface: BodyrequestOrdersActionsStoplimit

Defined in: [models/models.ts:1101](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1101)

## Properties

### icebergFixed?

> `optional` **icebergFixed**: `number`

Defined in: [models/models.ts:1170](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1170)

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

Defined in: [models/models.ts:1177](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1177)

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

### Instrument?

> `optional` **Instrument**: `object`

Defined in: [models/models.ts:1126](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1126)

#### Exchange?

> `optional` **Exchange**: [`Exchange`](../enumerations/Exchange.md)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

#### Symbol?

> `optional` **Symbol**: `string`

Тикер (Код финансового инструмента)

##### Example

```ts
"SBER"
```

***

### OrderEndUnixTime?

> `optional` **OrderEndUnixTime**: `number`

Defined in: [models/models.ts:1156](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1156)

Время (UTC) завершения сделки в формате Unix Time seconds

#### Format

int64

#### Example

```ts
0
```

***

### Price?

> `optional` **Price**: `number`

Defined in: [models/models.ts:1125](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1125)

Цена

#### Format

decimal

#### Example

```ts
210.11
```

***

### Quantity?

> `optional` **Quantity**: `number`

Defined in: [models/models.ts:1107](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1107)

Количество

#### Format

int32

#### Example

```ts
1
```

***

### Side?

> `optional` **Side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:1113](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1113)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### timeInForce?

> `optional` **timeInForce**: [`TimeInForce`](../enumerations/TimeInForce.md)

Defined in: [models/models.ts:1164](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1164)

Тип заявки:
  * `OneDay` - До конца дня
  * `ImmediateOrCancel` - Снять остаток
  * `FillOrKill` - Исполнить целиком или отклонить
  * `GoodTillCancelled` - Активна до отмены

***

### TriggerPrice?

> `optional` **TriggerPrice**: `number`

Defined in: [models/models.ts:1119](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1119)

Стоп-цена

#### Format

decimal

#### Example

```ts
205.11
```

***

### User?

> `optional` **User**: `object`

Defined in: [models/models.ts:1139](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1139)

#### Account?

> `optional` **Account**: `string`

Идентификатор аккаунта пользователя

##### Example

```ts
"L01-00000F00"
```

#### Portfolio?

> `optional` **Portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
