const AssetBase = require('./asset-base')

class Components extends AssetBase {
    constructor(api_version) {
        super('components', api_version)
    }
}

module.exports = Components