# Interface: BodyrequestOrdersActionsMarket

Defined in: [models/models.ts:996](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L996)

## Properties

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:1026](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1026)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### Instrument?

> `optional` **Instrument**: `object`

Defined in: [models/models.ts:1009](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1009)

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

Defined in: [models/models.ts:1044](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1044)

Время (UTC) завершения сделки в формате Unix Time seconds

#### Format

int64

#### Example

```ts
0
```

***

### Quantity?

> `optional` **Quantity**: `number`

Defined in: [models/models.ts:1002](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1002)

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

Defined in: [models/models.ts:1008](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1008)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### User?

> `optional` **User**: `object`

Defined in: [models/models.ts:1027](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1027)

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
