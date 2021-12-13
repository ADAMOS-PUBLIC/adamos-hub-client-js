const PermissionBase = require('./permission-base')

class Users extends PermissionBase {
    constructor(api_version) {
        super('users', api_version)
    }
}

module.exports = Users