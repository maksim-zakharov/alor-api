# Interface: DevSecuritiesSearchAllTradesParams

Defined in: [models/models.ts:7176](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7176)

## Properties

### descending?

> `optional` **descending**: `boolean`

Defined in: [models/models.ts:7216](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7216)

Флаг обратной сортировки выдачи

#### Example

```ts
false
```

***

### exchange

> **exchange**: `"MOEX"` \| `"SPBX"`

Defined in: [models/models.ts:7227](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7227)

Биржа:
  * `MOEX` - Московская биржа
  * `SPBX` - СПБ Биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7181](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7181)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### from?

> `optional` **from**: `number`

Defined in: [models/models.ts:7187](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7187)

Начало отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds

#### Format

int64

#### Example

```ts
1593430060
```

***

### fromId?

> `optional` **fromId**: `number`

Defined in: [models/models.ts:7199](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7199)

Начальный номер сделки для фильтра результатов

#### Format

int64

#### Example

```ts
7796897024
```

***

### includeVirtualTrades?

> `optional` **includeVirtualTrades**: `boolean`

Defined in: [models/models.ts:7221](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7221)

Флаг загрузки виртуальных (индикативных) сделок, полученных из заявок на питерской бирже

#### Example

```ts
false
```

***

### symbol

> **symbol**: `string`

Defined in: [models/models.ts:7232](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7232)

Тикер (Код финансового инструмента)

#### Example

```ts
"LKOH"
```

***

### take?

> `optional` **take**: `number`

Defined in: [models/models.ts:7211](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7211)

Количество загружаемых элементов

#### Format

int32

#### Example

```ts
10
```

***

### to?

> `optional` **to**: `number`

Defined in: [models/models.ts:7193](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7193)

Конец отрезка времени (UTC) для фильтра результатов в формате Unix Time Seconds

#### Format

int64

#### Example

```ts
1593430560
```

***

### toId?

> `optional` **toId**: `number`

Defined in: [models/models.ts:7205](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7205)

Конечный номер сделки для фильтра результатов

#### Format

int64

#### Example

```ts
7796897280
```
