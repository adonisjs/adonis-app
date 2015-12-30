'use strict'

const App = use('App')
const Ouch = use('ouch')
const Env = use('Env')

/*
|--------------------------------------------------------------------------
| Start
|--------------------------------------------------------------------------
|
| Adonis emits an event after registering providers. Which makes it easier
| for you to hook in your custom implementation to existing providers
|
| @example - Adding filter to views
| View.addFilter('uppercase', function () {
|   // filter logic
| })
|
*/
App.on('start', function () {})

App.on('error', function (error, request, response) {
  /*
  |--------------------------------------------------------------------------
  | Development Mode
  |--------------------------------------------------------------------------
  |
  | In development mode we will show errors inside browser to keep errors
  | pretty and readable.
  |
  */
  if (Env.get('NODE_ENV') === 'development') {
    const ouchInstance = new Ouch().pushHandler(new Ouch.handlers.PrettyPageHandler('blue', null, 'sublime'))
    ouchInstance.handleException(error, request.request, response.response, function () {
      console.log('Handled following error gracefully')
      console.log(error)
    })
    return
  }

  /*
  |--------------------------------------------------------------------------
  | Production Mode
  |--------------------------------------------------------------------------
  |
  | In production it is better to show a simple message for a given error and
  | exit the process
  |
  */
  const status = error.status || 503
  const message = error.message || 'Internal server error'
  console.log(message, error.stack)
  response.status(status).send(message)
  process.exit(1)
})
