# Interface: BodyrequestModifyOrderGroup

Defined in: [models/models.ts:1192](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1192)

## Properties

### ExecutionPolicy

> **ExecutionPolicy**: [`ExecutionPolicy`](../enumerations/ExecutionPolicy.md)

Defined in: [models/models.ts:1201](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1201)

Тип группы заявок:
 * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
 * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
 * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки

***

### Orders?

> `optional` **Orders**: [`OrderGroupItem`](OrderGroupItem.md)[]

Defined in: [models/models.ts:1194](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L1194)

Заявки, из которых будет состоять группа
