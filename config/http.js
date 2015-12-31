'use strict'

module.exports = {

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
  subdomainOffset: 2
}
