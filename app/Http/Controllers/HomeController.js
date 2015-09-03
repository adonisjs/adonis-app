'use strict'

class HomeController{

  *index(request,response){
    const view = yield response.view('index.html')
    response.send(view)
  }

}

module.exports = HomeController
