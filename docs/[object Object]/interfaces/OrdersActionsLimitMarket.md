# Interface: OrdersActionsLimitMarket

Defined in: [models/models.ts:897](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L897)

## Properties

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:902](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L902)

Вид ответа на успешно выполненный запрос.

#### Example

```ts
"(162) Заявка на покупку N 9763124 зарегистрирована (1 удовлетворено)."
```

***

### orderNumber?

> `optional` **orderNumber**: `number`

Defined in: [models/models.ts:908](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L908)

Идентификатор заявки

#### Format

int64

#### Example

```ts
9763124
```
