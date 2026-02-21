# Auth (Авторизация)

Доступ: `api.auth`

Сервис авторизации: обновление токена, вход по логину/паролю и двухфакторная аутентификация.

---

## refreshToken

Обновляет access-токен по refresh-токену. Используется middleware при истечении сессии.

**Параметры (объект):**

| Параметр       | Тип              | Обязательный | Описание |
|----------------|------------------|--------------|----------|
| `refreshToken` | `string`         | да           | Refresh-токен из ЛК или SSO. |
| `endpoint`     | `AuthEndpoint`   | нет          | URL эндпоинта авторизации. По умолчанию `AuthEndpoint.PROD`. |
| `type`         | `"dev"` \| `"lk"`| нет          | Тип обновления: `dev` — Alor Dev, `lk` — ЛК. По умолчанию `"dev"`. |

**Возвращает:** `Promise<{ AccessToken: string }>`

**Пример:**

```typescript
const { AccessToken } = await api.auth.refreshToken({
  refreshToken: process.env.ALOR_REFRESH_TOKEN!,
  type: 'dev',
});
api.accessToken = AccessToken;
api.http.defaults.headers['Authorization'] = `Bearer ${AccessToken}`;
```

---

## twoFactorLogin

Запрашивает отправку кода двухфакторной аутентификации на указанный логин (например, СМС).

**Параметры (объект):**

| Параметр | Тип     | Описание   |
|----------|---------|------------|
| `login`  | `string`| Логин пользователя. |

**Возвращает:** `Promise<boolean>`

**Пример:**

```typescript
await api.auth.twoFactorLogin({ login: 'user@example.com' });
// Код отправлен; далее пользователь вводит его в ЛК или при следующем вызове login.
```

---

## login

Вход в личный кабинет или через SSO. Возвращает JWT и refresh-токен для дальнейших вызовов API.

**Параметры (объект):**

| Параметр   | Тип              | Обязательный | Описание |
|------------|------------------|--------------|----------|
| `login`    | `string`         | да           | Логин.   |
| `password` | `string`         | да           | Пароль.  |
| `type`     | `"lk"` \| `"sso"`| нет          | Тип входа. По умолчанию `"lk"`. |

**Возвращает:** `Promise<{ jwt: string; refreshToken: string }>`

**Пример:**

```typescript
const { jwt, refreshToken } = await api.auth.login({
  login: 'user@example.com',
  password: 'secret',
  type: 'lk',
});
api.accessToken = jwt;
// refreshToken сохраните для refreshToken()
```
