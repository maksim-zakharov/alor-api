# Interface: WsResHeavyOrderBookGetAndSubscribe

Defined in: [models/models.ts:5297](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5297)

## Properties

### data?

> `optional` **data**: [`OrderbookHeavy`](OrderbookHeavy.md)

Defined in: [models/models.ts:5299](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5299)

Данные о запрашиваемом "биржевом стакане"

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:5304](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5304)

Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
