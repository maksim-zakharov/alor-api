# Interface: BodyrequestOrdersActionsLimitTVput

Defined in: [models/models.ts:333](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L333)

## Properties

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:374](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L374)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### icebergFixed?

> `optional` **icebergFixed**: `number`

Defined in: [models/models.ts:395](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L395)

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

Defined in: [models/models.ts:402](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L402)

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

Defined in: [models/models.ts:357](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L357)

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

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:356](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L356)

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

Defined in: [models/models.ts:350](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L350)

Количество

#### Format

int32

#### Example

```ts
2
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:339](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L339)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### timeInForce?

> `optional` **timeInForce**: [`TimeInForce`](../enumerations/TimeInForce.md)

Defined in: [models/models.ts:389](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L389)

Тип заявки:
  * `OneDay` - До конца дня
  * `ImmediateOrCancel` - Снять остаток
  * `FillOrKill` - Исполнить целиком или отклонить
  * `GoodTillCancelled` - Активна до отмены

***

### type?

> `optional` **type**: `string`

Defined in: [models/models.ts:344](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L344)

Тип заявки

#### Example

```ts
"limit"
```

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:375](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L375)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
