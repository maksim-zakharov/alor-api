# Interface: RiskSlim

Defined in: [models/models.ts:4483](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4483)

## Properties

### ct?

> `optional` **ct**: [`ClientType`](../enumerations/ClientType.md)

Defined in: [models/models.ts:4545](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4545)

Тип клиента:
  * `StandardRisk` - Стандартный уровень риска (КСУР)
  * `HighRisk` - Высокий уровень риска (КПУР)
  * `Special` -  Особый уровень риска (КОУР)

***

### ex?

> `optional` **ex**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:4494](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4494)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### fpos?

> `optional` **fpos**: `boolean`

Defined in: [models/models.ts:4550](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4550)

Имеются ли запретные позиции

#### Example

```ts
false
```

***

### mgc?

> `optional` **mgc**: `number`

Defined in: [models/models.ts:4524](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4524)

Скорректированная маржа

#### Format

decimal

#### Example

```ts
15752.115
```

***

### mgi?

> `optional` **mgi**: `number`

Defined in: [models/models.ts:4512](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4512)

Начальная маржа

#### Format

decimal

#### Example

```ts
15752.115
```

***

### mgmn?

> `optional` **mgmn**: `number`

Defined in: [models/models.ts:4518](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4518)

Минимальная маржа

#### Format

decimal

#### Example

```ts
65177.0575
```

***

### nq?

> `optional` **nq**: `boolean`

Defined in: [models/models.ts:4555](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4555)

Имеются ли отрицательные количества

#### Example

```ts
false
```

***

### p?

> `optional` **p**: `string`

Defined in: [models/models.ts:4488](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4488)

Идентификатор клиентского портфеля

#### Example

```ts
"D49004"
```

***

### pe?

> `optional` **pe**: `number`

Defined in: [models/models.ts:4500](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4500)

Общая стоимость портфеля

#### Format

decimal

#### Example

```ts
646270.9
```

***

### plv?

> `optional` **plv**: `number`

Defined in: [models/models.ts:4506](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4506)

Стоимость ликвидного портфеля

#### Format

decimal

#### Example

```ts
646270.9
```

***

### r1?

> `optional` **r1**: `number`

Defined in: [models/models.ts:4530](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4530)

НПР1

#### Format

decimal

#### Example

```ts
630518.785
```

***

### r2?

> `optional` **r2**: `number`

Defined in: [models/models.ts:4536](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4536)

НПР2

#### Format

decimal

#### Example

```ts
638394.8425
```

***

### rid?

> `optional` **rid**: `number`

Defined in: [models/models.ts:4538](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4538)

Категория риска.
