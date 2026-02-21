# Interface: CommandwsResBadrequest

Defined in: [models/models.ts:5926](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5926)

## Properties

### httpCode?

> `optional` **httpCode**: `number`

Defined in: [models/models.ts:5936](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5936)

#### Format

int32

#### Example

```ts
400
```

***

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:5941](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5941)

Информация об ошибке

#### Example

```ts
"Invalid or unsupported quantity"
```

***

### requestGuid?

> `optional` **requestGuid**: `string`

Defined in: [models/models.ts:5931](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5931)

Уникальный идентификатор подписки. Значение во входящем сообщении равно значению поля \"guid\", переданному при отправке команды.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```
