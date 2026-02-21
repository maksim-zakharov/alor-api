# Interface: OrdersActions400CommandAPI

Defined in: [models/models.ts:234](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L234)

## Properties

### message?

> `optional` **message**: `string`

Defined in: [models/models.ts:239](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L239)

Вид ответа для неуникального X-ALOR-REQID

#### Example

```ts
"Request with such X-ALOR-REQID was already handled. We return the response to that request."
```

***

### oldResponse?

> `optional` **oldResponse**: `object`

Defined in: [models/models.ts:240](https://github.com/maksim-zakharov/alor-api/blob/b71ff6c0d3b30a7c4c2dab3a3847dc5d83419cf7/src/models/models.ts#L240)

#### body?

> `optional` **body**: `string`

##### Example

```ts
"Provided json can't be properly deserialised, perhaps you made an error or forgot some field"
```

#### statusCode?

> `optional` **statusCode**: `number`

##### Format

int32

##### Example

```ts
400
```
