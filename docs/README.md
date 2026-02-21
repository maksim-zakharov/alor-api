# Документация Alor API

Сайт документации на [Docusaurus](https://docusaurus.io) с API Reference из [TypeDoc](https://typedoc.org).

## Локальная разработка

Из корня репозитория:

```bash
npm run docs:install   # установка зависимостей docs
npm run docs:start    # dev-сервер (hot reload)
```

Или из папки `docs`:

```bash
cd docs && npm ci && npm run start
```

## Сборка

```bash
npm run docs:build
```

Артефакт: `docs/build/`.

## Деплой на GitHub Pages

При пуше в ветку `master` workflow [.github/workflows/docs.yml](../.github/workflows/docs.yml) собирает документацию и публикует её в GitHub Pages.

**Важно:** в настройках репозитория (Settings → Pages) должен быть выбран источник **GitHub Actions**.

Сайт будет доступен по адресу: `https://maksim-zakharov.github.io/alor-api/`.
