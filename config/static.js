'use strict'

module.exports = {

  /*
  |--------------------------------------------------------------------------
  | Cache
  |--------------------------------------------------------------------------
  |
  | Set Cache-Control header on static resources.
  |
  */
  cache: 3600,

  /*
  |--------------------------------------------------------------------------
  | Headers
  |--------------------------------------------------------------------------
  |
  | Custom headers to sent along with static resources response. Make sure it
  | is a valid single level object.
  |
  */
  headers: {},

  /*
  |--------------------------------------------------------------------------
  | GZIP
  |--------------------------------------------------------------------------
  |
  | When set to true, adonis will check for .gz file inside the same folder
  | and serve it inside of original requested file and automatically sets
  | Content-Encoding to gzip.
  |
  */
  gzip: false,

  /*
  |--------------------------------------------------------------------------
  | indexFile
  |--------------------------------------------------------------------------
  |
  | File to serve when serving up directories.
  |
  */
  indexFile: 'index.html'

}
