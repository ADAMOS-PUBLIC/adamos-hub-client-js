const httpUtils = require('../../httpUtils')

const CatalogBase = require('./catalog-base')

class Entries extends CatalogBase {
    constructor(api_version) {
        super('catalogEntries', api_version)
    }

    async getAll(params) {
        return await httpUtils.getAll(`${this.resource}/aggregated`, params)
    }
}

module.exports = Entries