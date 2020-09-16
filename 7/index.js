const axios = require('axios')

module.exports = async function getName (codigo) {
  const { data } = await axios.get('https://restcountries.eu/rest/v2/alpha/' + codigo)

  return data.name; 
}
