# Type Alias: WsReqOrdersGetAndSubscribe

> **WsReqOrdersGetAndSubscribe** = `object` & [`WsReqBaseObject`](../interfaces/WsReqBaseObject.md)

Defined in: [models/models.ts:5780](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5780)

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
