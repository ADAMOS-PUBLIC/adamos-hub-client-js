const PermissionBase = require('./permission-base')

class Tenants extends PermissionBase {
    constructor(api_version) {
        super('tenants', api_version)
    }
}

module.exports = Tenants