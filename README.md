<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# vortex-api

 [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/imjeffparedes/ama) [![Version](https://img.shields.io/npm/v/vortex-api.svg)](https://www.npmjs.com/package/vortex-api) [![Downloads](https://img.shields.io/npm/dt/vortex-api.svg)](https://www.npmjs.com/package/vortex-api) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/jeffparedes?utm_source=github&utm_medium=button&utm_term=imjeffparedes&utm_campaign=github)


> Vortex API wrapper for Node.js

The [Vortex API Reference](https://www.myvortex1.com/api_documentation) is a good resource to learn more about these APIs.

## :cloud: Installation

```sh
# Using npm
npm install --save vortex-api
```


## :clipboard: Example



```js
"use strict";

const Vortex = require("../lib");

var client = new Vortex({
    clientKey: process.env.VORTEX_CLIENT_KEY
  , secretKey: process.env.VORTEX_SECRET_KEY
  , apiKey: process.env.VORTEX_API_KEY
    // This is optional
  , accessToken : process.env.VORTEX_INITIAL_ACCESS_TOKEN   
  , version: 'v1'
  , host: "https://techdata.smart.com.ph"
});

client.token({
        grant_type: 'client_credentials'
    }, (err, body, res) => {
    console.log(err || body);
    // =>
    // {
    //  "access_token": "30ea500f-7d09-3d5e-8d87-1a9fbbef2a83",
    //  "scope": "am_application_scope default",
    //  "token_type": "Bearer",
    //  "expires_in": 3293
    // }
    
    client.wallets((err, body, res) => {
        console.log(err || body);
    });
});
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/jeffparedes). :rocket:



## :memo: Documentation

You can see below the API reference of this module.

### `Vortex(options)`
Creates the instance of the `Vortex` class.

#### Params

 - **Object** `options`: An object containing:
 - `clientKey` (String): Account Client Key (mandatory).
 - `secretKey` (String): Account Secret Key (mandatory).
 - `apiKey` (String): The unique API Key assigned per Dealer (mandatory).
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




## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I do web services and open-source my used projects as much as I can. I will try to reply to everyone needing help using these projects. It consumes a lot of time and hardwork. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `344FWmvxDt6FFFoYoFjftiT3gGus68AqNw`

    ![](https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=344FWmvxDt6FFFoYoFjftiT3gGus68AqNw)


Thank you! :heart:



## :scroll: License

[MIT][license]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/jeffparedes
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VZZNWZM394KBC

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md