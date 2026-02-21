# Interface: WsResHandledSuccessfully

Defined in: [models/models.ts:5577](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5577)

## Properties

### httpCode?

> `optional` **httpCode**: `number`

Defined in: [models/models.ts:5588](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5588)

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

Defined in: [models/models.ts:5582](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5582)

Информация по созданной/отменённой подписке

#### Example

```ts
"Handled successfully"
```

***

### requestGuid?

> `optional` **requestGuid**: `string`

Defined in: [models/models.ts:5593](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5593)

Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при установке соединения.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
