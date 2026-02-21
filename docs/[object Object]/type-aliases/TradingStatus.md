# Type Alias: TradingStatus

> **TradingStatus** = `number`

Defined in: [models/models.ts:135](https://github.com/maksim-zakharov/alor-api/blob/3acf35a3fdcf16171aeb7102b1bcc4ea6b4c4ecb/src/models/models.ts#L135)

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
