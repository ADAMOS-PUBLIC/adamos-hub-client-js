const PermissionBase = require('./permission-base')

class Subscriptions extends PermissionBase {
    constructor() {
        super('subscriptions')
    }
}

module.exports = Subscriptions