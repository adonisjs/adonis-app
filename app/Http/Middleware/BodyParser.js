'use strict'

/*
|--------------------------------------------------------------------------
| Body Parser
|--------------------------------------------------------------------------
|
| Body parser parses request body to fetch post data and form uploads.
| Let this file be here if you want to parse request body
|
*/

const formidable = use('formidable')
const rawBody = use('raw-body')

class BodyParser {
  /**
   * @description parses request body to fetch post data and form
   * @method parse
   * uploads
   * @param  {Object}   form
   * @param  {Object}   request
   * @return {void}
   * @public
  */
  parse (form, request) {
    return new Promise(function (resolve, reject) {
      /**
       * here we check for request type, handle text/*
       * request via raw body parser
       */
      if (request.is('text/*')) {
        rawBody(request.request)
          .then(function (buffer) {
            resolve({raw: buffer.toString()})
          }).catch(reject)
        return
      }
      /**
       * here we parse json data, multipart uploads and x-form-urlencoded
       * request
       */
      form.parse(request.request, function (error, fields, files) {
        /**
         * reject with error if there is an error
         */
        if (error) {
          return reject(error)
        }
        resolve({fields, files})
      })
    })
  }

  /**
   * @description this method gets called by adonis
   * @method handle
   * middleware layer.
   * @param  {Object}   request
   * @param  {Object}   response
   * @param  {Function} next
   * @return {void}
   * @public
   */
  * handle (request, response, next) {
    /**
     * parsing incoming request form
     */
    const form = new formidable.IncomingForm()

    try {
      const formFields = yield this.parse(form, request)
      /**
       * make sure to set request body, so that
       * adonnis request can use it
       * @type {Object}
       */

      request.request._body = formFields.fields || null
      /**
       * make sure to set uploaded files , so that
       * adonis request can return uploaded files.
       * @type {Object}
       */

      request._files = formFields.files || null
      /**
       * Setting up request raw body if available
       * @type {String}
       */
      request._raw = formFields.raw || null

      yield next
    } catch (e) {
      throw e
    }
  }
}

module.exports = BodyParser
