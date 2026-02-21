# Interface: EstimateOrderModel

Defined in: [models/models.ts:5818](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5818)

Модель результата оценки стоимости и количества в лотах

## Properties

### commission?

> `optional` **commission**: `number`

Defined in: [models/models.ts:5858](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5858)

Комиссия

#### Format

decimal

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:5828](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5828)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### notMarginQuantityToBuy?

> `optional` **notMarginQuantityToBuy**: `number`

Defined in: [models/models.ts:5848](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5848)

Количество в лотах к покупке без плеча

#### Format

decimal

***

### notMarginQuantityToSell?

> `optional` **notMarginQuantityToSell**: `number`

Defined in: [models/models.ts:5843](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5843)

Количество в лотах к продаже без плеча

#### Format

decimal

***

### orderEvaluation?

> `optional` **orderEvaluation**: `number`

Defined in: [models/models.ts:5853](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5853)

Стоимость заявки

#### Format

decimal

***

### portfolio?

> `optional` **portfolio**: `string` \| `null`

Defined in: [models/models.ts:5820](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5820)

Портфель клиента

***

### quantityToBuy?

> `optional` **quantityToBuy**: `number`

Defined in: [models/models.ts:5838](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5838)

Количество в лотах к покупке с плечом

#### Format

decimal

***

### quantityToSell?

> `optional` **quantityToSell**: `number`

Defined in: [models/models.ts:5833](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5833)

Количество в лотах к продаже с плечом

#### Format

decimal

***

### ticker?

> `optional` **ticker**: `string` \| `null`

Defined in: [models/models.ts:5822](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5822)

Инструмент
