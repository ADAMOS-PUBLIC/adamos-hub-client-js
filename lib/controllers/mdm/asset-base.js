const Base = require('../base')

class AssetBase extends Base {
    constructor(resource, api_version) {
        super(`mdm-service/${api_version}/asset/${resource}`)
    }
}

module.exports = AssetBase