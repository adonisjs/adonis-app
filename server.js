'use strict'

/*
|--------------------------------------------------------------------------
| Http Server
|--------------------------------------------------------------------------
|
| Here we boot the http server by requiring and calling the http server.
| A callback is passed, which is called once the server is booted.
|
*/

const http = require('./bootstrap/http')
http(function () {
  const Event = use('Event')
  Event.fire('Http.start')
})
