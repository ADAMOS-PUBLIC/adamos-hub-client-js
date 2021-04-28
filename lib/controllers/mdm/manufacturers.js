const MdmBase = require('./mdm-base')

class Manufacturers extends MdmBase {
    constructor() {
        super('manufacturers')
    }
}

module.exports = Manufacturers