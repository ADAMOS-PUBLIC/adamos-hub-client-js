const HierarchyBase = require('./hierarchy-base')

class Nodes extends HierarchyBase {
    constructor(api_version) {
        super('nodes', api_version)
    }
}

module.exports = Nodes