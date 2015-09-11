'use strict'

/*
|--------------------------------------------------------------------------
|   Providers
|--------------------------------------------------------------------------
|
|   Here you register your application providers , they are loaded while
|   booting your app and must be configured with correct path reference.
|   Path for providers must be require(able) by nodejs require.
|
*/

const providers = [
  'adonis-framework/providers/AppProvider',
  'adonis-framework/providers/LoggerProvider',
  'adonis-framework/providers/HelpersProvider',
  'adonis-framework/providers/NamespaceProvider',
  'adonis-framework/providers/EnvProvider',
  'adonis-framework/providers/MiddlewareProvider',
  'adonis-framework/providers/RouteProvider',
  'adonis-framework/providers/RequestProvider',
  'adonis-framework/providers/ResponseProvider',
  'adonis-framework/providers/ViewProvider',
  'adonis-framework/providers/StaticProvider',
  'adonis-framework/providers/ServerProvider',
  'adonis-framework/providers/HttpExceptionProvider',
  'adonis-lucid/providers/CollectionProvider',
  'adonis-lucid/providers/DatabaseProvider',
  'adonis-lucid/providers/LucidProvider',
  'adonis-ace/providers/AnsiProvider',
  'adonis-ace/providers/ConsoleProvider',
  'adonis-config-provider/providers/ConfigProvider',
  'adonis-validation-provider/providers/ValidatorProvider'
]

/*
|--------------------------------------------------------------------------
|   Deferred Providers
|--------------------------------------------------------------------------
|
|   Here you register lazy load providers , these providers are not loaded
|   on application boot , instead you make them on demand.
|
|   MAKE SURE TO BIND DEFERRED PROVIDERS AS KEY/VALUE PAIR
|
*/

const deferredProviders = {
}

/*
|--------------------------------------------------------------------------
|   Aliases
|--------------------------------------------------------------------------
|
|  Aliases are unique short names for providers namespace, instead of
|  accessing providers with complete namespace you can use them with
|  their aliases
|
*/

const aliases = {
  'Server' : 'Adonis/Src/Server',
  'Static' : 'Adonis/Src/Static',
  'HttpException' : 'Adonis/Src/HttpException',
  'Middleware' : 'Adonis/Src/Middleware',
  'Route' : 'Adonis/Src/Route',
  'App' : 'Adonis/Src/App',
  'View' : 'Adonis/Src/View',
  'Env' : 'Adonis/Src/Env',
  'Logger': 'Adonis/Src/Logger',
  'Helpers' : 'Adonis/Src/Helpers',
  'Namespace': 'Adonis/Src/Namespace',
  'Collection' : 'Adonis/Src/Collection',
  'Database' : 'Adonis/Src/Database',
  'Lucid': 'Adonis/Src/Lucid',
  'Ansi' : 'Adonis/Addons/Ansi',
  'Console' : 'Adonis/Addons/Console',
  'Config' : 'Adonis/Addons/Config',
  'Validator' : 'Adonis/Addons/Validator'
}

/*
|--------------------------------------------------------------------------
|   Commands
|--------------------------------------------------------------------------
|
|   Here you define your console commands , commands defined here
|   using a valid namespace will be registered with Ace.
|
*/

const commands = [
]

module.exports = { providers, deferredProviders, aliases, commands }
