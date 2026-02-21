# Interface: OrderGroupItem

Defined in: [models/models.ts:1215](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1215)

## Properties

### Exchange?

> `optional` **Exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:1222](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1222)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### OrderId?

> `optional` **OrderId**: `string`

Defined in: [models/models.ts:1227](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1227)

Идентификатор заявки

#### Example

```ts
1532944860
```

***

### Portfolio?

> `optional` **Portfolio**: `string`

Defined in: [models/models.ts:1216](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1216)

***

### Type?

> `optional` **Type**: [`OrderType`](../enumerations/OrderType.md)

Defined in: [models/models.ts:1235](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1235)

Тип заявки:
 * Market - Рыночная заявка
 * Limit - Лимитная заявка
 * Stop - Стоп-заявка
 * StopLimit - Стоп-лимит заявка
