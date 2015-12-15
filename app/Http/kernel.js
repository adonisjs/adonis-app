'use strict'
/*
|--------------------------------------------------------------------------
|   Middlewares
|--------------------------------------------------------------------------
|
|  Here you define http request specific middlewares, global middlewares
|  will be invoked on every request , where as named middlewares can
|  be bind to a route or group using it's name.
|
*/

const Middleware = use('Middleware')

/*
|--------------------------------------------------------------------------
|   Global Middlewares
|--------------------------------------------------------------------------
|
|   Global middlewares will be executed on every http request.
|
*/
Middleware.global([
  'App/Http/Middleware/BodyParser'
])

/*
|--------------------------------------------------------------------------
|   Named Middlewares
|--------------------------------------------------------------------------
|
|   Named middlewares are key/value pairs that can be referenced on
|   routes using unique keys
|
*/
Middleware.named({

})
