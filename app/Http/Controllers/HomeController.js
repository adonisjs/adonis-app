'use strict'

class HomeController {

  * index (request, response) {
    const view = yield response.view('index')
    response.send(view)
  }

}

module.exports = HomeController
