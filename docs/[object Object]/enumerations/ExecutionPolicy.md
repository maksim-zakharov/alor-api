# Enumeration: ExecutionPolicy

Defined in: [models/models.ts:203](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L203)

Тип группы заявок:
 * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
 * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
 * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки

## Enumeration Members

### IgnoreCancel

> **IgnoreCancel**: `"IgnoreCancel"`

Defined in: [models/models.ts:205](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L205)

***

### OnExecuteOrCancel

> **OnExecuteOrCancel**: `"OnExecuteOrCancel"`

Defined in: [models/models.ts:204](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L204)

***

### TriggerBracketOrders

> **TriggerBracketOrders**: `"TriggerBracketOrders"`

Defined in: [models/models.ts:206](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L206)
