
## :memo: Documentation

You can see below the API reference of this module.

### `Vortex(options)`
Creates the instance of the `Vortex` class.

#### Params

 - **Object** `options`: An object containing:
 - `clientKey` (String): Account Client Key (mandatory).
 - `secretKey` (String): Account Secret Key (mandatory).
 - `accessToken` (String): Account Bearer access token.
 - `version` (String): Vortex api version. (default: `v1`).
 - `host` (String): Vortex api host (default: `https://techdata.smart.com.ph`).


### `token(data, cb)`
Get an authorization token to use in Product, Wallet, Topup and Bills Payment Service.

#### Params

- **Object** `data`: Get Token parameter (documented [here](https://www.myvortex1.com/api_documentation#resources-get-token)).
- **Function** `cb`: The callback function.


### `products(cb)`
Retrieve all products assigned to a Dealer given the API Key.

#### Params

- **Function** `cb`: The callback function.


### `wallets(cb)`
Retrieve all wallets assigned to a Dealer given the API Key.

#### Params

- **Function** `cb`: The callback function.


### `topup(data, cb)`
Topup a mobile number.

#### Params

- **Object** `data`: topup parameter (documented [here](https://www.myvortex1.com/api_documentation#resources-create-transaction)).
- **Function** `cb`: The callback function.


### `getTopup(refNo, cb)`
Retrieve topup transaction details given a reference number.

#### Params

- **String** `refNo`: The unique transaction reference number.
- **Function** `cb`: The callback function.


### `billers(params, cb)`
Retrieve all wallets assigned to a Dealer given the API Key.

#### Params

- **Object** `params`: Get Billers query parameters (documented [here](https://www.myvortex1.com/api_documentation#resources-get-billers)).
- **Function** `cb`: The callback function.


### `getBiller(billerId, cb)`
Retrieve the transaction details given a reference number.

#### Params

- **String** `billerId`: The Unique Biller ID.
- **Function** `cb`: The callback function.


### `billsPayment(data, cb)`
Pay Bills.

#### Params

- **Object** `data`: Pay Bills parameter (documented [here](https://www.myvortex1.com/api_documentation#resources-pay)).
- **Function** `cb`: The callback function.


### `getBillsPayment(refNo, cb)`
Retrieve bills payment transaction details given a reference number.

#### Params

- **String** `refNo`: The unique transaction reference number.
- **Function** `cb`: The callback function.


### `billsPaymentHistory(params, cb)`
Retrieve bills payment transaction history given the consumer key assigned to specific user.

#### Params

- **Object** `params`: The query parameters (documented [here](https://www.myvortex1.com/api_documentation#resources-get-biller-history)).
- **Function** `cb`: The callback function.


### `pins(params, cb)`
Dispense PIN Based Product.

#### Params

- **Object** `params`: Get Pins query parameters (documented [here](https://www.myvortex1.com/api_documentation#resources-get-pins)).
- **Function** `cb`: The callback function.
