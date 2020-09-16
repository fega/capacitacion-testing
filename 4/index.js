/**
 * INTRODUCCIÓN A LOS MOCKS
 */

module.exports = class Gatos {
    constructor (db) {
      this.db = db
    }
    masculinos () {
      const gatos = this.db.traelos()
  
      const filtrado = gatos.filter(gato => gato.sexo === 'masculino')
  
      return filtrado
    }
  }
  
  