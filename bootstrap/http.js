'use strict'

/*
|--------------------------------------------------------------------------
| HTTP Server Setup
|--------------------------------------------------------------------------
|
| Here we join different pieces and start the HTTP server. It will be
| a matter of seconds to start your shiny Adonis application.
|
*/

const app = require('./app')
const fold = require('adonis-fold')
const path = require('path')
const packageFile = path.join(__dirname, '../package.json')
require('./extend')

module.exports = function (callback) {
  fold.Registrar
    .register(app.providers)
    .then(() => {
      /*
      |--------------------------------------------------------------------------
      | Register Aliases
      |--------------------------------------------------------------------------
      |
      | After registering all the providers, we need to setup aliases so that
      | providers can be referenced with short sweet names.
      |
      */
      fold.Ioc.aliases(app.aliases)

      /*
      |--------------------------------------------------------------------------
      | Register Package File
      |--------------------------------------------------------------------------
      |
      | Adonis application package.json file has the reference to the autoload
      | directory. Here we register the package file with the Helpers provider
      | to setup autoloading.
      |
      */
      const Helpers = use('Helpers')
      const Env = use('Env')
      Helpers.load(packageFile, fold.Ioc)

      /*
      |--------------------------------------------------------------------------
      | Register Events
      |--------------------------------------------------------------------------
      |
      | Here we require the event.js file to register events defined inside
      | events.js file.
      |
      */
      require('./events')

      /*
      |--------------------------------------------------------------------------
      | Load Middleware And Routes
      |--------------------------------------------------------------------------
      |
      | Middleware and Routes are required to oil up your HTTP server. Here we
      | require defined files for same.
      |
      */
      use(Helpers.makeNameSpace('Http', 'kernel'))
      use(Helpers.makeNameSpace('Http', 'routes'))

      /*
      |--------------------------------------------------------------------------
      | Load Http Server And create httpInstance
      |--------------------------------------------------------------------------
      |
      | If you are need server on https, you need replace code on this
      | 
      | @see https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener 
      | @example:
      |
      | const fs = require('fs')
      | const require('https')
      | const options = {
      |  key: fs.readFileSync(Env.get('HTTPS_SERVER_KEY')),
      |  cert: fs.readFileSync(Env.get('HTTPS_SERVER_CERT')),
      | };
      | const Server = use('Adonis/Src/Server')
      | Server.httpInstance = https.createServer(options, Server.handle.bind(Server)) 
      |
      */
      const Server = use('Adonis/Src/Server')

      /*
      |--------------------------------------------------------------------------
      | Load Websocket Channels And Middleware
      |--------------------------------------------------------------------------
      |
      | Websocket channels defination should be loaded before firing the Http
      | server.
      |
      */
      use(Helpers.makeNameSpace('Ws', 'kernel'))
      use(Helpers.makeNameSpace('Ws', 'socket'))

      /*
      |--------------------------------------------------------------------------
      | Load Database Factory
      |--------------------------------------------------------------------------
      |
      | All database/model blueprints are defined inside the below file. We
      | autoload it to be used inside the entire application.
      |
      */
      use(Helpers.databasePath('factory'))

      /*
      |--------------------------------------------------------------------------
      | Start Http Server
      |--------------------------------------------------------------------------
      |
      | We are all set to fire the Http Server and start receiving new requests.
      |
      */
      Server.listen(Env.get('HOST'), Env.get('PORT'))
      if (typeof (callback) === 'function') {
        callback()
      }
    })
    .catch((error) => console.error(error.stack))
}
