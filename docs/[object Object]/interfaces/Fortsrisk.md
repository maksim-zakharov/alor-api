# Interface: Fortsrisk

Defined in: [models/models.ts:4206](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4206)

## Properties

### ~~balanceMoney?~~

> `optional` **balanceMoney**: `number`

Defined in: [models/models.ts:4230](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4230)

Сальдо денежных торговых переводов за текущую сессию (поле будет удалено в будущих обновлениях)

#### Deprecated

#### Format

decimal

#### Example

```ts
1.93
```

***

### fee?

> `optional` **fee**: `number`

Defined in: [models/models.ts:4236](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4236)

Списанный сбор

#### Format

decimal

#### Example

```ts
651717
```

***

### isLimitsSet?

> `optional` **isLimitsSet**: `boolean`

Defined in: [models/models.ts:4277](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4277)

Наличие установленных денежного и залогового лимитов

#### Example

```ts
false
```

***

### moneyAmount?

> `optional` **moneyAmount**: `number`

Defined in: [models/models.ts:4248](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4248)

Общее количество рублей и дисконтированных в рубли залогов

#### Format

decimal

#### Example

```ts
199313
```

***

### moneyBlocked?

> `optional` **moneyBlocked**: `number`

Defined in: [models/models.ts:4223](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4223)

Средства, заблокированные под ГО

#### Format

decimal

#### Example

```ts
12560
```

***

### moneyFree?

> `optional` **moneyFree**: `number`

Defined in: [models/models.ts:4217](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4217)

Свободные средства. Сумма рублей и залогов, дисконтированных в рубли, доступная для открытия позиций. (MoneyFree = MoneyAmount + VmInterCl – MoneyBlocked – VmReserve – Fee)

#### Format

decimal

#### Example

```ts
452404
```

***

### moneyOld?

> `optional` **moneyOld**: `number`

Defined in: [models/models.ts:4242](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4242)

Общее количество рублей и дисконтированных в рубли залогов на начало сессии

#### Format

decimal

#### Example

```ts
651717
```

***

### moneyPledgeAmount?

> `optional` **moneyPledgeAmount**: `number`

Defined in: [models/models.ts:4254](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4254)

Сумма залогов, дисконтированных в рубли

#### Format

decimal

#### Example

```ts
552061
```

***

### portfolio?

> `optional` **portfolio**: `string`

Defined in: [models/models.ts:4211](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4211)

Идентификатор клиентского портфеля

#### Example

```ts
"D49004"
```

***

### varMargin?

> `optional` **varMargin**: `number`

Defined in: [models/models.ts:4272](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4272)

VmCurrentPositions + VmInterCl

#### Format

decimal

#### Example

```ts
552061
```

***

### vmCurrentPositions?

> `optional` **vmCurrentPositions**: `number`

Defined in: [models/models.ts:4266](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4266)

Сагрегированная вармаржа по текущим позициям

#### Format

decimal

#### Example

```ts
199313
```

***

### vmInterCl?

> `optional` **vmInterCl**: `number`

Defined in: [models/models.ts:4260](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L4260)

Вариационная маржа, списанная или полученная в пром. клиринг

#### Format

decimal

#### Example

```ts
651717
```
