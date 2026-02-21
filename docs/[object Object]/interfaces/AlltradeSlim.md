# Interface: AlltradeSlim

Defined in: [models/models.ts:4694](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4694)

## Properties

### h?

> `optional` **h**: `boolean`

Defined in: [models/models.ts:4740](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4740)

True - для данных из "снепшота", то есть из истории. False - для новых событий

#### Example

```ts
false
```

***

### id?

> `optional` **id**: `number`

Defined in: [models/models.ts:4700](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4700)

Уникальный идентификатор.

#### Format

int64

#### Example

```ts
159
```

***

### oi?

> `optional` **oi**: `number`

Defined in: [models/models.ts:4735](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4735)

Открытый интерес (open interest). Если не поддерживается инстурментом - значение 0.

#### Format

int32

#### Example

```ts
523920
```

***

### px?

> `optional` **px**: `number`

Defined in: [models/models.ts:4717](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4717)

Цена

#### Format

decimal

#### Example

```ts
142.52
```

***

### q?

> `optional` **q**: `number`

Defined in: [models/models.ts:4711](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4711)

Количество

#### Format

int32

#### Example

```ts
1
```

***

### s?

> `optional` **s**: [`Side`](../enumerations/Side.md)

Defined in: [models/models.ts:4729](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4729)

Направление сделки:
  * `buy` - Купля
  * `sell` - Продажа

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:4705](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4705)

Тикер (Код финансового инструмента). "[N/A]" используется, если symbol не определен.

#### Example

```ts
"SBER"
```

***

### t?

> `optional` **t**: `number`

Defined in: [models/models.ts:4723](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4723)

Время (UTC) в формате Unix Time Milliseconds

#### Format

int64

#### Example

```ts
1611158710768
```
