/**
 * Ejercicio:
 * 1) Testear con supertest
 */
const app = require('.')
const request = require('supertest')
const assert = require('chai').assert;

it('GET /gatitos, OK', async ()=>{
    const r = await request(app)
        .get('/gatitos')

    assert.equal(r.status, 200);
    assert.equal(r.body.length, 2);
});
