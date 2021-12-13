const AssetBase = require('./asset-base')

class Machines extends AssetBase {
    constructor(api_version) {
        super('machines', api_version)
    }
}

module.exports = Machines