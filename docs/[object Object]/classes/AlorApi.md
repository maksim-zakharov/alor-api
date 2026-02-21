# Class: AlorApi

Defined in: [api.ts:38](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L38)

## Constructors

### Constructor

> **new AlorApi**(`options`): `AlorApi`

Defined in: [api.ts:50](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L50)

#### Parameters

##### options

[`AlorOpenApiOptions`](../interfaces/AlorOpenApiOptions.md)

#### Returns

`AlorApi`

## Properties

### accessToken

> **accessToken**: `string`

Defined in: [api.ts:40](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L40)

***

### http

> `readonly` **http**: `Axios`

Defined in: [api.ts:39](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L39)

***

### options

> `readonly` **options**: [`AlorOpenApiOptions`](../interfaces/AlorOpenApiOptions.md)

Defined in: [api.ts:42](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L42)

***

### refresh

> `readonly` **refresh**: `any`

Defined in: [api.ts:44](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L44)

## Accessors

### auth

#### Get Signature

> **get** **auth**(): `AuthService`

Defined in: [api.ts:81](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L81)

##### Returns

`AuthService`

***

### clientInfo

#### Get Signature

> **get** **clientInfo**(): `ClientInfoService`

Defined in: [api.ts:97](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L97)

##### Returns

`ClientInfoService`

***

### instruments

#### Get Signature

> **get** **instruments**(): `InstrumentsService`

Defined in: [api.ts:101](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L101)

##### Returns

`InstrumentsService`

***

### orderGroups

#### Get Signature

> **get** **orderGroups**(): `OrderGroupsService`

Defined in: [api.ts:85](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L85)

##### Returns

`OrderGroupsService`

***

### orders

#### Get Signature

> **get** **orders**(): `OrdersService`

Defined in: [api.ts:89](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L89)

##### Returns

`OrdersService`

***

### ordersWss

#### Get Signature

> **get** **ordersWss**(): `WSSOrdersService`

Defined in: [api.ts:120](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L120)

##### Returns

`WSSOrdersService`

***

### stoporders

#### Get Signature

> **get** **stoporders**(): `StopOrdersService`

Defined in: [api.ts:93](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L93)

##### Returns

`StopOrdersService`

***

### subscriptions

#### Get Signature

> **get** **subscriptions**(): `SubscriptionsService`

Defined in: [api.ts:105](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L105)

##### Returns

`SubscriptionsService`

## Methods

### onAuthCallback()

> **onAuthCallback**(...`args`): `void`

Defined in: [api.ts:79](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L79)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### refreshToken()

> **refreshToken**(): `Promise`\<\{ `AccessToken`: `string`; \}\>

Defined in: [api.ts:142](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L142)

#### Returns

`Promise`\<\{ `AccessToken`: `string`; \}\>

***

### setMaxListeners()

> **setMaxListeners**(`__namedParameters`): `void`

Defined in: [api.ts:109](https://github.com/maksim-zakharov/alor-api/blob/3b8532d44ddd22bae03b068d0c63473e6d89249e/src/api.ts#L109)

#### Parameters

##### \_\_namedParameters

###### ordersWss?

`number`

###### subscriptions?

`number`

#### Returns

`void`
