'use strict'

/*
|--------------------------------------------------------------------------
|   Routes
|--------------------------------------------------------------------------
|
|   Here we register application routes and bind controller methods or
|   Closure to them. Keep this file for defining routes only and do
|   not pollute it writing application specific code.
|
*/

const Route = use('Route')

Route.get('/', 'HomeController.index')
