'use strict'

const Env = use('Env')

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | APP KEY
  |--------------------------------------------------------------------------
  |
  | Application is a randomly generated key required to encrypted data flow
  | via adonis. Make sure to set this key inside .env to keep your sessions/
  | cookies encrypted
  |
  */
  appKey: Env.get('APP_KEY', 'secretKey'),

  encryption: {
    /*
    |--------------------------------------------------------------------------
    | Encryption algorithm
    |--------------------------------------------------------------------------
    |
    | Encryption algorithm defines the algorithm to be used while encrypting
    | values. Under the hood adonis makes of node-crypto.
    |
    */
    algorithm: 'aes-256-cbc'
  },

  http: {
    /*
    |--------------------------------------------------------------------------
    | Trust Proxy
    |--------------------------------------------------------------------------
    |
    | Trust proxy defines whether X-Forwaded-* headers should be trusted or not.
    | When your application is behind a proxy server like nginx, these values
    | are set automatically and should be trusted. Apart from setting it
    | to true or false Adonis supports handful or ways to allow proxy
    | values. Read documentation for that.
    |
    */
    trustProxy: false,

    /*
    |--------------------------------------------------------------------------
    | Subdomains
    |--------------------------------------------------------------------------
    |
    | Offset to be used for returning subdomains for a given request.For
    | majority of applications it will be 2, until you have nested
    | sudomains.
    | cheatsheet.adonisjs.com      - offset - 2
    | virk.cheatsheet.adonisjs.com - offset - 3
    |
    */
    subdomainOffset: 2,

    /*
    |--------------------------------------------------------------------------
    | Set Powered By
    |--------------------------------------------------------------------------
    |
    | Adonis will set response header X-Powered-By if below value is set to
    | true. Consider this as a way of saying thanks to us.
    |
    */
    setPoweredBy: true,

    /*
    |--------------------------------------------------------------------------
    | JSONP Callback
    |--------------------------------------------------------------------------
    |
    | Default jsonp callback to be used when callback query string is missing
    | in request url.
    |
    */
    jsonpCallback: 'callback'
  },

  views: {
    /*
    |--------------------------------------------------------------------------
    | Cache Views
    |--------------------------------------------------------------------------
    |
    | Define whether or not to cache the compiled view. Set it to true in
    | production to optimize view loading time.
    |
    */
    cache: Env.get('CACHE_VIEWS', true)
  }
}
