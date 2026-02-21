# Введение

**Alor API** — Node.js SDK для работы с [Alor Open API](https://alor.dev).

## Установка

```bash
npm install alor-api
```

## Быстрый старт

```typescript
import { AlorApi } from 'alor-api';

const api = new AlorApi({
  refreshToken: process.env.ALOR_REFRESH_TOKEN!,
});

// Получение информации о счёте
const accounts = await api.getAccounts();
```

## Документация API

Полное описание классов и методов см. в разделе [API Reference](/docs/api).

## Ссылки

- [Репозиторий на GitHub](https://github.com/maksim-zakharov/alor-api)
- [Alor Open API](https://alor.dev)
