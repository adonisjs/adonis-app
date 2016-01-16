'use strict'

/*
|--------------------------------------------------------------------------
|   Bootstrap App
|--------------------------------------------------------------------------
|
|  Here we bootstrap our app by registering providers to IOC
|  container , registering aliases and autoloading app directory.
|
*/

const fold = require('adonis-fold')
const app = require('./app')
const Ace = require('adonis-ace')
const path = require('path')
const Registrar = fold.Registrar
const Ioc = fold.Ioc
const allProviders = app.providers.concat(app.aceProviders)
require('./extend')

module.exports = function () {
  Registrar
    .register(allProviders)
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
      | Registering Commands
      |--------------------------------------------------------------------------
      |
      | Next we register our commands to the ace store, which will picked
      | by ace as we type them on terminal
      |
      */
      Ace.Store.register(app.commands)

      /*
      |--------------------------------------------------------------------------
      | Invoking Command
      |--------------------------------------------------------------------------
      |
      | Finally we construct ace to invoke the command
      |
      */
      Ace.Runner.invoke(require('adonis-framework/package.json'))
    })
    .catch(console.error)
}
