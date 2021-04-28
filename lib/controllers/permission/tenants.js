const PermissionBase = require('./permission-base')

class Tenants extends PermissionBase {
    constructor() {
        super('tenants')
    }
}

module.exports = Tenants