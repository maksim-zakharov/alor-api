# Interface: CommandwsResAuthorize

Defined in: [models/models.ts:5888](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5888)

## Properties

### httpCode?

> `optional` **httpCode**: `number`

Defined in: [models/models.ts:5899](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5899)

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

Defined in: [models/models.ts:5904](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5904)

Информация об инициализации токена.

#### Example

```ts
"The connection has been initialized."
```

***

### requestGuid?

> `optional` **requestGuid**: `string`

Defined in: [models/models.ts:5893](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5893)

Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при отправке команды.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
