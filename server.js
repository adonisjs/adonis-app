'use strict'

/*
|--------------------------------------------------------------------------
| Run Server
|--------------------------------------------------------------------------
|
| We expose this file to node to start a new http server. All
| magic happens inside bootstrap/http.js, this file just
| calls the exported method to begin the magic
|
*/
require('./bootstrap/http')()
