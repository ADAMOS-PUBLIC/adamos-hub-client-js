const AssetBase = require('./asset-base')

class Manufacturers extends AssetBase {
    constructor(api_version) {
        super('manufacturers', api_version)
    }
}

module.exports = Manufacturers