const SubEntryBase = require("./sub-entry-base")

class Images extends SubEntryBase {
    constructor(api_version) {
        super('images', api_version)
    }
}

module.exports = Images