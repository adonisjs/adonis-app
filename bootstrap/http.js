'use strict'

/*
|--------------------------------------------------------------------------
|   Bootstrap App
|--------------------------------------------------------------------------
|
|  Here we bootstrap our http server by registering providers to IOC
|  container , registering aliases and autoloading app directory.
|
*/

const fold = require('adonis-fold')
const app = require('./app')
const path = require('path')
const Registrar = fold.Registrar
const Ioc = fold.Ioc
require('./extend')

module.exports = function () {
  Registrar
    .register(app.providers)
    .then(function () {
      /*
      |--------------------------------------------------------------------------
      | Setting up providers aliases
      |--------------------------------------------------------------------------
      |
      | Adonis providers are registered with long namespace, which
      | may be difficult to remember. Aliases are short names
      | mapped to namespaces
      |
      */
      Ioc.aliases(app.aliases)

      /*
      |--------------------------------------------------------------------------
      | Setting up helpers
      |--------------------------------------------------------------------------
      |
      | Helpers gives you easy access to different paths and folders inside your
      | application. Here we setup helpers by passing path to the package file
      | of this application.
      |
      */
      const packageFile = path.join(__dirname, '../package.json')
      const Helpers = use('Helpers')
      Helpers.load(packageFile, Ioc)
      const appNameSpace = Helpers.appNameSpace()

      /*
      |--------------------------------------------------------------------------
      | Emitting app start event
      |--------------------------------------------------------------------------
      |
      | Emitting app start event to notify application has been booted. From
      | here you can access/extend providers.
      |
      */
      require('./start')
      const App = use('App')
      App.emit('start')

      /*
      |--------------------------------------------------------------------------
      | Loading Middleware
      |--------------------------------------------------------------------------
      |
      | Here we load all middleware required by http requests.
      |
      */
      use(`${appNameSpace}/Http/kernel`)

      /*
      |--------------------------------------------------------------------------
      | Loading Routes
      |--------------------------------------------------------------------------
      |
      | Here we load all registered routes required by http requests.
      |
      */
      use(`${appNameSpace}/Http/routes`)

      /*
      |--------------------------------------------------------------------------
      | Booting Server
      |--------------------------------------------------------------------------
      |
      | Finally we boot our http server on a given host and port. If you are
      | planning to use https follow below example.
      | @example
      | const https = use('https')
      | https.createServer(options, Server.handle.bind(Server)).listen()
      |
      */
      const Server = use('Server')
      const Env = use('Env')
      Server.listen(Env.get('APP_HOST'), Env.get('APP_PORT'))
    })
    .catch(console.error)
}
