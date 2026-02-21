# Interface: RiskRatesParams

Defined in: [models/models.ts:7298](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7298)

## Properties

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7304](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7304)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### riskCategoryId?

> `optional` **riskCategoryId**: `number`

Defined in: [models/models.ts:7314](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7314)

Id вашей (или той которая интересует) категории риска. Можно получить из запроса информации по клиенту или через кабинет клиента

#### Example

```ts
1
```

***

### search?

> `optional` **search**: `string`

Defined in: [models/models.ts:7319](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7319)

Часть Тикера\кода инструмента, ISIN для облигаций. Вернет все совпадения, начинающиеся с

#### Example

```ts
"SBER"
```

***

### ticker?

> `optional` **ticker**: `string`

Defined in: [models/models.ts:7309](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7309)

Тикер\код инструмента, ISIN для облигаций

#### Example

```ts
"SBER"
```
