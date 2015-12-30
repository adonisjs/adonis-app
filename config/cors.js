'use strict'

/*
|--------------------------------------------------------------------------
| Cors
|--------------------------------------------------------------------------
|
| Cross domain calls from browsers are sent to server to make the decision whether
| to allow the request or not. This process is done using a preflight request.
| Here we define parameters for HTTP preflight/OPTIONS request.
|
*/
module.exports = {
  origin: false,
  methods: 'GET, PUT, POST',
  headers: true,
  exposeHeaders: false,
  credentials: false,
  maxAge: 90
}
