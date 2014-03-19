/**
 * This is a description text for module.
 *
 * Module is defined by a @module tag which can be defined anywhere in a file,
 * but for convenience please put it at the topmost doclet.
 *
 * @module my/shirt
 *
 * @see http://usejsdoc.org/howto-commonjs-modules.html
 */

// This syntax will be parsed correctly.
module.exports = {
  /** Blend two colors together. */
  blend: function (color1, color2) { }
};

/**
 * Description for the constructor which is also an alias to the module.
 *
 * @constructor
 * @alias module:my/shirt
 */
function Shirt () {

}

module.exports = Shirt;

function internalFn () {

}

/**
 * Try it on.
 *
 * Without @module tag, defined here at the top, this doclet will result in
 * describing global method named `putOn`.
 */
exports.putOn = function (someShirt) {
};

/** Make it easier to put on and remove. */
exports.unbutton = function (someShirt) {
};
