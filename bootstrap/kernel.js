'use strict'

/*
|--------------------------------------------------------------------------
|   Registering Console Commands
|--------------------------------------------------------------------------
|
|   Here we register all commands to ace store and register providers
|   IOC container.
|
*/

const fold = require('adonis-fold')
const app = require('./app')
const path = require('path')
const Ace = require('adonis-ace')
const packageFile = require('../package.json')
const Store = Ace.Store
const Registerar = fold.Registerar
const Ioc = fold.Ioc

const providersList = app.providers.concat(app.aceProviders)

module.exports = function(){

  Registerar
  .register(providersList,app.deferredProviders)
  .then(function () {

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
    |   Registering Commands
    |--------------------------------------------------------------------------
    |
    |  Here we register commands to ace store
    |
    */

    Store.register(app.commands)


    /*
    |--------------------------------------------------------------------------
    |   Invoking Command
    |--------------------------------------------------------------------------
    |
    |   Finally we call invoke method on ace store , which itself figures
    |   out command ran by the user.
    |
    */
    Store.invoke(require('adonis-framework/package.json'))
  }).catch(function(error){
    console.log(error.stack);
    process.exit(0)
  })
}
