# Instruments (Инструменты)

Доступ: `api.instruments`

Сервис рыночных данных: бумаги, котировки, стакан, сделки, история, дивиденды и новости.

## Методы

| Метод | Описание |
|-------|----------|
| `getSecurities(params)` | Список инструментов (с фильтрами). |
| `getSecuritiesByExchange(params)` | Инструменты по бирже. |
| `getSecurityByExchangeAndSymbol(params)` | Один инструмент по бирже и коду. |
| `getQuotes(params)` | Котировки по списку инструментов. |
| `getOrderbookBySeccode(params)` | Стакан по бирже и коду. |
| `getAlltrades(params)` | Все сделки по инструменту за день. |
| `getAlltradesHistory(params)` | История сделок по инструменту. |
| `getActualFuturesQuote(params)` | Котировка ближайшего фьючерса по коду. |
| `getRiskRates(params)` | Ставки риска. |
| `getHistory(params)` | История (свечи) по бирже и инструменту. |
| `getSecurityDescription(ticker)` | Описание инструмента по тикеру. |
| `getSecurityDividends(ticker)` | Дивиденды по инструменту. |
| `getNews(params)` | Новости (с фильтрами по символам). |

## Пример

```typescript
const quotes = await api.instruments.getQuotes({ symbols: 'SBER,GAZP', exchange: 'MOEX' });
const orderbook = await api.instruments.getOrderbookBySeccode({ exchange: 'MOEX', seccode: 'SBER' });
const history = await api.instruments.getHistory({ exchange: 'MOEX', symbol: 'SBER', from, to, timeframe: 60 });
```
