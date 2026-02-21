# Type Alias: WsReqOrderBookGetAndSubscribe

> **WsReqOrderBookGetAndSubscribe** = `object` & [`WsReqBaseObject`](../interfaces/WsReqBaseObject.md)

Defined in: [models/models.ts:5622](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5622)

## Type Declaration

### code?

> `optional` **code**: `string`

Тикер

#### Example

```ts
"SBER"
```

### depth?

> `optional` **depth**: `number`

Глубина стакана. Стандартное и максимальное значение - 20 (20х20).

#### Format

int32

#### Max

20

#### Default

```ts
20
```

#### Example

```ts
10
```

### opcode?

> `optional` **opcode**: `"OrderBookGetAndSubscribe"`

Код операции

#### Example

```ts
"OrderBookGetAndSubscribe"
```
