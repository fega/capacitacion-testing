const assert = require('chai').assert;
const nock = require('nock');
const getName = require('.');
const { REST_COUNTRIES_TOKEN } = require('./config.js')
it(' getName("co"), esta retornando directamente los datos, #CI', async () => {
    const r = await getName('co');

    assert.equal(r, 'Colombia');
});

it('getName("co") , esta retornando directamente los datos', async () => {
    nock('https://restcountries.eu/rest/v2/alpha', {
        reqheaders: {
            "accept": "application/json, text/plain, */*",
            "user-agent": "axios/0.20.0",
            "Authorization": `Bearer ${REST_COUNTRIES_TOKEN}`
        }
    })
        .get('/co')
        .reply(200, { name: 'Colombia' },);

    const r = await getName('co');

    assert.equal(r, 'Colombia');
});
