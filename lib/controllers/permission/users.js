const PermissionBase = require('./permission-base')

class Users extends PermissionBase {
    constructor() {
        super('users')
    }
}

module.exports = Users