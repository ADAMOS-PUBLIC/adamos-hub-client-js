const PermissionBase = require('./permission-base')

class Apps extends PermissionBase {
    constructor(api_version) {
        super('apps', api_version)
    }
}

module.exports = Apps