const Base = require('../base')

class HierarchyBase extends Base {
    constructor(resource, api_version) {
        super(`mdm-service/${api_version}/hierarchy/${resource}`)
    }
}

module.exports = HierarchyBase