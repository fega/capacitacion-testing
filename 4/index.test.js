const assert = require('chai').assert
const Gatos = require('.')

it('Usando Mocks para gatos #masculinos', () => {
    // setup
    const mockDb = {
        traelos(){
            return [{
                sexo: 'masculino'
            },{
                sexo: 'femenino'
            }]
        }
    }

    // core
    const gatos = new Gatos(mockDb);
    const result = gatos.masculinos();

    // assert
    assert.equal(result.length, 1);
})
