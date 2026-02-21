# Interface: BodyrequestOrdersActionsStopLimitTV

Defined in: [models/models.ts:817](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L817)

## Properties

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:888](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L888)

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

Defined in: [models/models.ts:858](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L858)

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

Defined in: [models/models.ts:834](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L834)

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

Defined in: [models/models.ts:857](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L857)

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

Defined in: [models/models.ts:828](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L828)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### stopEndUnixTime?

> `optional` **stopEndUnixTime**: `number`

Defined in: [models/models.ts:894](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L894)

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

Defined in: [models/models.ts:822](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L822)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### takeProfit?

> `optional` **takeProfit**: `number`

Defined in: [models/models.ts:845](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L845)

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

Defined in: [models/models.ts:851](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L851)

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

Defined in: [models/models.ts:839](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L839)

Тип заявки

#### Example

```ts
"takeprofit"
```

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:871](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L871)

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
