const assert = require('chai').assert
const sinon = require('sinon')
const Gato = require('.')
/**
 * Ejercicio
 * 1) usar sinon para asegurarse que this.miau es llamado 3 veces
 *    usar mocks para this.miau
 */
it('Gato#fastidiar, llama #miau 3 veces', async () => {
    const gato = new Gato();
    const miauSpy = sinon.spy(gato, 'miau');
    gato.fastidiar();
    assert.equal(miauSpy.callCount, 3)
})
