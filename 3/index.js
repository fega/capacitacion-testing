/**
 * La importancia de los test independientes y edge cases
 */

const express = require('express')
const app = express()


// app.use(express.json())

app.get('/gatitos', (req, res) => {
});

app.post('/gatitos', (req, res) => {
});

app.delete('/gatitos/:name', (req, res) => {
});

module.exports = app
