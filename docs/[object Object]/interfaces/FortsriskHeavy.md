# Interface: FortsriskHeavy

Defined in: [models/models.ts:4341](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4341)

## Properties

### fee?

> `optional` **fee**: `number`

Defined in: [models/models.ts:4364](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4364)

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

Defined in: [models/models.ts:4405](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4405)

Наличие установленных денежного и залогового лимитов

#### Example

```ts
false
```

***

### moneyAmount?

> `optional` **moneyAmount**: `number`

Defined in: [models/models.ts:4376](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4376)

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

Defined in: [models/models.ts:4358](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4358)

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

Defined in: [models/models.ts:4352](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4352)

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

Defined in: [models/models.ts:4370](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4370)

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

Defined in: [models/models.ts:4382](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4382)

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

Defined in: [models/models.ts:4346](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4346)

Идентификатор клиентского портфеля

#### Example

```ts
"D49004"
```

***

### varMargin?

> `optional` **varMargin**: `number`

Defined in: [models/models.ts:4400](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4400)

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

Defined in: [models/models.ts:4394](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4394)

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

Defined in: [models/models.ts:4388](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L4388)

Вариационная маржа, списанная или полученная в пром. клиринг

#### Format

decimal

#### Example

```ts
651717
```
