const Users = require('./users')
const Tenants = require('./tenants')
const Apps = require('./apps')
const Subscriptions = require('./subscriptions')

class Permission {
    constructor() {
        this.users = new Users()
        this.tenants = new Tenants()
        this.apps = new Apps()
        this.subscriptions = new Subscriptions()
    }
}

module.exports = Permission