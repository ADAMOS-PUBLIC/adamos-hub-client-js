const Base = require('../base')

class AssetBase extends Base {
    constructor(resource, api_version) {
        super(`mdm-service/${api_version}/assets/${resource}`)
    }
}

module.exports = AssetBase