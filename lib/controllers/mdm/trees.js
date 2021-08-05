const HierarchyBase = require('./hierarchy-base')

class Trees extends HierarchyBase {
    constructor(api_version) {
        super('trees', api_version)
    }
}

module.exports = Trees