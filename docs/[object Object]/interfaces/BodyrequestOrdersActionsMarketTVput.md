# Interface: BodyrequestOrdersActionsMarketTVput

Defined in: [models/models.ts:405](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L405)

## Properties

### comment?

> `optional` **comment**: `string`

Defined in: [models/models.ts:440](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L440)

Пользовательский комментарий к заявке

#### Example

```ts
"первая заявка"
```

***

### instrument?

> `optional` **instrument**: `object`

Defined in: [models/models.ts:423](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L423)

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

Defined in: [models/models.ts:422](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L422)

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

Defined in: [models/models.ts:411](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L411)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### type?

> `optional` **type**: `string`

Defined in: [models/models.ts:416](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L416)

Тип заявки

#### Example

```ts
"market"
```

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:441](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L441)

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
