# Interface: CommandwsReqDeleteStopLimitOrder

Defined in: [models/models.ts:6709](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6709)

## Properties

### checkDuplicates?

> `optional` **checkDuplicates**: `boolean`

Defined in: [models/models.ts:6740](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6740)

Флаг, отвечающий за проверку уникальности команд. По умолчанию включен. При отключении ускоряет прием заявки.

#### Example

```ts
true
```

***

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:6728](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6728)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:6716](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6716)

Клиентский идентификатор команды. В качестве идентификатора требуется уникальная случайная строка. Если уже приходил запрос с таким идентификатором, то команда не будет исполнена повторно.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### opcode?

> `optional` **opcode**: `"delete:stopLimit"`

Defined in: [models/models.ts:6711](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6711)

Код операции

***

### orderId?

> `optional` **orderId**: `number`

Defined in: [models/models.ts:6722](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6722)

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

Defined in: [models/models.ts:6729](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L6729)

#### portfolio?

> `optional` **portfolio**: `string`

Идентификатор клиентского портфеля

##### Example

```ts
"D39004"
```
