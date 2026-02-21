# Interface: CommandwsReqAuthorize

Defined in: [models/models.ts:5944](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5944)

## Properties

### guid?

> `optional` **guid**: `string` \| `null`

Defined in: [models/models.ts:5951](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5951)

Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### opcode?

> `optional` **opcode**: `"authorize"`

Defined in: [models/models.ts:5946](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5946)

Код операции

***

### token?

> `optional` **token**: `string`

Defined in: [models/models.ts:5956](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5956)

JWT токен для авторизации

#### Example

```ts
"eyJhbGciOiJ..."
```
