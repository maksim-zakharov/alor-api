# Interface: CommandwsResBadrequest

Defined in: [models/models.ts:5926](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5926)

## Properties

### httpCode?

> `optional` **httpCode**: `number`

Defined in: [models/models.ts:5936](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5936)

#### Format

int32

#### Example

```ts
400
```

***

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:5941](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5941)

Информация об ошибке

#### Example

```ts
"Invalid or unsupported quantity"
```

***

### requestGuid?

> `optional` **requestGuid**: `string`

Defined in: [models/models.ts:5931](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5931)

Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при отправке команды.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
