const AssetBase = require('./asset-base')

class Equipments extends AssetBase {
    constructor(api_version) {
        super('equipments', api_version)
    }
}

module.exports = Equipments