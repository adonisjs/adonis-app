'use strict'

const path = use('path')
const Helpers = use('Helpers')
const Env = use("Env")

module.exports = {

  /*
  |--------------------------------------------------------------------------
  |   Sqlite Connection
  |--------------------------------------------------------------------------
  |
  |   Here we define sqlite connection to be used by your models or
  |   Database provider. It is good keep development database a
  |   sqlite , rest depends upon your application preferences.
  |
  |--------------------------------------------------------------------------
  |   npm install --save-dev sqlite3
  |--------------------------------------------------------------------------
  |
  */
  sqlite: {
    client: 'sqlite3',
    connection : {
      filename : path.join(Helpers.storagePath(),'development.sqlite3')
    }
  },


  /*
  |--------------------------------------------------------------------------
  |   Mysql Connection
  |--------------------------------------------------------------------------
  |
  |   Below is configuration for mysql database, if your application is
  |   dependent upon mysql , define your credentials inside .env file,
  |   as it is a good practice to keep environment configuration
  |   isolated for each environment.
  |
  |--------------------------------------------------------------------------
  |   npm install --save mysql
  |--------------------------------------------------------------------------
  |
  */
  mysql: {
    client: 'mysql',
    connection: {
      host : Env.get("MYSQL_HOST"),
      user : Env.get("MYSQL_USER"),
      password : Env.get("MYSQL_PASSWORD"),
      database : Env.get("MYSQL_DATABASE")
    }
  }

  /*
  |--------------------------------------------------------------------------
  |   Feel Free
  |--------------------------------------------------------------------------
  |
  |  Feel free to define as many connections you like to define.
  |
  */

}
