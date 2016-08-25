'use strict'

// their code

const fs = require('fs')
const path = require('path')
const _ = require('lodash')

// our code

const Helpers = use('Helpers')
const View = use('View')

const gather = function(callback) {
    let manifestFile = Helpers.publicPath(path.join('build', 'rev-manifest.json'))

    fs.exists(manifestFile, function(exists) {
        if (!exists) {
            return
        }

        fs.readFile(manifestFile, 'utf-8', function(err, data) {
            if (err) {
                return
            }

            callback(JSON.parse(data))
        })
    })
}

class Elixir {

  * handle (request, response, next) {
    let manifest = {};

    gather(data => {
      manifest = data
    })

    View.filter('elixir', function(file) {
      if (file in manifest) {
        return '/' + _.trim('build/' + manifest[file], '/')
      }

      let unversioned = Helpers.publicPath(file)

      if (fs.existsSync(unversioned)) {
          return '/' + _.trim(file, '/');
      }

      throw new Error('File not found')
    })

    yield next;
  }

}

module.exports = Elixir
