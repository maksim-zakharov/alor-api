# Interface: Risk

Defined in: [models/models.ts:4408](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4408)

## Properties

### clientType?

> `optional` **clientType**: [`ClientType`](../enumerations/ClientType.md)

Defined in: [models/models.ts:4470](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4470)

Тип клиента:
  * `StandardRisk` - Стандартный уровень риска (КСУР)
  * `HighRisk` - Высокий уровень риска (КПУР)
  * `Special` -  Особый уровень риска (КОУР)

***

### correctedMargin?

> `optional` **correctedMargin**: `number`

Defined in: [models/models.ts:4449](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4449)

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

Defined in: [models/models.ts:4419](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4419)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### hasForbiddenPositions?

> `optional` **hasForbiddenPositions**: `boolean`

Defined in: [models/models.ts:4475](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4475)

Имеются ли запретные позиции

#### Example

```ts
false
```

***

### hasNegativeQuantity?

> `optional` **hasNegativeQuantity**: `boolean`

Defined in: [models/models.ts:4480](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4480)

Имеются ли отрицательные количества

#### Example

```ts
false
```

***

### initialMargin?

> `optional` **initialMargin**: `number`

Defined in: [models/models.ts:4437](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4437)

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

Defined in: [models/models.ts:4443](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4443)

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

Defined in: [models/models.ts:4413](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4413)

Идентификатор клиентского портфеля

#### Example

```ts
"D49004"
```

***

### portfolioEvaluation?

> `optional` **portfolioEvaluation**: `number`

Defined in: [models/models.ts:4425](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4425)

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

Defined in: [models/models.ts:4431](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4431)

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

Defined in: [models/models.ts:4463](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4463)

Категория риска.

***

### riskCoverageRatioOne?

> `optional` **riskCoverageRatioOne**: `number`

Defined in: [models/models.ts:4455](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4455)

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

Defined in: [models/models.ts:4461](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4461)

НПР2

#### Format

decimal

#### Example

```ts
638394.8425
```
