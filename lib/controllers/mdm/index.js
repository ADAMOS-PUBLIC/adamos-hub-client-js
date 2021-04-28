const Equipments = require('./equipments')
const Manufacturers = require('./manufacturers')

class MDM {
    constructor() {
        this.equipments = new Equipments()
        this.manufacturers = new Manufacturers()
    }
}

module.exports = MDM