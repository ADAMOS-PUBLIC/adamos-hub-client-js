const SubEntryBase = require("./sub-entry-base")

class ProductDescription extends SubEntryBase {
    constructor(api_version) {
        super('productDescription', api_version)
    }
}

module.exports = ProductDescription