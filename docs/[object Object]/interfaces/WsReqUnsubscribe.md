# Interface: WsReqUnsubscribe

Defined in: [models/models.ts:5802](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5802)

## Properties

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:5814](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5814)

Уникальный идентификатор подписки, от которой отписываемся.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### opcode?

> `optional` **opcode**: `"unsubscribe"`

Defined in: [models/models.ts:5804](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5804)

Код операции

***

### token?

> `optional` **token**: `string`

Defined in: [models/models.ts:5809](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5809)

JWT токен для авторизации

#### Example

```ts
"eyJhbGciOiJ..."
```
