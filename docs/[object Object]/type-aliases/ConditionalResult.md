# Type Alias: ConditionalResult\<Params, Slim, Heavy, Simple\>

> **ConditionalResult**\<`Params`, `Slim`, `Heavy`, `Simple`\> = `Params`\[`"format"`\] *extends* `"Slim"` ? `Slim` : `Params`\[`"format"`\] *extends* `"Heavy"` ? `Heavy` : `Simple`

Defined in: [types.ts:52](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/types.ts#L52)

## Type Parameters

### Params

`Params` *extends* `BaseParams`

### Slim

`Slim`

### Heavy

`Heavy`

### Simple

`Simple`
