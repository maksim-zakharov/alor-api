# Interface: WsReqBaseObject

Defined in: [models/models.ts:5596](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5596)

## Properties

### exchange?

> `optional` **exchange**: [`Exchange`](../enumerations/Exchange.md)

Defined in: [models/models.ts:5602](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5602)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: [`Format`](../enumerations/Format.md)

Defined in: [models/models.ts:5603](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5603)

***

### frequency?

> `optional` **frequency**: `number`

Defined in: [models/models.ts:5609](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5609)

Максимальная частота отдачи данных сервером в миллисекундах.

#### Format

int32

#### Default

```ts
175
```

***

### guid?

> `optional` **guid**: `string`

Defined in: [models/models.ts:5614](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5614)

Уникальный идентификатор сообщений создаваемой подписки. Все входящие сообщения, соответствующие этой подписке, будут иметь такое значение поля guid.

#### Example

```ts
"f35a2373-612c-4518-54af-72025384f59b"
```

***

### token?

> `optional` **token**: `string`

Defined in: [models/models.ts:5619](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L5619)

JWT токен для авторизации

#### Example

```ts
"eyJhbGciOiJ..."
```
