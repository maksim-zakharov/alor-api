# Interface: CommandwsResHandledSuccessfully

Defined in: [models/models.ts:5907](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5907)

## Properties

### httpCode?

> `optional` **httpCode**: `number`

Defined in: [models/models.ts:5918](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5918)

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

Defined in: [models/models.ts:5923](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5923)

Информация о результате выполнения команды

#### Example

```ts
"An order '12345' has been created."
```

***

### requestGuid?

> `optional` **requestGuid**: `string`

Defined in: [models/models.ts:5912](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5912)

Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при отправке команды.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
