# alor-api
Node.js SDK для работы с [Alor Open API](https://alor.dev/docs).

<!-- toc -->

- [Установка](#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
- [Использование](#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    * [Подключение](#%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)
    * [Unary-запросы](#unary-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B)
    * [Стримы](#%D1%81%D1%82%D1%80%D0%B8%D0%BC%D1%8B)

<!-- tocstop -->

## Установка
```
npm i alor-api
```

## Использование
### Подключение
```ts
import { AlorApi } from 'alor-api';

// создать клиента с заданным токеном доступа
const api = new AlorApi({ token: '<your-token>', endpoint: Endpoint.PROD, wssEndpoint: WssEndpoint.PROD });
```
Как получить токен доступа описано [тут](https://alor.dev/open-api-tokens).

### API-запросы

```ts
import {Exchange} from "./types";

// Получение информации о портфеле
const summary = await api.portfolio.getSummary({exchange: Exchange.MOEX, portfolio: '<your-portfolio>'});

// Получение информации о позициях
const positions = await api.portfolio.getPositions({exchange: Exchange.MOEX, portfolio: '<your-portfolio>'});
```

### Стримы
Для работы со стримом сделана обертка `api.stream`:
```ts
// подписка на свечи
const unsubscribe = await api.stream.candles({
    code: 'SBER',
    exchange: Exchange.MOEX,
    from: startDateTime,
    tf: Timeframe.Min5,
    delayed: false,
  }, candle => console.log(candle));

// отписаться
await unsubscribe();

// обработка дополнительных событий
api.stream.on('error', error => console.log('stream error', error));
api.stream.on('close', error => console.log('stream closed, reason:', error));
```
Стримы доступны по следующим сущностям:
* `.orders(request, handler)`
* `.stoporders(request, handler)`
* `.positions(request, handler)`
* `.summary(request, handler)`
* `.quotes(request, handler)`
* `.candles(request, handler)`
* `.orderBook(request, handler)`
* `.alltrades(request, handler)`