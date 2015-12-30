'use strict'

/*
|--------------------------------------------------------------------------
| Flash Sessions
|--------------------------------------------------------------------------
|
| Flash sessions are one time only session values. It is helpful for
| scanerios where you want to display errors messages on form these
| errors will live for one time only.
|
*/

class Flash {

  constructor (View) {
    this.view = View
  }

  * handle (request, response, next) {
    /**
     * pulling flash messages from session, pull method will
     * remove the flash messages from session itself
     */
    const flashMessages = yield request.session.pull('flash_messages')
    request._flash_messages = flashMessages || {}

    /**
     * adding view global method to have access to old method from current
     * request
     */
    this.view.global('old', function (key, defaultValue) {
      return request.old(key, defaultValue)
    })
    yield next
  }

}

module.exports = Flash
