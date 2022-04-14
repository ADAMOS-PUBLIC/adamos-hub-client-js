const SubEntryBase = require("./sub-entry-base")

class ProductReference extends SubEntryBase {
    constructor(api_version) {
        super('productReference', api_version)
    }
}

module.exports = ProductReference