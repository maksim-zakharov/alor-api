# Interface: DevSecuritiesSearchParams

Defined in: [models/models.ts:7044](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7044)

## Properties

### cficode?

> `optional` **cficode**: `string`

Defined in: [models/models.ts:7074](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7074)

Код финансового инструмента по стандарту ISO 10962

#### Example

```ts
"EXXXXX"
```

***

### exchange?

> `optional` **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7080](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7080)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7085](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7085)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### limit?

> `optional` **limit**: `number`

Defined in: [models/models.ts:7055](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7055)

Ограничение на количество выдаваемых результатов поиска

#### Format

int32

#### Example

```ts
3
```

***

### offset?

> `optional` **offset**: `number`

Defined in: [models/models.ts:7061](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7061)

Смещение начала выборки (для пагинации)

#### Format

int32

#### Example

```ts
10
```

***

### query

> **query**: `string`

Defined in: [models/models.ts:7049](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7049)

Тикер (Код финансового инструмента)

#### Example

```ts
"GAZP"
```

***

### sector?

> `optional` **sector**: `"FORTS"` \| `"FOND"` \| `"CURR"`

Defined in: [models/models.ts:7069](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L7069)

Рынок:
  * `FORTS` - Срочный рынок
  * `FOND` - Фондовый рынок
  * `CURR` - Валютный рынок

#### Example

```ts
"FOND"
```
