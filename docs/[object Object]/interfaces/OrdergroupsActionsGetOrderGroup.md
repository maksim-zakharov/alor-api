# Interface: OrdergroupsActionsGetOrderGroup

Defined in: [models/models.ts:290](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L290)

## Properties

### ClosedAt?

> `optional` **ClosedAt**: `string` \| `null`

Defined in: [models/models.ts:330](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L330)

Время выполнения/отмены группы заявок

#### Format

date-time

***

### CreatedAt?

> `optional` **CreatedAt**: `string`

Defined in: [models/models.ts:325](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L325)

Время создания группы заявок

#### Format

date-time

***

### ExecutionPolicy?

> `optional` **ExecutionPolicy**: [`ExecutionPolicy`](../enumerations/ExecutionPolicy.md)

Defined in: [models/models.ts:313](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L313)

Тип группы заявок:
 * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
 * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
 * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки

***

### Id?

> `optional` **Id**: `string`

Defined in: [models/models.ts:296](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L296)

Идентификатор группы заявок

#### Format

uuid

#### Example

```ts
"eafb19d6-c578-4afe-aa95-d528c4531031"
```

***

### Login?

> `optional` **Login**: `string`

Defined in: [models/models.ts:298](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L298)

#### Example

```ts
"P039004"
```

***

### Orders?

> `optional` **Orders**: `object`[]

Defined in: [models/models.ts:300](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L300)

Список заявок, входящих в группу заявок

#### OrderId?

> `optional` **OrderId**: `string`

Идентификатор заявки

##### Example

```ts
123457854
```

***

### Status?

> `optional` **Status**: [`OrderGroupStatus`](../enumerations/OrderGroupStatus.md)

Defined in: [models/models.ts:320](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L320)

Статус группы заявок
 * Active - группа активна
 * Filled - группа исполнена торговой системой
 * Canceled - группа отменена пользователем
