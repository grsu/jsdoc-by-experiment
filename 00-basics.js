/**
 * Start learning JSDoc by reading http://usejsdoc.org/.
 *
 * Use JSDoc site is open sourced, you can contribute to it via
 * [jsdoc3.github.com project][] on GitHub.
 *
 * [jsdoc3.github.com project]: https://github.com/jsdoc3/jsdoc3.github.com
 *
 *
 * This site is about JSDoc 3.
 *
 * This doclet does not describe anything, it will not be included in
 * documentation.
 */

/**
 * This doclet describes `documentedFn` function.
 *
 * Although doclet is separated from `documentedFn` function by three empty
 * lines, it will nevertheless document that function.
 */



function documentedFn () {}

function undocumented () {
  /*
   * Undocumented members are not listed in documentation.
   */
}

/**
 * Private members are not listed in documentation neither.
 *
 * @private
 */
function privateFn () {

}

/*

## History of JSDoc versions

* JSDoc 3

    JSDoc 3 is intended to be an upgrade to JsDoc Toolkit (JSDoc 2).
    -- see http://usejsdoc.org/about-jsdoc3.html for reference

    Created by Michael Mathews and contributors.

* JsDoc Toolkit (JSDoc 2)


*/

/**
 * Description of the `history` function
 */
function history () {

}

/**
 * This is a description for the `JSDoc` constructor.
 *
 * This documentation block, enclosed into `/** and * /` is called a doclet (see
 * http://usejsdoc.org/about-tutorials.html).
 *
 * @constructor
 */
function JSDoc () {

}