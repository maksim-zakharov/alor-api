# Interface: CommandapiOrderGroupsErrorResponse

Defined in: [models/models.ts:271](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L271)

## Properties

### detail?

> `optional` **detail**: `string`

Defined in: [models/models.ts:287](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L287)

Описание ошибки

#### Example

```ts
"Forbidden attempt to modify an order (3625092321506) not owned by the user"
```

***

### status?

> `optional` **status**: `number`

Defined in: [models/models.ts:282](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L282)

Код ошибки

#### Format

int32

#### Example

```ts
400
```

***

### title?

> `optional` **title**: `string`

Defined in: [models/models.ts:276](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L276)

Описание кода ошибки

#### Example

```ts
"BadRequest"
```
