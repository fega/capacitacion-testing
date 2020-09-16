const db = require('./db')
/**
 * Usando ProxyQuire
 */

module.exports = class Gatos {
  masculinos () {
    const gatos = db.traelos()

    const filtrado = gatos.filter(gato => gato.sexo === 'masculino')

    return filtrado
  }
}
