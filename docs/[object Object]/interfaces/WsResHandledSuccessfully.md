# Interface: WsResHandledSuccessfully

Defined in: [models/models.ts:5577](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5577)

## Properties

### httpCode?

> `optional` **httpCode**: `number`

Defined in: [models/models.ts:5588](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5588)

HTTP-код ответа

#### Format

int32

#### Example

```ts
200
```

***

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:5582](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5582)

Информация по созданной/отменённой подписке

#### Example

```ts
"Handled successfully"
```

***

### requestGuid?

> `optional` **requestGuid**: `string`

Defined in: [models/models.ts:5593](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5593)

Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при установке соединения.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
