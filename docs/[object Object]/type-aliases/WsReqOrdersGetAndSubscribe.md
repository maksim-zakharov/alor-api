# Type Alias: WsReqOrdersGetAndSubscribe

> **WsReqOrdersGetAndSubscribe** = `object` & [`WsReqBaseObject`](../interfaces/WsReqBaseObject.md)

Defined in: [models/models.ts:5780](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5780)

## Type Declaration

### opcode?

> `optional` **opcode**: `"OrdersGetAndSubscribeV2"`

Код операции

### orderStatuses?

> `optional` **orderStatuses**: [`OrderStatus`](../enumerations/OrderStatus.md)[]

Опциональный фильтр по статусам заявок. Влияет только на фильтрацию первичных исторических данных при подписке

### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

#### Example

```ts
"D61971"
```
