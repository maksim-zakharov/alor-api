# Type Alias: WsReqAllTradesGetAndSubscribe

> **WsReqAllTradesGetAndSubscribe** = `object` & [`WsReqBaseObject`](../interfaces/WsReqBaseObject.md)

Defined in: [models/models.ts:5705](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L5705)

## Type Declaration

### depth?

> `optional` **depth**: `number`

Если указать, то перед актуальными данными придут данные о последних N сделках.

#### Format

int32

#### Max

5000

#### Example

```ts
50
```

### includeVirtualTrades?

> `optional` **includeVirtualTrades**: `boolean`

Указывает, нужно ли отправлять виртуальные (индикативные) сделки

#### Example

```ts
false
```

### opcode?

> `optional` **opcode**: `"AllTradesGetAndSubscribe"`

Код операции

### token?

> `optional` **token**: `string`

JWT токен для авторизации

#### Example

```ts
"eyJhbGciOiJ..."
```
