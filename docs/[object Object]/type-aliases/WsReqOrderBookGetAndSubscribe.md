# Type Alias: WsReqOrderBookGetAndSubscribe

> **WsReqOrderBookGetAndSubscribe** = `object` & [`WsReqBaseObject`](../interfaces/WsReqBaseObject.md)

Defined in: [models/models.ts:5622](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L5622)

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
