# Interface: WsResOrderBookGetAndSubscribe

Defined in: [models/models.ts:5277](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5277)

## Properties

### data?

> `optional` **data**: [`Orderbook`](Orderbook.md)

Defined in: [models/models.ts:5279](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5279)

Данные о запрашиваемом "биржевом стакане"

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:5284](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5284)

Уникальный идентификатор сообщений подписки. Значение во входящем сообщении равно значению одноимённого поля, переданному при установке соединения.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
