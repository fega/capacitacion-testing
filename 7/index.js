const axios = require('axios')
const { REST_COUNTRIES_TOKEN } = require('./config.js')

module.exports = async function getName (codigo) {
  const { data } = await axios
  .get('https://restcountries.eu/rest/v2/alpha/' + codigo,{
    headers:{
      "Authorization": `Bearer ${REST_COUNTRIES_TOKEN}`
    }
  })

  return data.name;
}
