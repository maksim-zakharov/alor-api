# Type Alias: WsReqOrdersGetAndSubscribe

> **WsReqOrdersGetAndSubscribe** = `object` & [`WsReqBaseObject`](../interfaces/WsReqBaseObject.md)

Defined in: [models/models.ts:5780](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5780)

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
