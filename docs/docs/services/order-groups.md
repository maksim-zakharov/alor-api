# OrderGroups (Группы заявок)

Доступ: `api.orderGroups`

Сервис для работы с группами заявок (одна группа — несколько заявок с общими параметрами).

## Методы

| Метод | Описание |
|-------|----------|
| `getOrderGroups()` | Список всех групп заявок. |
| `getOrderGroupById(orderGroupId)` | Одна группа по идентификатору. |
| `createOrderGroup(body)` | Создать группу заявок. |
| `updateOrderGroup(body)` | Изменить группу (в body — `orderGroupId` и новые параметры). |
| `deleteOrderGroup(orderGroupId)` | Удалить группу. |

## Пример

```typescript
const groups = await api.orderGroups.getOrderGroups();
const group = await api.orderGroups.getOrderGroupById('group-uuid');
await api.orderGroups.createOrderGroup({ name: 'My group', ... });
```
