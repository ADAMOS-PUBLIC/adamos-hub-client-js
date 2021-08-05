const AssetBase = require('./asset-base')

class Areas extends AssetBase {
    constructor(api_version) {
        super('areas', api_version)
    }
}

module.exports = Areas