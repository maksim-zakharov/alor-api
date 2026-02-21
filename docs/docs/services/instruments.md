# Instruments (Инструменты)

Доступ: `api.instruments`

Сервис рыночных данных: бумаги, котировки, стакан, сделки, история, дивиденды и новости. Типы параметров и ответов — в [API Reference](/docs/api): `DevSecuritiesSearchParams`, `Securities`, `Security`, `DevQuotesParams`, `Symbols`, `DevOrderbookExchangSeccodeParams`, `Orderbook`, `DevHistoryParams`, `History` и др.

---

## getSecurities

Список торговых инструментов с фильтрами.

**Параметры:** объект [`DevSecuritiesSearchParams`](/docs/api/interfaces/DevSecuritiesSearchParams) — фильтры по бирже, типу, сектору, строке поиска и т.д. Опционально `format: "Simple" | "Slim" | "Heavy"`.

**Возвращает:** `Promise<Securities | SecuritiesSlim | SecuritiesHeavy>`

```typescript
const securities = await api.instruments.getSecurities({
  exchange: 'MOEX',
  limit: 100,
});
```

---

## getSecuritiesByExchange

Инструменты по выбранной бирже.

**Параметры:** объект [`DevSecuritiesSearchExchangeParams`](/docs/api/interfaces/DevSecuritiesSearchExchangeParams): `exchange`, плюс фильтры (limit, offset, search и т.д.).

**Возвращает:** `Promise<Securities | SecuritiesSlim | SecuritiesHeavy>`

---

## getSecurityByExchangeAndSymbol

Один инструмент по бирже и коду.

**Параметры:** объект [`DevSecuritiesSearchExchangeCodeParams`](/docs/api/interfaces/DevSecuritiesSearchExchangeCodeParams): `exchange`, `symbol`, опционально `format`.

**Возвращает:** `Promise<Security | SecuritySlim | SecurityHeavy>`

```typescript
const security = await api.instruments.getSecurityByExchangeAndSymbol({
  exchange: 'MOEX',
  symbol: 'SBER',
});
```

---

## getQuotes

Котировки по списку инструментов.

**Параметры:** объект [`DevQuotesParams`](/docs/api/interfaces/DevQuotesParams): **`symbols`** (строка, например `"SBER,GAZP"`), `exchange`, опционально `format`.

**Возвращает:** `Promise<Symbols | SymbolsSlim | SymbolsHeavy>`

```typescript
const quotes = await api.instruments.getQuotes({
  symbols: 'SBER,GAZP',
  exchange: 'MOEX',
});
```

---

## getOrderbookBySeccode

Биржевой стакан по бирже и коду инструмента.

**Параметры:** объект [`DevOrderbookExchangSeccodeParams`](/docs/api/interfaces/DevOrderbookExchangSeccodeParams): `exchange`, `seccode`, опционально `depth`, `format`.

**Возвращает:** `Promise<Orderbook | OrderbookSlim | OrderbookHeavy>`

```typescript
const orderbook = await api.instruments.getOrderbookBySeccode({
  exchange: 'MOEX',
  seccode: 'SBER',
  depth: 10,
});
```

---

## getAlltrades

Все сделки по инструменту за текущий день.

**Параметры:** объект [`DevSecuritiesSearchAllTradesParams`](/docs/api/interfaces/DevSecuritiesSearchAllTradesParams): `exchange`, `symbol`, опционально `format` и пагинация.

**Возвращает:** `Promise<Alltrades | AlltradesSlim | AlltradesHeavy>`

---

## getAlltradesHistory

История сделок по инструменту за выбранный период.

**Параметры:** объект [`DevSecuritiesSearchAllTradesHistoryParams`](/docs/api/interfaces/DevSecuritiesSearchAllTradesHistoryParams): `exchange`, `symbol`, даты и т.д.

**Возвращает:** `Promise<Alltradeshistory | AlltradeshistorySlim | AlltradeshistoryHeavy>`

---

## getActualFuturesQuote

Котировка ближайшего фьючерса по коду.

**Параметры:** объект [`DevSecuritiesFuturesParams`](/docs/api/interfaces/DevSecuritiesFuturesParams): `exchange`, `symbol`, опционально `format`.

**Возвращает:** `Promise<Symbols | SymbolsSlim | SymbolsHeavy>`

---

## getRiskRates

Ставки риска.

**Параметры:** объект [`RiskRatesParams`](/docs/api/interfaces/RiskRatesParams).

**Возвращает:** `Promise<RiskRates>`

---

## getHistory

История (свечи) по бирже и инструменту.

**Параметры:** объект [`DevHistoryParams`](/docs/api/interfaces/DevHistoryParams): `exchange`, `symbol`, `from`, `to`, `timeframe` (интервал в минутах), опционально `format`.

**Возвращает:** `Promise<History | HistorySlim | HistoryHeavy>`

```typescript
const history = await api.instruments.getHistory({
  exchange: 'MOEX',
  symbol: 'SBER',
  from: '2024-01-01',
  to: '2024-01-31',
  timeframe: 60,
});
```

---

## getSecurityDescription

Текстовое описание инструмента по тикеру (вне биржевого API).

**Параметры:** `ticker: string`.

**Возвращает:** `Promise<SecurityDescription>` — поля `symbol`, `description`, `sector`, `isin`, `shortName` и др.

```typescript
const desc = await api.instruments.getSecurityDescription('SBER');
```

---

## getSecurityDividends

Дивиденды по инструменту.

**Параметры:** `ticker: string`.

**Возвращает:** `Promise<SecurityDividend[]>` — даты, сумма на акцию, доходность и т.д.

---

## getNews

Новости с фильтрами.

**Параметры:** объект с полями `limit`, `offset`, `sortDesc`, опционально `symbols` (фильтр по тикерам).

**Возвращает:** `Promise<News[]>`
