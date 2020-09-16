/**
 * Ejercicio:
 * 
 * 1) Implementar los tests de manera independiente
 * 2) Revisar la integracion con el debugger
 */
const app = require('.')
const request = require('supertest')

/**
 * Te puedes sentir tentado de implementar los tests
 */
describe('POST /gatitos', () => {
    /**
     * Normalmente YO uso el orden de la lógica para escribir los tests
     */
    it('INVALID BODY, no name')
    it('INVALID BODY, name is not string')
    it('OK')
})
describe('GET /gatitos', () => {
    it('OK')
})
describe('DELETE /gatitos/:id', () => {
    it('NOT_FOUND')
    it('OK')
})

/**
 * A veces puedes usar hooks para inicializar o limpiar el estado de tus tests
 */

// before(function () {
//     console.log('before hook, SE EJECUTA ANTES')
// });

// after(function () {
//     console.log('after hook, SE EJECUTA DESPUES')
// });

// beforeEach(function () {
//     console.log('beforeEach hook, antes de cada test')
// });

// afterEach(function () {
//     console.log('afterEach hook, despues de cada test')
// });
