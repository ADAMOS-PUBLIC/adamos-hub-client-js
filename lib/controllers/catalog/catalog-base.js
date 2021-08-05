const Base = require('../base')

class CatalogBase extends Base {
    constructor(resource, api_version) {
        super(`catalog-service/${api_version}/${resource}`)
    }
}

module.exports = CatalogBase