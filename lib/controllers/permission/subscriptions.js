const PermissionBase = require('./permission-base')

class Subscriptions extends PermissionBase {
    constructor(api_version) {
        super('subscriptions', api_version)
    }
}

module.exports = Subscriptions