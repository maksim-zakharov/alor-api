# Auth (Авторизация)

Доступ: `api.auth`

Сервис авторизации: обновление токена, вход по логину/паролю и двухфакторная аутентификация.

## Методы

| Метод | Описание |
|-------|----------|
| `refreshToken({ refreshToken, endpoint?, type? })` | Обновление access-токена по refresh-токену. `type`: `"dev"` \| `"lk"`. |
| `twoFactorLogin({ login })` | Запрос двухфакторной аутентификации для логина. |
| `login({ login, password, type? })` | Вход в ЛК. `type`: `"lk"` \| `"sso"`. Возвращает `{ jwt, refreshToken }`. |

## Пример

```typescript
const result = await api.auth.refreshToken({
  refreshToken: process.env.ALOR_REFRESH_TOKEN!,
  type: 'dev',
});
api.accessToken = result.AccessToken;
```
