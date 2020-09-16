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
  

// class Carro{
//   constructor(llantas, motor){
//     this.llantas= llantas
//     this.motor = motor
//   }
// }

// const llantas = new LLantasPirelli();
// const motor = new MotorBMW();

// const llantasMock = {

// }

// const newCarro = new Carro(llantas, motor);