"use strict";

const Vortex = require("../lib");

var client = new Vortex({
    clientKey: process.env.VORTEX_CLIENT_KEY
  , secretKey: process.env.VORTEX_SECRET_KEY
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

