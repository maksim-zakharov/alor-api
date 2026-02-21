# Interface: SymbolSlim

Defined in: [models/models.ts:1370](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1370)

## Properties

### acci?

> `optional` **acci**: `number` \| `null`

Defined in: [models/models.ts:1428](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1428)

Начислено

#### Format

decimal

#### Example

```ts
0
```

***

### ask?

> `optional` **ask**: `number`

Defined in: [models/models.ts:1392](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1392)

Аск

#### Format

decimal

#### Example

```ts
303.65
```

***

### bid?

> `optional` **bid**: `number`

Defined in: [models/models.ts:1398](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1398)

Бид

#### Format

decimal

#### Example

```ts
303.59
```

***

### c?

> `optional` **c**: `number`

Defined in: [models/models.ts:1404](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1404)

Последняя цена

#### Format

decimal

#### Example

```ts
303.59
```

***

### desc?

> `optional` **desc**: `string`

Defined in: [models/models.ts:1386](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1386)

Короткое описание на русском языке

#### Example

```ts
"Сбербанк России ПАО ао"
```

***

### ex?

> `optional` **ex**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:1381](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1381)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### fv?

> `optional` **fv**: `number`

Defined in: [models/models.ts:1463](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1463)

Номинальная стоимость

#### Format

decimal

#### Example

```ts
3
```

***

### h?

> `optional` **h**: `number`

Defined in: [models/models.ts:1416](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1416)

Максимальная цена

#### Format

decimal

#### Example

```ts
305
```

***

### l?

> `optional` **l**: `number`

Defined in: [models/models.ts:1422](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1422)

Минимальная цена

#### Format

decimal

#### Example

```ts
302.71
```

***

### lot?

> `optional` **lot**: `number`

Defined in: [models/models.ts:1452](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1452)

Размер лота

#### Format

decimal

#### Example

```ts
10
```

***

### lotv?

> `optional` **lotv**: `number`

Defined in: [models/models.ts:1457](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1457)

#### Format

decimal

#### Example

```ts
3035.9
```

***

### o?

> `optional` **o**: `number`

Defined in: [models/models.ts:1440](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1440)

Цена открытия

#### Format

decimal

#### Example

```ts
304.01
```

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:1375](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1375)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### t?

> `optional` **t**: `string` \| `null`

Defined in: [models/models.ts:1465](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1465)

#### Example

```ts
"CS"
```

***

### tst?

> `optional` **tst**: `number`

Defined in: [models/models.ts:1410](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1410)

Время последней цены (UTC)

#### Format

int64

#### Example

```ts
1620221538
```

***

### v?

> `optional` **v**: `number`

Defined in: [models/models.ts:1434](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1434)

Объём

#### Format

decimal

#### Example

```ts
38767080
```

***

### y?

> `optional` **y**: `number` \| `null`

Defined in: [models/models.ts:1446](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1446)

Доходность, рассчитанная по цене сделки

#### Format

int32

#### Example

```ts
null
```
