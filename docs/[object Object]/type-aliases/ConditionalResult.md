# Type Alias: ConditionalResult\<Params, Slim, Heavy, Simple\>

> **ConditionalResult**\<`Params`, `Slim`, `Heavy`, `Simple`\> = `Params`\[`"format"`\] *extends* `"Slim"` ? `Slim` : `Params`\[`"format"`\] *extends* `"Heavy"` ? `Heavy` : `Simple`

Defined in: [types.ts:52](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/types.ts#L52)

## Type Parameters

### Params

`Params` *extends* `BaseParams`

### Slim

`Slim`

### Heavy

`Heavy`

### Simple

`Simple`
