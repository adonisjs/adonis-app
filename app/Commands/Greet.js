'use strict'

const Ansi = use('Ansi')

class Greet {

  /**
   * @description signature defines the expectations of command
   * here name is the argument command is expecting from
   * terminal
   * @method signature
   * @return {String}
   * @public
   */
  static get signature () {
    return '{name}'
  }

  /**
   * @description this is the description of your command
   * same is shown under help
   * @method description
   * @return {String}
   * @public
   */
  static get description () {
    return 'I will greet a user'
  }

  /**
   * @description handle method is the place where you
   * take action when your command is ran
   * @method handle
   * @param  {Object} options
   * @param  {Object} flags
   * @return {void}
   * @public
   */
  * handle (options, flags) {
    Ansi.success(`Hello ${options.name}`)
  }

}

module.exports = Greet
