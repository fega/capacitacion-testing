const assert = require('chai').assert;
const proxyquire = require('proxyquire');

const Gatos = proxyquire('./index.js',{
    './db': {
        traelos(){
            return []
        }
    }
})

it('GatosService#masculinos, retornan solo gatos masculinos  usando proxyquire', () => {
    const gatosService = new Gatos();
    const result = gatosService.masculinos();

    assert.lengthOf(result, 0)
});
