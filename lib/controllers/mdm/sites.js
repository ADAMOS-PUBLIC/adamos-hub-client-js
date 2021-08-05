const AssetBase = require('./asset-base')

class Sites extends AssetBase {
    constructor(api_version) {
        super('sites', api_version)
    }
}

module.exports = Sites