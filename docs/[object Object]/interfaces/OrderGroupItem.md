# Interface: OrderGroupItem

Defined in: [models/models.ts:1215](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1215)

## Properties

### Exchange?

> `optional` **Exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:1222](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1222)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### OrderId?

> `optional` **OrderId**: `string`

Defined in: [models/models.ts:1227](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1227)

Идентификатор заявки

#### Example

```ts
1532944860
```

***

### Portfolio?

> `optional` **Portfolio**: `string`

Defined in: [models/models.ts:1216](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1216)

***

### Type?

> `optional` **Type**: [`OrderType`](../enumerations/OrderType.md)

Defined in: [models/models.ts:1235](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1235)

Тип заявки:
 * Market - Рыночная заявка
 * Limit - Лимитная заявка
 * Stop - Стоп-заявка
 * StopLimit - Стоп-лимит заявка
