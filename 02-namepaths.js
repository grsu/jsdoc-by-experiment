/**
 * Example form http://usejsdoc.org/about-namepaths.html
 */

/** @constructor */
Person = function() {

  /**
   * This chains namepaths together, forming Person#idea constructor.
   *
   *
   * This instance member is treated as a constructor simple because it is
   * marked as such using a `@constructor` tag.
   *
   * For convenience constructor methods are named with first letter in
   * uppercase.
   *
   * @constructor
   */
  this.idea = function() {
    this.consider = function () {
      return "hmm";
    }
  };

  this.NotDocumentedMethod = function () {};

  /**
   * Instance member starting with uppercase letter is not treated as a
   * constructor unless it is also marked by `@constructor` tag.
   */
  this.DocumentedMethod = function () {};

  this.say = function() {
    return "I'm an instance.";
  };

  function say() {
    return "I'm inner.";
  }
};

Person.say = function() {
  return "I'm static.";
};

var p = new Person();
p.say();      // I'm an instance.
Person.say(); // I'm static.
// there is no way to directly access the inner function from here
