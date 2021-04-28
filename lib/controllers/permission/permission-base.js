const Base = require('../base')

const API_VERSION = 'v0.1'

class PermissionBase extends Base {
    constructor(resource) {
        super(`permission-service/${API_VERSION}/${resource}`)
    }
}

module.exports = PermissionBase