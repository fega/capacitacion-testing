/**
 * La importancia de los test independientes y edge cases
 */

const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json({ type: 'application/*+json' }))

app.get('/gatitos', (req, res) => {
});

app.post('/gatitos', (req, res) => {
    if (!req.body.name){
        return res.sendStatus(400)
    } 
    res.send({})
});

app.delete('/gatitos/:name', (req, res) => {
});

module.exports = app
