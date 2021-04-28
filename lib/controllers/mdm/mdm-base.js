const Base = require('../base')

const API_VERSION = 'v0.4'

class MdmBase extends Base {
    constructor(resource) {
        super(`mdm-service/${API_VERSION}/asset/${resource}`)
    }
}

module.exports = MdmBase