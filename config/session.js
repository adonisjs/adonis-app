'use strict'

const Env = use("Env")

module.exports = {

  /*
  |--------------------------------------------------------------------------
  |   Session Driver
  |--------------------------------------------------------------------------
  |
  |   Here we define session driver to be used in order to create sessions.
  |   Adonis support multiple drivers to storing sessions.
  |
  |   @choices - file|cookie
  */
  
  driver: Env.get('SESSION_DRIVER') || 'cookie'

}
