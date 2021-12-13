const Base = require('../base')

class PermissionBase extends Base {
    constructor(resource, api_version) {
        super(`permission-service/${api_version}/${resource}`)
    }
}

module.exports = PermissionBase