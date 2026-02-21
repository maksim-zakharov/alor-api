# Type Alias: WsReqBarsGetAndSubscribe

> **WsReqBarsGetAndSubscribe** = `object` & [`WsReqBaseObject`](../interfaces/WsReqBaseObject.md)

Defined in: [models/models.ts:5643](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L5643)

## Type Declaration

### code?

> `optional` **code**: `string`

Тикер

#### Example

```ts
"SBER"
```

### delayed?

> `optional` **delayed**: `boolean`

Данные c задержкой в 15 минут. Для авторизованых клиентов задержка не применяется.

#### Example

```ts
false
```

### from?

> `optional` **from**: `number`

Дата и время (UTC) для первой запрашиваемой свечи

#### Format

int64

#### Example

```ts
1536557084
```

### opcode?

> `optional` **opcode**: `"BarsGetAndSubscribe"`

Код операции

#### Example

```ts
"BarsGetAndSubscribe"
```

### tf?

> `optional` **tf**: `"15"` \| `"60"` \| `"300"` \| `"3600"` \| `"D"` \| `"W"` \| `"M"` \| `"Y"`

Длительность таймфрейма в секундах или код ("D" - дни, "W" - недели, "M" - месяцы, "Y" - годы)

#### Example

```ts
60
```
