# Interface: SecuritySlim

Defined in: [models/models.ts:2519](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2519)

## Properties

### cfi?

> `optional` **cfi**: `string`

Defined in: [models/models.ts:2561](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2561)

Тип ценной бумаги согласно стандарту ISO 10962

#### Example

```ts
"ESXXXX"
```

***

### cncl?

> `optional` **cncl**: `string`

Defined in: [models/models.ts:2566](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2566)

Дата и время (UTC) окончания действия

#### Example

```ts
"2018-09-03T00:00:00"
```

***

### cpct?

> `optional` **cpct**: [`ComplexProductCategory`](../enumerations/ComplexProductCategory.md)

Defined in: [models/models.ts:2695](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2695)

Требуемая категория для осуществления торговли инструментом:
  * `Unknown` - Неизвестная категория
  * `` - Нет ограничений
  * `0` - Инструменты, предназначенные для КИ
  * `1` - Необеспеченные сделки
  * `2` - Производные финансовые инструменты
  * `3` - Договоры репо, требующие тестирования
  * `4` - Структурные облигации, не предназначенные для КИ
  * `5` - ЗПИФ, не предназначенные для КИ
  * `6` - Облигации российских эмитентов без рейтинга
  * `7` - Облигации иностранных эмитентов, исполнение по которым обеспечивается за счет юридического лица РФ без рейтинга
  * `8` - Облигации со структурным доходом
  * `9` - Акции, не включенные в котировальные списки
  * `10` - Иностранные акции, требующие проведения тестирования
  * `11` - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при наличии договора организатора торговли с "ответственным" лицом
  * `12` - Паи/акции ETF, не включенные в котировальные списки и допущенные к организованным торгам при отсутствии договора организатора торговли с "ответственным" лицом
  * `13` - Облигации российских или иностранных эмитентов, конвертируемых в иные ценные бумаги
  * `14` - Облигации российских эмитентов с "юрисдикцией" выпуска вне рамок разрешенных
  * `15` - Облигации иностранных эмитентов с "юрисдикцией" эмитента вне рамок разрешенных
  * `16` - Резерв
  * `17` - Все бумаги, не попадающие под тесты из Базового стандарта. Ценные бумаги без листинга на Санкт-Петербургской бирже, возникшие в результате корпоративных событий

***

### cur?

> `optional` **cur**: `string` \| `null`

Defined in: [models/models.ts:2636](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2636)

Валюта

#### Example

```ts
"RUB"
```

***

### desc?

> `optional` **desc**: `string`

Defined in: [models/models.ts:2534](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2534)

Краткое описание инструмента

#### Example

```ts
"Сбербанк России ПАО ао"
```

***

### ex?

> `optional` **ex**: `string`

Defined in: [models/models.ts:2539](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2539)

Биржа

#### Example

```ts
"MOEX"
```

***

### fv?

> `optional` **fv**: `number`

Defined in: [models/models.ts:2556](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2556)

Номинальная стоимость

#### Format

decimal

#### Example

```ts
100
```

***

### isin?

> `optional` **isin**: `string` \| `null`

Defined in: [models/models.ts:2641](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2641)

Идентификатор ценной бумаги согласно стандарту ISO 6166

#### Example

```ts
"RU000A1014L8"
```

***

### lot?

> `optional` **lot**: `number`

Defined in: [models/models.ts:2550](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2550)

Размер лота

#### Format

decimal

#### Example

```ts
1
```

***

### mgb?

> `optional` **mgb**: `number`

Defined in: [models/models.ts:2583](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2583)

Цена маржинальной покупки (заемные средства)

#### Format

decimal

#### Example

```ts
6707.86
```

***

### mgrt?

> `optional` **mgrt**: `number`

Defined in: [models/models.ts:2595](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2595)

Отношение цены маржинальной покупки к цене последней сделки

#### Format

decimal

#### Example

```ts
89.3428
```

***

### mgs?

> `optional` **mgs**: `number`

Defined in: [models/models.ts:2589](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2589)

Цена маржинальной продажи (заемные средства)

#### Format

decimal

#### Example

```ts
6707.86
```

***

### n?

> `optional` **n**: `string`

Defined in: [models/models.ts:2529](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2529)

Краткое наименование инструмента

#### Example

```ts
"Сбербанк"
```

***

### pbd?

> `optional` **pbd**: `string`

Defined in: [models/models.ts:2652](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2652)

Код режима торгов

#### Example

```ts
"ROPD"
```

***

### pxmn?

> `optional` **pxmn**: `number`

Defined in: [models/models.ts:2613](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2613)

Минимальная цена

#### Format

decimal

#### Example

```ts
70.55
```

***

### pxmx?

> `optional` **pxmx**: `number`

Defined in: [models/models.ts:2607](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2607)

Максимальная цена

#### Format

decimal

#### Example

```ts
79.57
```

***

### pxt?

> `optional` **pxt**: `number`

Defined in: [models/models.ts:2619](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2619)

Теоретическая цена опциона

#### Format

decimal

#### Example

```ts
0
```

***

### pxtl?

> `optional` **pxtl**: `number`

Defined in: [models/models.ts:2625](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2625)

Теоретическая цена опциона с учетом лимитов

#### Format

decimal

#### Example

```ts
0
```

***

### rt?

> `optional` **rt**: `number`

Defined in: [models/models.ts:2577](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2577)

#### Format

decimal

#### Example

```ts
195613886
```

***

### st?

> `optional` **st**: `number`

Defined in: [models/models.ts:2666](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2666)

Торговый статус инструмента:
  * `18` - Нет торгов / торги закрыты
  * `118` - Период открытия
  * `103` - Период закрытия
  * `2` - Перерыв в торгах
  * `17` - Нормальный период торгов
  * `102` - Аукцион закрытия
  * `106` - Аукцион крупных пакетов
  * `107` - Дискретный аукцион
  * `119` - Аукцион открытия
  * `120` - Период торгов по цене аукциона закрытия

***

### sti?

> `optional` **sti**: `string` \| `null`

Defined in: [models/models.ts:2671](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2671)

Описание торгового статуса инструмента

#### Example

```ts
"нормальный период торгов"
```

***

### stp?

> `optional` **stp**: `number`

Defined in: [models/models.ts:2572](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2572)

Минимальный шаг цены

#### Format

decimal

#### Example

```ts
0.01
```

***

### stppx?

> `optional` **stppx**: `number`

Defined in: [models/models.ts:2601](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2601)

Минимальный шаг цены, выраженный в рублях

#### Format

decimal

#### Example

```ts
6.30202
```

***

### sym?

> `optional` **sym**: `string`

Defined in: [models/models.ts:2524](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2524)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### t?

> `optional` **t**: `string` \| `null`

Defined in: [models/models.ts:2544](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2544)

Тип

#### Example

```ts
"CS"
```

***

### vl?

> `optional` **vl**: `number`

Defined in: [models/models.ts:2631](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2631)

Волатильность

#### Format

decimal

#### Example

```ts
0
```

***

### yld?

> `optional` **yld**: `number` \| `null`

Defined in: [models/models.ts:2647](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L2647)

Доходность, рассчитанная по цене сделки

#### Format

int32

#### Example

```ts
null
```
