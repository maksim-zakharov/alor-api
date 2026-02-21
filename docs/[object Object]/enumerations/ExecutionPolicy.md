# Enumeration: ExecutionPolicy

Defined in: [models/models.ts:203](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L203)

Тип группы заявок:
 * OnExecuteOrCancel - Группа отменяется при отмене/выполнении/редактировании любой заявки
 * IgnoreCancel - Группа отменяется при исполнении заявки. При отмене или редактировании заявки - заявка удаляется из группы, группа остаётся активной
 * TriggerBracketOrders - Группа, содержащая одну лимитную заявку и несколько стопов. Для создания группы, стоп-заявки должны быть созданны с флагом 'Activate = false'. После выполнения лимитной заявки, активируются стоп-заявки

## Enumeration Members

### IgnoreCancel

> **IgnoreCancel**: `"IgnoreCancel"`

Defined in: [models/models.ts:205](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L205)

***

### OnExecuteOrCancel

> **OnExecuteOrCancel**: `"OnExecuteOrCancel"`

Defined in: [models/models.ts:204](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L204)

***

### TriggerBracketOrders

> **TriggerBracketOrders**: `"TriggerBracketOrders"`

Defined in: [models/models.ts:206](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L206)
