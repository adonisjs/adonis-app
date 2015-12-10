'use strict'

/*
|--------------------------------------------------------------------------
|   Bootstrap App
|--------------------------------------------------------------------------
|
|  Here we bootsrap our http server by registering providers to IOC
|  container , and autoloading app directory
|
*/

const fold = require('adonis-fold')
const app = require('./app')
const path = require('path')
const Registerar = fold.Registerar
const packageFile = require('../package.json')
const Ioc = fold.Ioc

module.exports = function(){

  Registerar
  .register(app.providers,app.deferredProviders)
  .then(function(){

    /*
    |--------------------------------------------------------------------------
    |   Setting Up aliases
    |--------------------------------------------------------------------------
    |
    |   After registering providers with Ioc container , we define registered
    |   aliases for them.
    |
    */
    Ioc.aliases(app.aliases)

    /*
    |--------------------------------------------------------------------------
    |   App Helpers
    |--------------------------------------------------------------------------
    |
    |   Here we setup app helpers, helpers gives absolute path to certain
    |   directories , which is indeed required by core and other
    |   service providers
    |
    */
    const Helpers = use("Helpers")
    Helpers.load(path.join(__dirname,'../package.json'))

    /*
    |--------------------------------------------------------------------------
    |   App namespace
    |--------------------------------------------------------------------------
    |
    |   Here we bind app directory as autoload path with Ioc container
    |
    */
    const Namespace = use("Namespace")
    Namespace.autoload()

    /*
    |--------------------------------------------------------------------------
    |   Loading Middlewares
    |--------------------------------------------------------------------------
    |
    |   Here we register http middlewares
    |
    */
    use("App/Http/kernel")

    /*
    |--------------------------------------------------------------------------
    |   Loading Routes
    |--------------------------------------------------------------------------
    |
    |   Here we register routes to http dispatcher.
    |
    */
    use("App/Http/routes")


    /*
    |--------------------------------------------------------------------------
    |   Application Exceptions
    |--------------------------------------------------------------------------
    |
    |   Here we make sure we are handling any exceptions thrown during
    |   http request.
    |
    */
    use("App/Exceptions/handler")

    /*
    |--------------------------------------------------------------------------
    |   Setting up static resource
    |--------------------------------------------------------------------------
    |
    |   Here we setup static directory to server static assets
    |
    */
    const Static = use("Static")
    Static.public('public',path.join(__dirname,'../public'))

    /*
    |--------------------------------------------------------------------------
    |   Starting server
    |--------------------------------------------------------------------------
    |
    |   As everything is loaded and configured properly , we can start
    |   our server on a given port.
    |
    */
    const Server = use("Server")
    const Env = use("Env")
    Server.start(Env.get("APP_HOST"), Env.get("APP_PORT"))

  }).catch(function(error){
    console.log(error.stack);
    process.exit(0)
  })

}
