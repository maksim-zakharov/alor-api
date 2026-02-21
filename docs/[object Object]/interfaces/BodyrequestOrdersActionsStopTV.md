# Interface: BodyrequestOrdersActionsStopTV

Defined in: [models/models.ts:743](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L743)

## Properties

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:808](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L808)

Срок действия

#### Format

date-time

#### Example

```ts
"2020-05-21T20:59:00.000Z"
```

***

### instrument?

> `optional` **instrument**: `object`

Defined in: [models/models.ts:778](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L778)

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

### quantity?

> `optional` **quantity**: `number`

Defined in: [models/models.ts:777](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L777)

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

Defined in: [models/models.ts:754](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L754)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### stopEndUnixTime?

> `optional` **stopEndUnixTime**: `number`

Defined in: [models/models.ts:814](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L814)

Срок действия (UTC) в формате Unix Time seconds

#### Format

int64

#### Example

```ts
1590094740
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:748](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L748)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### takeProfit?

> `optional` **takeProfit**: `number`

Defined in: [models/models.ts:765](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L765)

Стоп-цена

#### Format

decimal

#### Example

```ts
190.98
```

***

### triggerPrice?

> `optional` **triggerPrice**: `number`

Defined in: [models/models.ts:771](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L771)

Стоп-цена

#### Format

decimal

#### Example

```ts
190.98
```

***

### type?

> `optional` **type**: `string`

Defined in: [models/models.ts:759](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L759)

Тип заявки

#### Example

```ts
"takeprofit"
```

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:791](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L791)

#### account?

> `optional` **account**: `string`

Идентификатор аккаунта пользователя

##### Example

```ts
"L01-00000F00"
```

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
