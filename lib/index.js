"use strict";

const request = require("request")
    , querystring = require("querystring")
    ;

module.exports = class Vortex {
    /**
     * Vortex
     * Creates the instance of the `Vortex` class.
     *
     * @name Vortex
     * @function
     * @param {Object} options An object containing:
     *
     *  - `clientKey` (String): Account Client Key (mandatory).
     *  - `secretKey` (String): Account Secret Key (mandatory).
     *  - `apiKey` (String): The unique API Key assigned per Dealer (mandatory).
     *  - `accessToken` (String): Account Bearer access token.
     *  - `version` (String): Vortex api version. (default: `v1`).
     *  - `host` (String): Vortex api host (default: `https://techdata.smart.com.ph`).
     */
    constructor (options) {
        this.options = options;
        this.clientKey = options.clientKey || process.env.VORTEX_CLIENT_KEY;
        this.secretKey = options.secretKey || process.env.VORTEX_SECRET_KEY;
        this.apiKey = options.apiKey || process.env.VORTEX_API_KEY;
        this.accessToken = options.accessToken; 
        this.version = options.version || 'v1';
        this.host = options.host || "https://techdata.smart.com.ph";
    }

    /**
     * token
     * Get an authorization token to use in Product, Wallet, Topup and Bills Payment Service.
     *
     * @name token
     * @function
     * @param {Object} data Get Token parameter (documented [here](https://www.myvortex1.com/api_documentation#resources-get-token)).
     * @param {Function} cb The callback function.
     */
    token (data, cb) {
        const auth = new Buffer(this.clientKey + ":" + this.secretKey).toString('base64');
        return request({
            url: this.host+'/token'
          , method: 'post'
          , headers: {
             'Authorization': "Basic " + auth
            ,'Accept': 'application/json'
            ,'Content-Type': 'application/x-www-form-urlencoded'
            }
          , json: true
          , form: data ? data : true
        }, (err, res) => {
            let body = res ? res.body : null;
            this.accessToken = res ? res.body.access_token:null;
            cb(err, body, res);
        });
    }

    /**
     * products
     * Retrieve all products assigned to a Dealer given the API Key.
     *
     * @name products
     * @function
     * @param {Function} cb The callback function.
     */
    products (cb) {
         return this._request({
            url: 'products/'+this.apiKey
         },cb);
    }

    /**
     * wallets
     * Retrieve all wallets assigned to a Dealer given the API Key.
     *
     * @name wallets
     * @function
     * @param {Function} cb The callback function.
     */
    wallets (cb) {
         return this._request({
            url: 'wallets/'+this.apiKey
         },cb);
    }

    /**
     * topup
     * Topup a mobile number.
     *
     * @name topup
     * @function
     * @param {Object} data topup parameter (documented [here](https://www.myvortex1.com/api_documentation#resources-create-transaction)).
     * @param {Function} cb The callback function.
     */
    topup (data, cb) {
         return this._request({
             url: 'topup'
            ,method: 'post'
            ,data: data
         },cb);
    }

    /**
     * getTopup
     * Retrieve topup transaction details given a reference number.
     *
     * @name getTopup
     * @function
     * @param {String} refNo The unique transaction reference number.
     * @param {Function} cb The callback function.
     */
    getTopup (refNo, cb) {
         return this._request({
             url: 'topup/'+refNo
         },cb);
    }

    /**
     * billers
     * Retrieve all wallets assigned to a Dealer given the API Key.
     *
     * @name billers
     * @function
     * @param {Object} params Get Billers query parameters (documented [here](https://www.myvortex1.com/api_documentation#resources-get-billers)).
     * @param {Function} cb The callback function.
     */
    billers (params, cb) {
         return this._request({
             url: 'bills-payment/billers/'
            ,params: params
         },cb);
    }

    /**
     * getBiller
     * Retrieve the transaction details given a reference number.
     *
     * @name getBiller
     * @function
     * @param {String} billerId The Unique Biller ID.
     * @param {Function} cb The callback function.
     */
    getBiller (billerId, cb) {
         return this._request({
             url: 'bills-payment/billers/'+billerId
         },cb);
    }

    /**
     * billsPayment
     * Pay Bills.
     *
     * @name billsPayment
     * @function
     * @param {Object} data Pay Bills parameter (documented [here](https://www.myvortex1.com/api_documentation#resources-pay)).
     * @param {Function} cb The callback function.
     */
    billsPayment (data, cb) {
         return this._request({
             url: 'bills-payment'
            ,method: 'post'
            ,data: data
         },cb);
    }

    /**
     * getBillsPayment
     * Retrieve bills payment transaction details given a reference number.
     *
     * @name getBillsPayment
     * @function
     * @param {String} refNo The unique transaction reference number.
     * @param {Function} cb The callback function.
     */
    getBillsPayment (refNo, cb) {
         return this._request({
             url: 'topup/'+refNo
         },cb);
    }

    /**
     * billsPaymentHistory
     * Retrieve bills payment transaction history given the consumer key assigned to specific user.
     *
     * @name billsPaymentHistory
     * @function
     * @param {Object} params The query parameters (documented [here](https://www.myvortex1.com/api_documentation#resources-get-biller-history)).
     * @param {Function} cb The callback function.
     */
    billsPaymentHistory (params, cb) {
         return this._request({
             url: 'topup/'+this.apiKey
            ,params: params
         },cb);
    }

    /**
     * pins
     * Dispense PIN Based Product.
     *
     * @name pins
     * @function
     * @param {Object} params Get Pins query parameters (documented [here](https://www.myvortex1.com/api_documentation#resources-get-pins)).
     * @param {Function} cb The callback function.
     */
    pins (params, cb) {
         return this._request({
             url: 'pins/'+this.apiKey
            ,params: params
         },cb);
    }


    /**
     * _request
     * Low level function for making requests to the API endpoints.
     *
     * @name _request
     * @function
     * @param {Object} options An object containing the following fields:
     *
     *  - `url` (String): The api endpoint.
     *  - `method` (String): The request method (default: `get`).
     *  - `params` (Object): The params object.
     *  - `data` (Object): The POST data object.
     *  - `version` (String): API Version. If not specified your pinned verison is used.
     *
     * @param {Function} cb The callback function.
     */
    _request (options, cb) {
        let _url = options.url
          , method = options.method || "get"
          , params = options.params || {}
          , data = options.data
          , version = options.version || this.version
          , qs = querystring.stringify(params)
          , removeTrailingSlash = options.removeTrailingSlash || false
          , url = this.host + "/vortex/api/" + version +"/"+ _url + (removeTrailingSlash ? "" : "/") + (qs ? "?" + qs : "")
          ;

        return request({
            url: url
          , method: method
          , headers: {
               'Accept': 'application/json'
             , 'Content-Type': 'application/json'
             , 'Authorization': 'Bearer '+this.accessToken
            }
          , json: data ? data : true
        }, (err, res) => {
            let body = res ? res.body : null;
            cb(err, body, res);
            
        })
    }
};