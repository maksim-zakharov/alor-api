# Interface: FortsriskSlim

Defined in: [models/models.ts:4280](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4280)

## Properties

### a?

> `optional` **a**: `number`

Defined in: [models/models.ts:4315](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4315)

Общее количество рублей и дисконтированных в рубли залогов

#### Format

decimal

#### Example

```ts
199313
```

***

### b?

> `optional` **b**: `number`

Defined in: [models/models.ts:4297](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4297)

Средства, заблокированные под ГО

#### Format

decimal

#### Example

```ts
12560
```

***

### f?

> `optional` **f**: `number`

Defined in: [models/models.ts:4291](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4291)

Свободные средства. Сумма рублей и залогов, дисконтированных в рубли, доступная для открытия позиций. (MoneyFree = MoneyAmount + VmInterCl – MoneyBlocked – VmReserve – Fee)

#### Format

decimal

#### Example

```ts
452404
```

***

### fee?

> `optional` **fee**: `number`

Defined in: [models/models.ts:4303](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4303)

Списанный сбор

#### Format

decimal

#### Example

```ts
651717
```

***

### lim?

> `optional` **lim**: `boolean`

Defined in: [models/models.ts:4338](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4338)

Наличие установленных денежного и залогового лимитов

#### Example

```ts
false
```

***

### mgc?

> `optional` **mgc**: `number`

Defined in: [models/models.ts:4327](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4327)

Вариационная маржа, списанная или полученная в пром. клиринг

#### Format

decimal

#### Example

```ts
651717
```

***

### mgp?

> `optional` **mgp**: `number`

Defined in: [models/models.ts:4333](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4333)

Сагрегированная вармаржа по текущим позициям

#### Format

decimal

#### Example

```ts
199313
```

***

### o?

> `optional` **o**: `number`

Defined in: [models/models.ts:4309](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4309)

Общее количество рублей и дисконтированных в рубли залогов на начало сессии

#### Format

decimal

#### Example

```ts
651717
```

***

### p?

> `optional` **p**: `string`

Defined in: [models/models.ts:4285](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4285)

Идентификатор клиентского портфеля

#### Example

```ts
"D49004"
```

***

### pa?

> `optional` **pa**: `number`

Defined in: [models/models.ts:4321](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/models/models.ts#L4321)

Сумма залогов, дисконтированных в рубли

#### Format

decimal

#### Example

```ts
552061
```
