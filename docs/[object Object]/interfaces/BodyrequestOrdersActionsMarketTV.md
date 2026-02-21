# Interface: BodyrequestOrdersActionsMarketTV

Defined in: [models/models.ts:698](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L698)

## Properties

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:733](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L733)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### instrument?

> `optional` **instrument**: `object`

Defined in: [models/models.ts:716](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L716)

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

Defined in: [models/models.ts:715](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L715)

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

Defined in: [models/models.ts:704](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L704)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### type?

> `optional` **type**: `string`

Defined in: [models/models.ts:709](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L709)

Тип заявки

#### Example

```ts
"market"
```

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:734](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L734)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
