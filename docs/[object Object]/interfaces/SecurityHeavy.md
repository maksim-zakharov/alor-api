# Interface: SecurityHeavy

Defined in: [models/models.ts:2700](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2700)

## Properties

### cancellation?

> `optional` **cancellation**: `string`

Defined in: [models/models.ts:2747](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2747)

Дата и время (UTC) окончания действия

#### Example

```ts
"2018-09-03T00:00:00"
```

***

### cfiCode?

> `optional` **cfiCode**: `string`

Defined in: [models/models.ts:2742](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2742)

Тип ценной бумаги согласно стандарту ISO 10962

#### Example

```ts
"ESXXXX"
```

***

### complexProductCategory?

> `optional` **complexProductCategory**: [`ComplexProductCategory`](../enumerations/ComplexProductCategory.md)

Defined in: [models/models.ts:2882](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2882)

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

Defined in: [models/models.ts:2823](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2823)

Валюта

#### Example

```ts
"RUB"
```

***

### description?

> `optional` **description**: `string`

Defined in: [models/models.ts:2715](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2715)

Краткое описание инструмента

#### Example

```ts
"Сбербанк России ПАО ао"
```

***

### exchange?

> `optional` **exchange**: `string`

Defined in: [models/models.ts:2720](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2720)

Биржа

#### Example

```ts
"MOEX"
```

***

### faceValue?

> `optional` **faceValue**: `number`

Defined in: [models/models.ts:2737](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2737)

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

Defined in: [models/models.ts:2828](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2828)

Идентификатор ценной бумаги согласно стандарту ISO 6166

#### Example

```ts
"RU000A1014L8"
```

***

### lotSize?

> `optional` **lotSize**: `number`

Defined in: [models/models.ts:2731](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2731)

Размер лота

#### Format

decimal

#### Example

```ts
1
```

***

### marginBuy?

> `optional` **marginBuy**: `number`

Defined in: [models/models.ts:2770](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2770)

Цена маржинальной покупки (заемные средства)

#### Format

decimal

#### Example

```ts
6707.86
```

***

### marginRate?

> `optional` **marginRate**: `number`

Defined in: [models/models.ts:2782](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2782)

Отношение цены маржинальной покупки к цене последней сделки

#### Format

decimal

#### Example

```ts
89.3428
```

***

### marginSell?

> `optional` **marginSell**: `number`

Defined in: [models/models.ts:2776](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2776)

Цена маржинальной продажи (заемные средства)

#### Format

decimal

#### Example

```ts
6707.86
```

***

### minStep?

> `optional` **minStep**: `number`

Defined in: [models/models.ts:2753](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2753)

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

Defined in: [models/models.ts:2794](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2794)

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

Defined in: [models/models.ts:2800](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2800)

Минимальная цена

#### Format

decimal

#### Example

```ts
70.55
```

***

### priceStep?

> `optional` **priceStep**: `number`

Defined in: [models/models.ts:2788](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2788)

Минимальный шаг цены, выраженный в рублях

#### Format

decimal

#### Example

```ts
6.30202
```

***

### primaryBoard?

> `optional` **primaryBoard**: `string`

Defined in: [models/models.ts:2839](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2839)

Код режима торгов

#### Example

```ts
"ROPD"
```

***

### rating?

> `optional` **rating**: `number`

Defined in: [models/models.ts:2764](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2764)

#### Format

decimal

#### Example

```ts
195613886
```

***

### roundTo?

> `optional` **roundTo**: `number`

Defined in: [models/models.ts:2759](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2759)

Количество знаком после запятой в цене

#### Format

int32

#### Example

```ts
2
```

***

### shortName?

> `optional` **shortName**: `string`

Defined in: [models/models.ts:2710](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2710)

Краткое наименование инструмента

#### Example

```ts
"Сбербанк"
```

***

### symbol?

> `optional` **symbol**: `string`

Defined in: [models/models.ts:2705](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2705)

Тикер (Код финансового инструмента)

#### Example

```ts
"SBER"
```

***

### theorPrice?

> `optional` **theorPrice**: `number`

Defined in: [models/models.ts:2806](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2806)

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

Defined in: [models/models.ts:2812](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2812)

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

Defined in: [models/models.ts:2853](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2853)

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

Defined in: [models/models.ts:2858](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2858)

Описание торгового статуса инструмента

#### Example

```ts
"нормальный период торгов"
```

***

### type?

> `optional` **type**: `string` \| `null`

Defined in: [models/models.ts:2725](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2725)

Тип

#### Example

```ts
"CS"
```

***

### volatility?

> `optional` **volatility**: `number`

Defined in: [models/models.ts:2818](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2818)

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

Defined in: [models/models.ts:2834](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/models/models.ts#L2834)

Доходность, рассчитанная по цене сделки

#### Format

int32

#### Example

```ts
null
```
