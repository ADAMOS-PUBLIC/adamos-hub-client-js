const SubEntryBase = require("./sub-entry-base")

class ProductReferences extends SubEntryBase {
    constructor(api_version) {
        super('productReferences', api_version)
    }
}

module.exports = ProductReferences