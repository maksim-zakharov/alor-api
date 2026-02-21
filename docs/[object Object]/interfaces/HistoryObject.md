# Interface: HistoryObject

Defined in: [models/models.ts:1625](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1625)

## Properties

### close?

> `optional` **close**: `number`

Defined in: [models/models.ts:1637](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1637)

Цена при закрытии

#### Format

decimal

#### Example

```ts
210.83
```

***

### high?

> `optional` **high**: `number`

Defined in: [models/models.ts:1649](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1649)

Максимальная цена

#### Format

decimal

#### Example

```ts
210.83
```

***

### low?

> `optional` **low**: `number`

Defined in: [models/models.ts:1655](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1655)

Миниимальная цена

#### Format

decimal

#### Example

```ts
210.68
```

***

### open?

> `optional` **open**: `number`

Defined in: [models/models.ts:1643](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1643)

Цена при открытии

#### Format

decimal

#### Example

```ts
210.82
```

***

### time?

> `optional` **time**: `number`

Defined in: [models/models.ts:1631](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1631)

Время (UTC) (Unix time seconds)

#### Format

int64

#### Example

```ts
1532944740
```

***

### volume?

> `optional` **volume**: `number`

Defined in: [models/models.ts:1661](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L1661)

Объём

#### Format

int32

#### Example

```ts
1944
```
