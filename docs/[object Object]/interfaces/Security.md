# Interface: Security

Defined in: [models/models.ts:2338](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2338)

## Properties

### cancellation?

> `optional` **cancellation**: `string`

Defined in: [models/models.ts:2385](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2385)

Дата и время (UTC) окончания действия

#### Example

```ts
"2018-09-03T00:00:00"
```

***

### cfiCode?

> `optional` **cfiCode**: `string`

Defined in: [models/models.ts:2380](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2380)

Тип ценной бумаги согласно стандарту ISO 10962

#### Example

```ts
"ESXXXX"
```

***

### complexProductCategory?

> `optional` **complexProductCategory**: [`ComplexProductCategory`](../enumerations/ComplexProductCategory.md)

Defined in: [models/models.ts:2514](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2514)

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

### currency?

> `optional` **currency**: `string` \| `null`

Defined in: [models/models.ts:2455](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2455)

Валюта

#### Example

```ts
"RUB"
```

***

### description?

> `optional` **description**: `string`

Defined in: [models/models.ts:2353](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2353)

Краткое описание инструмента

#### Example

```ts
"Сбербанк России ПАО ао"
```

***

### exchange?

> `optional` **exchange**: `string`

Defined in: [models/models.ts:2358](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2358)

Биржа

#### Example

```ts
"MOEX"
```

***

### facevalue?

> `optional` **facevalue**: `number`

Defined in: [models/models.ts:2375](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2375)

Номинальная стоимость

#### Format

decimal

#### Example

```ts
100
```

***

### ISIN?

> `optional` **ISIN**: `string` \| `null`

Defined in: [models/models.ts:2460](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2460)

Идентификатор ценной бумаги согласно стандарту ISO 6166

#### Example

```ts
"RU000A1014L8"
```

***

### lotsize?

> `optional` **lotsize**: `number`

Defined in: [models/models.ts:2369](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2369)

Размер лота

#### Format

decimal

#### Example

```ts
1
```

***

### marginbuy?

> `optional` **marginbuy**: `number`

Defined in: [models/models.ts:2402](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2402)

Цена маржинальной покупки (заемные средства)

#### Format

decimal

#### Example

```ts
6707.86
```

***

### marginrate?

> `optional` **marginrate**: `number`

Defined in: [models/models.ts:2414](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2414)

Отношение цены маржинальной покупки к цене последней сделки

#### Format

decimal

#### Example

```ts
89.3428
```

***

### marginsell?

> `optional` **marginsell**: `number`

Defined in: [models/models.ts:2408](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2408)

Цена маржинальной продажи (заемные средства)

#### Format

decimal

#### Example

```ts
6707.86
```

***

### minstep?

> `optional` **minstep**: `number`

Defined in: [models/models.ts:2391](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2391)

Минимальный шаг цены

#### Format

decimal

#### Example

```ts
0.01
```

***

### priceMax?

> `optional` **priceMax**: `number`

Defined in: [models/models.ts:2426](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2426)

Максимальная цена

#### Format

decimal

#### Example

```ts
79.57
```

***

### priceMin?

> `optional` **priceMin**: `number`

Defined in: [models/models.ts:2432](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2432)

Минимальная цена

#### Format

decimal

#### Example

```ts
70.55
```

***

### pricestep?

> `optional` **pricestep**: `number`

Defined in: [models/models.ts:2420](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2420)

Минимальный шаг цены, выраженный в рублях

#### Format

decimal

#### Example

```ts
6.30202
```

***

### primary\_board?

> `optional` **primary\_board**: `string`

Defined in: [models/models.ts:2471](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2471)

Код режима торгов

#### Example

```ts
"ROPD"
```

***

### rating?

> `optional` **rating**: `number`

Defined in: [models/models.ts:2396](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2396)

#### Format

decimal

#### Example

```ts
195613886
```

***

### shortname?

> `optional` **shortname**: `string`

Defined in: [models/models.ts:2348](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2348)

Краткое наименование инструмента

#### Example

```ts
"Сбербанк"
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:2343](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2343)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### theorPrice?

> `optional` **theorPrice**: `number`

Defined in: [models/models.ts:2438](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2438)

Теоретическая цена опциона

#### Format

decimal

#### Example

```ts
0
```

***

### theorPriceLimit?

> `optional` **theorPriceLimit**: `number`

Defined in: [models/models.ts:2444](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2444)

Теоретическая цена опциона с учетом лимитов

#### Format

decimal

#### Example

```ts
0
```

***

### tradingStatus?

> `optional` **tradingStatus**: `number`

Defined in: [models/models.ts:2485](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2485)

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

### tradingStatusInfo?

> `optional` **tradingStatusInfo**: `string` \| `null`

Defined in: [models/models.ts:2490](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2490)

Описание торгового статуса инструмента

#### Example

```ts
"нормальный период торгов"
```

***

### type?

> `optional` **type**: `string` \| `null`

Defined in: [models/models.ts:2363](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2363)

Тип

#### Example

```ts
"CS"
```

***

### volatility?

> `optional` **volatility**: `number`

Defined in: [models/models.ts:2450](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2450)

Волатильность

#### Format

decimal

#### Example

```ts
0
```

***

### yield?

> `optional` **yield**: `number` \| `null`

Defined in: [models/models.ts:2466](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L2466)

Доходность, рассчитанная по цене сделки

#### Format

int32

#### Example

```ts
null
```
