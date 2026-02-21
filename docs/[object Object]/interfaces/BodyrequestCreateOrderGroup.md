# Interface: BodyrequestCreateOrderGroup

Defined in: [models/models.ts:1180](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1180)

## Properties

### ExecutionPolicy

> **ExecutionPolicy**: [`ExecutionPolicy`](../enumerations/ExecutionPolicy.md)

Defined in: [models/models.ts:1189](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1189)

Тип группы заявок:
 * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
 * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
 * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки

***

### Orders

> **Orders**: [`OrderGroupItem`](OrderGroupItem.md)[]

Defined in: [models/models.ts:1182](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L1182)

Заявки, из которых будет состоять группа
