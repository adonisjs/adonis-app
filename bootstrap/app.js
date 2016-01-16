'use strict'

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Here we start by registering providers to Ioc container. Providers
| are modules written for Adonis specifically. You are free to
| remove any providers are not using.
|
*/
const providers = [
  'adonis-framework/providers/ConfigProvider',
  'adonis-framework/providers/HelpersProvider',
  'adonis-framework/providers/AppProvider',
  'adonis-framework/providers/ServerProvider',
  'adonis-framework/providers/RequestProvider',
  'adonis-framework/providers/ResponseProvider',
  'adonis-framework/providers/StaticProvider',
  'adonis-framework/providers/ViewProvider',
  'adonis-framework/providers/EnvProvider',
  'adonis-framework/providers/RouteProvider',
  'adonis-framework/providers/MiddlewareProvider',
  'adonis-framework/providers/SessionProvider',
  'adonis-lucid/providers/DatabaseProvider',
  'adonis-lucid/providers/LucidProvider',
  'adonis-ace/providers/AnsiProvider',
  'adonis-middleware/providers/AppMiddlewareProvider'
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are providers specific for ace only. Do not add them
| to normal providers as they will impact the boot time of your
| application
|
*/
const aceProviders = [
  'adonis-lucid/providers/SchemaProvider',
  'adonis-lucid/providers/RunnerProvider',
  'adonis-commands/providers/GeneratorProvider'
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short names to providers namespaces. As namespaces are big
| it is nice to register aliases for them. Just make sure aliases are
| unique.
|
*/
const aliases = {
  Helpers: 'Adonis/Src/Helpers',
  Config: 'Adonis/Src/Config',
  App: 'Adonis/Src/App',
  Server: 'Adonis/Src/Server',
  Static: 'Adonis/Src/Static',
  View: 'Adonis/Src/View',
  Env: 'Adonis/Src/Env',
  Route: 'Adonis/Src/Route',
  Middleware: 'Adonis/Src/Middleware',
  Database: 'Adonis/Src/Database',
  Lucid: 'Adonis/Src/Lucid',
  Runner: 'Adonis/Src/Runner',
  Schema: 'Adonis/Src/Schema',
  Ansi: 'Adonis/Src/Ansi'
}

/*
|--------------------------------------------------------------------------
| Ace Commands
|--------------------------------------------------------------------------
|
| Ace commands are terminal commands, you should register them here before
| using them.
|
*/
const commands = {
  'greet:user': 'App/Commands/Greet',
  'migration:make': 'Adonis/Commands/Make',
  'migration:run': 'Adonis/Commands/Run',
  'migration:rollback': 'Adonis/Commands/Rollback',
  'make:controller': 'Adonis/Commands/Generate:Controller',
  'make:model': 'Adonis/Commands/Generate:Model',
  'make:command': 'Adonis/Commands/Generate:Command',
  'make:middleware': 'Adonis/Commands/Generate:Middleware'
}

module.exports = {providers, aliases, commands, aceProviders}
