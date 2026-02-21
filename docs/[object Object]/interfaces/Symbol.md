# Interface: Symbol

Defined in: [models/models.ts:1240](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1240)

## Properties

### ~~accrued\_interest?~~

> `optional` **accrued\_interest**: `number`

Defined in: [models/models.ts:1323](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1323)

Начислено (НКД)

#### Deprecated

#### Format

decimal

#### Example

```ts
0
```

***

### accruedInt?

> `optional` **accruedInt**: `number`

Defined in: [models/models.ts:1316](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1316)

Начислено (НКД)

#### Format

decimal

#### Example

```ts
0
```

***

### ask?

> `optional` **ask**: `number`

Defined in: [models/models.ts:1262](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1262)

Аск

#### Format

decimal

#### Example

```ts
171.87
```

***

### bid?

> `optional` **bid**: `number`

Defined in: [models/models.ts:1268](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1268)

Бид

#### Format

decimal

#### Example

```ts
171.82
```

***

### change?

> `optional` **change**: `number`

Defined in: [models/models.ts:1292](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1292)

Разность цены и цены предыдущего закрытия

#### Format

decimal

#### Example

```ts
-3.08
```

***

### change\_percent?

> `optional` **change\_percent**: `number`

Defined in: [models/models.ts:1298](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1298)

Относительное изменение цены

#### Format

decimal

#### Example

```ts
-1.76
```

***

### description?

> `optional` **description**: `string`

Defined in: [models/models.ts:1256](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1256)

Короткое описание на русском языке

#### Example

```ts
"КМЗ"
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:1251](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1251)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### facevalue?

> `optional` **facevalue**: `number`

Defined in: [models/models.ts:1363](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1363)

Номинальная стоимость

#### Format

decimal

#### Example

```ts
5
```

***

### high\_price?

> `optional` **high\_price**: `number`

Defined in: [models/models.ts:1304](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1304)

Максимальная цена

#### Format

decimal

#### Example

```ts
176.02
```

***

### last\_price?

> `optional` **last\_price**: `number`

Defined in: [models/models.ts:1280](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1280)

Последняя цена

#### Format

decimal

#### Example

```ts
171.82
```

***

### last\_price\_timestamp?

> `optional` **last\_price\_timestamp**: `number`

Defined in: [models/models.ts:1286](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1286)

UTC-timestamp для значения поля "last_price"

#### Format

int64

#### Example

```ts
1610982677
```

***

### lotsize?

> `optional` **lotsize**: `number`

Defined in: [models/models.ts:1352](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1352)

Размер лота

#### Format

decimal

#### Example

```ts
10
```

***

### lotvalue?

> `optional` **lotvalue**: `number`

Defined in: [models/models.ts:1357](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1357)

#### Format

decimal

#### Example

```ts
1990.2
```

***

### low\_price?

> `optional` **low\_price**: `number`

Defined in: [models/models.ts:1310](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1310)

Минимальная цена

#### Format

decimal

#### Example

```ts
170.33
```

***

### open\_interest?

> `optional` **open\_interest**: `number` \| `null`

Defined in: [models/models.ts:1334](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1334)

#### Format

decimal

#### Example

```ts
null
```

***

### open\_price?

> `optional` **open\_price**: `number`

Defined in: [models/models.ts:1340](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1340)

Цена открытия

#### Format

decimal

#### Example

```ts
175.07
```

***

### prev\_close\_price?

> `optional` **prev\_close\_price**: `number`

Defined in: [models/models.ts:1274](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1274)

Цена предыдущего закрытия

#### Format

decimal

#### Example

```ts
174.9
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:1245](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1245)

Тикер (Код финансового инструмента)

#### Example

```ts
"KMEZ"
```

***

### type?

> `optional` **type**: `string` \| `null`

Defined in: [models/models.ts:1365](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1365)

#### Example

```ts
"CS"
```

***

### volume?

> `optional` **volume**: `number`

Defined in: [models/models.ts:1329](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1329)

Объём

#### Format

decimal

#### Example

```ts
38767080
```

***

### yield?

> `optional` **yield**: `number` \| `null`

Defined in: [models/models.ts:1346](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1346)

Доходность, рассчитанная по цене сделки

#### Format

int32

#### Example

```ts
null
```
