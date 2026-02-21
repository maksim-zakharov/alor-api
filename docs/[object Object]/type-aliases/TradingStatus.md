# Type Alias: TradingStatus

> **TradingStatus** = `number`

Defined in: [models/models.ts:135](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L135)

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

## Format

int32

## Example

```ts
17
```
