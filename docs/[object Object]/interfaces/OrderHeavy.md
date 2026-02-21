# Interface: OrderHeavy

Defined in: [models/models.ts:3285](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3285)

## Properties

### brokerSymbol?

> `optional` **brokerSymbol**: `string`

Defined in: [models/models.ts:3300](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3300)

Пара биржа-Тикер

#### Example

```ts
"MOEX:SBER"
```

***

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:3311](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3311)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### endTime?

> `optional` **endTime**: `string`

Defined in: [models/models.ts:3344](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3344)

Время завершения (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:3306](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3306)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### existing?

> `optional` **existing**: `boolean`

Defined in: [models/models.ts:3379](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3379)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
true
```

***

### filledQtyBatch?

> `optional` **filledQtyBatch**: `number`

Defined in: [models/models.ts:3368](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3368)

Количество исполненных (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### filledQtyUnits?

> `optional` **filledQtyUnits**: `number`

Defined in: [models/models.ts:3362](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3362)

Количество исполненных (штуки)

#### Format

decimal

#### Example

```ts
1
```

***

### id?

> `optional` **id**: `string`

Defined in: [models/models.ts:3290](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3290)

Уникальный идентификатор заявки

#### Example

```ts
"18995978560"
```

***

### price?

> `optional` **price**: `number`

Defined in: [models/models.ts:3374](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3374)

Цена

#### Format

decimal

#### Example

```ts
208.6
```

***

### qtyBatch?

> `optional` **qtyBatch**: `number`

Defined in: [models/models.ts:3356](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3356)

Количество (лоты)

#### Format

decimal

#### Example

```ts
1
```

***

### qtyUnits?

> `optional` **qtyUnits**: `number`

Defined in: [models/models.ts:3350](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3350)

Количество (штуки)

#### Format

int32

#### Example

```ts
1
```

***

### side?

> `optional` **side**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:3324](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3324)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### status?

> `optional` **status**: [`OrderStatus`](../enumerations/OrderStatus.md)

Defined in: [models/models.ts:3332](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3332)

Статус исполнения:
  * `working` - На исполнении
  * `filled` - Исполнена
  * `canceled` - Отменена
  * `rejected` - Отклонена

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:3295](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3295)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### transTime?

> `optional` **transTime**: `string`

Defined in: [models/models.ts:3338](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3338)

Время выставления (UTC)

#### Format

date-time

#### Example

```ts
"2020-06-16T23:59:59.9990000"
```

***

### type?

> `optional` **type**: `"limit"` \| `"market"`

Defined in: [models/models.ts:3318](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3318)

Тип заявки:
  * `limit` - Лимитная заявка
  * `market` - Рыночная заявка

#### Example

```ts
"market"
```

***

### volume?

> `optional` **volume**: `number` \| `null`

Defined in: [models/models.ts:3385](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L3385)

Объем, для рыночных заявок - null

#### Format

decimal

#### Example

```ts
2086.3
```
