'use strict'

/*
|--------------------------------------------------------------------------
| Http Server
|--------------------------------------------------------------------------
|
| Here we boot the HTTP Server by calling the exported method. A callback
| function is optionally passed which is executed, once the HTTP server
| is booted.
|
*/

const http = require('./bootstrap/http')
http(function () {
  const Event = use('Event')
  Event.fire('Http.start')
})
