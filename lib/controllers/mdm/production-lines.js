const AssetBase = require('./asset-base')

class ProductionLines extends AssetBase {
    constructor(api_version) {
        super('workCenters/productionLines', api_version)
    }
}

module.exports = ProductionLines