'use strict'

class HomeController{

  *index(request,response){
    const view = yield response.view('index')
    response.ok(view)
  }

}

module.exports = HomeController
