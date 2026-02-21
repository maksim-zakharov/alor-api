# Interface: CommandApiWarpV2ClientOrdersDeleteParams

Defined in: [models/models.ts:7468](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7468)

## Properties

### exchange

> **exchange**: `"MOEX"`

Defined in: [models/models.ts:7478](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7478)

Биржа:
  * `MOEX` - Московская биржа

***

### format?

> `optional` **format**: `"Simple"` \| `"Slim"` \| `"Heavy"`

Defined in: [models/models.ts:7493](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7493)

Формат возвращаемого сервером JSON

#### Example

```ts
"Simple"
```

***

### jsonResponse?

> `optional` **jsonResponse**: `boolean`

Defined in: [models/models.ts:7488](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7488)

Ответ в формате JSON. В виде отдельного параметра для обратной совместимости.

#### Example

```ts
false
```

***

### orderId

> **orderId**: `number`

Defined in: [models/models.ts:7499](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7499)

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

Defined in: [models/models.ts:7473](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7473)

Идентификатор клиентского портфеля

#### Example

```ts
"D39004"
```

***

### stop

> **stop**: `boolean`

Defined in: [models/models.ts:7483](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L7483)

Является стоп-заявкой?

#### Example

```ts
false
```
