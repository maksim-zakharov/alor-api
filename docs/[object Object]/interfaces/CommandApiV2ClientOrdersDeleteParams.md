# Interface: CommandApiV2ClientOrdersDeleteParams

Defined in: [models/models.ts:7363](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7363)

## Properties

### exchange

> **exchange**: `"MOEX"`

Defined in: [models/models.ts:7373](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7373)

Биржа:
  * `MOEX` - Московская биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7388](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7388)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### jsonResponse?

> `optional` **jsonResponse**: `boolean`

Defined in: [models/models.ts:7383](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7383)

Ответ в формате JSON. В виде отдельного параметра для обратной совместимости.

#### Example

```ts
false
```

***

### orderId

> **orderId**: `number`

Defined in: [models/models.ts:7394](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7394)

Идентификатор заявки

#### Format

int64

#### Example

```ts
93713183
```

***

### portfolio

> **portfolio**: `string`

Defined in: [models/models.ts:7368](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7368)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### stop

> **stop**: `boolean`

Defined in: [models/models.ts:7378](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L7378)

Является стоп-заявкой?

#### Example

```ts
false
```
