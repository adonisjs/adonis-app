'use strict'

/*
|--------------------------------------------------------------------------
|   Providers
|--------------------------------------------------------------------------
|
|   Here you register your application providers , they are loaded while
|   booting your app and must be configured with correct path reference.
|
*/

const providers = [
  'adonis-http-dispatcher/providers/AppProvider',
  'adonis-http-dispatcher/providers/RouteProvider',
  'adonis-http-dispatcher/providers/ViewProvider',
  'adonis-http-dispatcher/providers/MiddlewaresProvider',
  'adonis-http-dispatcher/providers/StaticProvider',
  'adonis-http-dispatcher/providers/ServerProvider',
  'adonis-http-dispatcher/providers/HttpExceptionProvider',
  'adonis-http-dispatcher/providers/NamespaceProvider',
  'adonis-http-dispatcher/providers/LoggerProvider',
  'adonis-http-dispatcher/providers/NamespaceProvider',
  'adonis-http-dispatcher/providers/EnvProvider',
  'adonis-http-dispatcher/providers/HelpersProvider',
  'adonis-ace/providers/AnsiProvider',
  'adonis-ace/providers/ConsoleProvider',
  'adonis-ace-commands/providers'
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
  'Middleware' : 'Adonis/Src/Middlewares',
  'Route' : 'Adonis/Src/Route',
  'App' : 'Adonis/Src/App',
  'View' : 'Adonis/Src/View',
  'Env' : 'Adonis/Src/Env',
  'Logger': 'Adonis/Src/Logger',
  'Helpers' : 'Adonis/Src/Helpers',
  'Namespace': 'Adonis/Src/Namespace',
  'Ansi' : 'Adonis/Addons/Ansi',
  'Console' : 'Adonis/Addons/Console'
}

/*
|--------------------------------------------------------------------------
|   Commands
|--------------------------------------------------------------------------
|
|   Here you define your console commands , commands registered here
|   using a valid namespace will be registered with Ace.
|
*/

const commands = [
  'Adonis/Commands/Autoload',
  'Adonis/Commands/Server:Start',
  'Adonis/Commands/Server:Stop',
  'Adonis/Commands/Server:Reload'
]

module.exports = { providers, deferredProviders, aliases, commands }
