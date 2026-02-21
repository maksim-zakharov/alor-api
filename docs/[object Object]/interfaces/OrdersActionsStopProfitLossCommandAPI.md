# Interface: OrdersActionsStopProfitLossCommandAPI

Defined in: [models/models.ts:251](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L251)

## Properties

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:256](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L256)

Вид ответа на успешно выполненный запрос.

#### Example

```ts
"Succeeded, OrderNo=326123, EndTime={08.08.18  23:59:59}"
```

***

### orderNumber?

> `optional` **orderNumber**: `number`

Defined in: [models/models.ts:262](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L262)

Идентификатор заявки

#### Format

int64

#### Example

```ts
326123
```
