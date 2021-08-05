const SubEntryBase = require("./sub-entry-base")

class Documents extends SubEntryBase {
    constructor(api_version) {
        super('documents', api_version)
    }
}

module.exports = Documents