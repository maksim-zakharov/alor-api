# Interface: WsResSlimOrderBookGetAndSubscribe

Defined in: [models/models.ts:5287](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5287)

## Properties

### data?

> `optional` **data**: [`OrderbookSlim`](OrderbookSlim.md)

Defined in: [models/models.ts:5289](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5289)

Данные о запрашиваемом "биржевом стакане"

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:5294](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5294)

Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
