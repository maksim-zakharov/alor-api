# Interface: BodyrequestOrdersActionsStop

Defined in: [models/models.ts:1047](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1047)

## Properties

### Instrument?

> `optional` **Instrument**: `object`

Defined in: [models/models.ts:1067](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1067)

Информация об инструмента и бирже

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

Defined in: [models/models.ts:1098](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1098)

Время (UTC) завершения сделки в формате Unix Time Seconds

#### Format

int64

#### Example

```ts
0
```

***

### Quantity?

> `optional` **Quantity**: `number`

Defined in: [models/models.ts:1053](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1053)

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

Defined in: [models/models.ts:1059](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1059)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### TriggerPrice?

> `optional` **TriggerPrice**: `number`

Defined in: [models/models.ts:1065](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1065)

Стоп-цена

#### Format

decimal

#### Example

```ts
215.11
```

***

### User?

> `optional` **User**: `object`

Defined in: [models/models.ts:1081](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1081)

Информация о пользователе

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
