'use strict'

/*
|--------------------------------------------------------------------------
|   Application Exceptions
|--------------------------------------------------------------------------
|
|  Here we handle application exceptions thrown during http lifecycle.
|  You are free to throw errors using App and catch them here.
|
*/

const App = use('App')
const Env = use("Env")
const Logger = use("Logger")
const Ouch = use('ouch')

App.on('error', function (error,request,response) {


  /*
  |--------------------------------------------------------------------------
  |   Development Only
  |--------------------------------------------------------------------------
  |
  |  While we are running our application under development , it will nice
  |  to show descriptive errors.
  |
  */
  if(Env.get("NODE_ENV") === 'development'){

    const ouchInstance = (new Ouch).pushHandler(new Ouch.handlers.PrettyPageHandler('orange', null, 'sublime'))
    ouchInstance.handleException(error, request.request, response.response, function (output) {
      Logger.info("handled error gracefully")
    });

    return
  }


  /*
  |--------------------------------------------------------------------------
  |   Under Production / Staging
  |--------------------------------------------------------------------------
  |
  |   We should turn off descriptive errors under production environment,
  |   and try to show simple yet useful error messages.
  |
  */

  const code = error.status || 503
  const message = error.message || 'Unexpected error occured'
  const stack = error.stack || 'Error stack not available'

  response.status(code).send(message)
  Logger.error(stack)
  process.exit(1)

})
