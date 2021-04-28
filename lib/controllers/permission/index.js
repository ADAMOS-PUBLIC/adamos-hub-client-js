const Users = require('./users')
const Tenants = require('./tenants')

class MDM {
    constructor() {
        this.users = new Users()
        this.tenants = new Tenants()
    }
}

module.exports = MDM