const AssetBase = require('./asset-base')

class Tools extends AssetBase {
    constructor(api_version) {
        super('tools', api_version)
    }
}

module.exports = Tools