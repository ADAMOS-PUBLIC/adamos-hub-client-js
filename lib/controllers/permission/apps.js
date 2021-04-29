const PermissionBase = require('./permission-base')

class Apps extends PermissionBase {
    constructor() {
        super('apps')
    }
}

module.exports = Apps