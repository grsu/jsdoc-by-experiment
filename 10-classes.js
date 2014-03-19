/**
 *
 * PhpStorm automatically adds `@constructor` tag to documentation blocks for
 * functions starting with uppercase letter.
 *
 * @constructor
 * @param title Description of the `title` parameter, without dash.
 * @param {string} author - Description starting with dash.
 * @param {String} isbn
 */
function Book (title, author, isbn) {

}

/**
 *
 * @constructor
 * @todo How @class differs from @constructor?
 */
function ClassesExample () {
  /**
   *
   * @constructor
   */
  this.Class = function () {};

  /**
   *
   * @class
   */
  this.Constructor = function () {};
}