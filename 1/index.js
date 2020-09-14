/**
 * MI PRIMER TEST
 */

module.exports = function divide (a,b) {
    if (!b) throw new Error('division by zero')
    return a/b
  }
  