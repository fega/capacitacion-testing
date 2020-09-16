/**
 * Encubierto como un espia
 */

module.exports = class Gato {
    fastidiar() {
        this.miau()
        this.miau()
        this.miau('HOLAAA')
    }
    miau() {
        console.log('MIAU')
    }
}
