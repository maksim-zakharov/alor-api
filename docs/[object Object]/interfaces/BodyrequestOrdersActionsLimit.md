# Interface: BodyrequestOrdersActionsLimit

Defined in: [models/models.ts:939](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L939)

## Properties

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:975](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L975)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### Instrument?

> `optional` **Instrument**: `object`

Defined in: [models/models.ts:958](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L958)

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

Defined in: [models/models.ts:993](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L993)

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

Defined in: [models/models.ts:957](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L957)

Цена

#### Format

decimal

#### Example

```ts
195.11
```

***

### Quantity?

> `optional` **Quantity**: `number`

Defined in: [models/models.ts:945](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L945)

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

Defined in: [models/models.ts:951](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L951)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### User?

> `optional` **User**: `object`

Defined in: [models/models.ts:976](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L976)

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
