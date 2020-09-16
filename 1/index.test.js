const assert = require('chai').assert;

/**
 * EJERCICIO:
 * 
 * 1) Checkear las diferentes interfaces de assertions en chai
 * 1) testear "divide(2,1)"
 * 2) testear el edge case
 */
const divide = require('.');


/**
 * in mocha you use it
 * in jest you use test
 */
it('divide(2,1)', ()=>{
    // setup

    // logic
    const result = divide(2, 1);

    // asserts
    assert.equal(result, 2, 'Algo salio mal en la division')
});

it('divide(2,0), throws error "division by zero"', ()=>{
    const fn = ()=> divide(2,0);

    assert.throws(fn, /division/,'La funcion no me lanzó un error')
})
it('divide(2,undefined)')
it('divide(undefined,undefined)')
it('divide(undefined,undefined)')