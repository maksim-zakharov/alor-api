# Type Alias: ConditionalResult\<Params, Slim, Heavy, Simple\>

> **ConditionalResult**\<`Params`, `Slim`, `Heavy`, `Simple`\> = `Params`\[`"format"`\] *extends* `"Slim"` ? `Slim` : `Params`\[`"format"`\] *extends* `"Heavy"` ? `Heavy` : `Simple`

Defined in: [types.ts:52](https://github.com/maksim-zakharov/alor-api/blob/2366d4aad57f13e7b71bc0e40ad61c8fec9472fb/src/types.ts#L52)

## Type Parameters

### Params

`Params` *extends* `BaseParams`

### Slim

`Slim`

### Heavy

`Heavy`

### Simple

`Simple`
