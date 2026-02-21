# Interface: OrdersActionsStopProfitLoss

Defined in: [models/models.ts:919](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L919)

## Properties

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:924](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L924)

Вид ответа на успешно выполненный запрос.

#### Example

```ts
"Succeeded, OrderNo=326123, EndTime={08.08.18  23:59:59}, OrderEndTime=(None)"
```

***

### orderNumber?

> `optional` **orderNumber**: `number`

Defined in: [models/models.ts:930](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L930)

Идентификатор заявки

#### Format

int64

#### Example

```ts
326123
```
