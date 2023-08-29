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
const summary = await api.clientInfo.getSummary({ 
  portfolio: '<your-portfolio>', 
  exchange: Exchange.MOEX 
});

// Получение информации о позициях
const positions = await api.clientInfo.getPositions({
  portfolio: '<your-portfolio>',
  exchange: Exchange.MOEX,
  withoutCurrency: true,
});
```

### Стримы
Для работы со подписками сделана обертка `api.subscriptions`:
```ts
// подписка на свечи
const unsubscribe = await api.subscriptions.candles({
    code: 'SBER',
    exchange: Exchange.MOEX,
    from: startDateTime,
    tf: Timeframe.Min5,
    delayed: false,
  }, candle => console.log(candle));

// отписаться
await unsubscribe();

// обработка дополнительных событий
api.subscriptions.on('error', error => console.log('stream error', error));
api.subscriptions.on('close', error => console.log('stream closed, reason:', error));
```
Стримы доступны по следующим сущностям:
* `.orderBook(request, handler)`
* `.candles(request, handler)`
* `.quotes(request, handler)`
* `.alltrades(request, handler)`
* `.positions(request, handler)`
* `.summary(request, handler)`
* `.risks(request, handler)`
* `.spectraRisks(request, handler)`
* `.trades(request, handler)`
* `.orders(request, handler)`
* `.instruments(request, handler)`
* `.stoporders(request, handler)`