/**
 * Encubierto como un espia
 */

module.exports = class Gato {
  fastidiar() {
    this.miau()
    this.miau()
    this.miau()
  }
  serBonito() {
    this.miau()
  }
  miau() {
    console.log('MIAU')
  }
}
