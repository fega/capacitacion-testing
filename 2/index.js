/**
 * Testing de APIs con supertest
 */

const express = require('express')
const app = express()

const gatitos = [
  { name: 'Nova' },
  { name: 'Freya' }
]

app.get('/gatitos', (request,response)=>{
  
  response.send(gatitos)
})

module.exports = app

/**
 * OJO CON ESTA PARTE
 */
// app.listen(3000, () => console.log(`Example app listening on port ${port}!`))
