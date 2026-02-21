# Interface: CommandwsReqDeleteStopOrder

Defined in: [models/models.ts:6675](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6675)

## Properties

### checkDuplicates?

> `optional` **checkDuplicates**: `boolean`

Defined in: [models/models.ts:6706](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6706)

Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.

#### Example

```ts
true
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:6694](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6694)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:6682](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6682)

Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### opcode?

> `optional` **opcode**: `"delete:stop"`

Defined in: [models/models.ts:6677](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6677)

Код операции

***

### orderId?

> `optional` **orderId**: `number`

Defined in: [models/models.ts:6688](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6688)

Идентификатор заявки

#### Format

int64

#### Example

```ts
18936040296
```

***

### user?

> `optional` **user**: `object`

Defined in: [models/models.ts:6695](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6695)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
