# Interface: RiskHeavy

Defined in: [models/models.ts:4558](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4558)

## Properties

### clientType?

> `optional` **clientType**: [`ClientType`](../enumerations/ClientType.md)

Defined in: [models/models.ts:4620](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4620)

Тип клиента:
  * `StandardRisk` - Стандартный уровень риска (КСУР)
  * `HighRisk` - Высокий уровень риска (КПУР)
  * `Special` -  Особый уровень риска (КОУР)

***

### correctedMargin?

> `optional` **correctedMargin**: `number`

Defined in: [models/models.ts:4599](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4599)

Скорректированная маржа

#### Format

decimal

#### Example

```ts
15752.115
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:4569](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4569)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### hasForbiddenPositions?

> `optional` **hasForbiddenPositions**: `boolean`

Defined in: [models/models.ts:4625](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4625)

Имеются ли запретные позиции

#### Example

```ts
false
```

***

### hasNegativeQuantity?

> `optional` **hasNegativeQuantity**: `boolean`

Defined in: [models/models.ts:4630](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4630)

Имеются ли отрицательные количества

#### Example

```ts
false
```

***

### initialMargin?

> `optional` **initialMargin**: `number`

Defined in: [models/models.ts:4587](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4587)

Начальная маржа

#### Format

decimal

#### Example

```ts
15752.115
```

***

### minimalMargin?

> `optional` **minimalMargin**: `number`

Defined in: [models/models.ts:4593](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4593)

Минимальная маржа

#### Format

decimal

#### Example

```ts
65177.0575
```

***

### portfolio?

> `optional` **portfolio**: `string`

Defined in: [models/models.ts:4563](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4563)

Идентификатор клиентского портфеля

#### Example

```ts
"D49004"
```

***

### portfolioEvaluation?

> `optional` **portfolioEvaluation**: `number`

Defined in: [models/models.ts:4575](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4575)

Общая стоимость портфеля

#### Format

decimal

#### Example

```ts
646270.9
```

***

### portfolioLiquidationValue?

> `optional` **portfolioLiquidationValue**: `number`

Defined in: [models/models.ts:4581](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4581)

Стоимость ликвидного портфеля

#### Format

decimal

#### Example

```ts
646270.9
```

***

### riskCategoryId?

> `optional` **riskCategoryId**: `number`

Defined in: [models/models.ts:4613](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4613)

Категория риска.

***

### riskCoverageRatioOne?

> `optional` **riskCoverageRatioOne**: `number`

Defined in: [models/models.ts:4605](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4605)

НПР1

#### Format

decimal

#### Example

```ts
630518.785
```

***

### riskCoverageRatioTwo?

> `optional` **riskCoverageRatioTwo**: `number`

Defined in: [models/models.ts:4611](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4611)

НПР2

#### Format

decimal

#### Example

```ts
638394.8425
```
