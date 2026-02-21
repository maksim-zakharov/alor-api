# Interface: OrdersActionsLimitMarket

Defined in: [models/models.ts:897](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L897)

## Properties

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:902](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L902)

Вид ответа на успешно выполненный запрос.

#### Example

```ts
"(162) Заявка на покупку N 9763124 зарегистрирована (1 удовлетворено)."
```

***

### orderNumber?

> `optional` **orderNumber**: `number`

Defined in: [models/models.ts:908](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L908)

Идентификатор заявки

#### Format

int64

#### Example

```ts
9763124
```
