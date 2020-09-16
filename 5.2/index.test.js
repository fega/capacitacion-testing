const assert = require('chai').assert
const sinon = require('sinon')
const Gato = require('.')
/**
 * Ejercicio
 * 1) usar sinon para asegurarse que this.miau es llamado 3 veces en el metodo fastidiar
 *    usar mocks para console.log, 
 * 2) usar mocha hooks y usar sinon sandbox para limpiar y poder usar el espia de nuevo 
 */
let sandbox;

beforeEach(() => {
    sandbox = sinon.createSandbox();
});

afterEach(() => {
    sandbox.restore();
});


it('Gato#fastidiar(), llama console.log 3 veces', () => {
    const gato = new Gato();
    const miauSpy = sandbox.spy(console, 'log');

    gato.fastidiar();
    assert.equal(miauSpy.callCount, 3)
});

it('Gato#serBonito(), llama a console.log 1 vez', ()=>{
    const gato = new Gato();
    const miauSpy = sandbox.spy(console, 'log');

    gato.serBonito();
    assert.equal(miauSpy.callCount, 1);
})
