# OrderGroups (Группы заявок)

Доступ: `api.orderGroups`

Сервис для работы с группами заявок: одна группа объединяет несколько заявок с общими настройками. Типы: [`BodyrequestCreateOrderGroup`](/docs/api/interfaces/BodyrequestCreateOrderGroup), [`BodyrequestModifyOrderGroup`](/docs/api/interfaces/BodyrequestModifyOrderGroup), [`BodyresponseOrderGroup`](/docs/api/interfaces/BodyresponseOrderGroup), [`OrdergroupsActionsGetOrderGroup`](/docs/api/interfaces/OrdergroupsActionsGetOrderGroup), [`CommandapiSuccessResponse`](/docs/api/type-aliases/CommandapiSuccessResponse), [`CommandapiOrderGroupsErrorResponse`](/docs/api/interfaces/CommandapiOrderGroupsErrorResponse).

---

## getOrderGroups

Возвращает список всех групп заявок текущего клиента.

**Параметры:** нет.

**Возвращает:** `Promise<OrdergroupsActionsGetOrderGroup[] | CommandapiOrderGroupsErrorResponse>`

**Пример:**

```typescript
const groups = await api.orderGroups.getOrderGroups();
if (Array.isArray(groups)) {
  groups.forEach((g) => console.log(g.id, g.name));
} else {
  console.error('Ошибка:', groups);
}
```

---

## getOrderGroupById

Возвращает одну группу заявок по идентификатору.

**Параметры:**

| Параметр      | Тип     | Описание            |
|---------------|---------|---------------------|
| `orderGroupId`| `string`| ID группы заявок.   |

**Возвращает:** `Promise<OrdergroupsActionsGetOrderGroup | CommandapiOrderGroupsErrorResponse>`

**Пример:**

```typescript
const group = await api.orderGroups.getOrderGroupById('a1b2c3d4-uuid');
if ('name' in group) {
  console.log(group.name, group.orders);
}
```

---

## createOrderGroup

Создаёт новую группу заявок.

**Параметры:** объект [`BodyrequestCreateOrderGroup`](/docs/api/interfaces/BodyrequestCreateOrderGroup) — название, список заявок (портфель, биржа, тикер, сторона, количество, цена и т.д.).

**Возвращает:** `Promise<BodyresponseOrderGroup | CommandapiOrderGroupsErrorResponse>`

**Пример:**

```typescript
const result = await api.orderGroups.createOrderGroup({
  name: 'Пакет SBER + GAZP',
  orders: [
    { portfolio: 'D12345', exchange: 'MOEX', symbol: 'SBER', side: 'buy', quantity: 10, price: 250, type: 'limit' },
    { portfolio: 'D12345', exchange: 'MOEX', symbol: 'GAZP', side: 'buy', quantity: 5, price: 140, type: 'limit' },
  ],
});
```

---

## updateOrderGroup

Редактирует существующую группу заявок.

**Параметры:** объект [`BodyrequestModifyOrderGroup`](/docs/api/interfaces/BodyrequestModifyOrderGroup) с полем **`orderGroupId: string`** — ID группы, плюс поля для изменения (например, `name`, список заявок).

**Возвращает:** `Promise<CommandapiSuccessResponse | CommandapiOrderGroupsErrorResponse>`

**Пример:**

```typescript
await api.orderGroups.updateOrderGroup({
  orderGroupId: 'a1b2c3d4-uuid',
  name: 'Новое имя группы',
  orders: [/* обновлённый список заявок */],
});
```

---

## deleteOrderGroup

Удаляет группу заявок.

**Параметры:**

| Параметр      | Тип     | Описание            |
|---------------|---------|---------------------|
| `orderGroupId`| `string`| ID группы заявок.   |

**Возвращает:** `Promise<CommandapiSuccessResponse | CommandapiOrderGroupsErrorResponse>`

**Пример:**

```typescript
await api.orderGroups.deleteOrderGroup('a1b2c3d4-uuid');
```
