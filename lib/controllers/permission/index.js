const Users = require('./users')
const Tenants = require('./tenants')
const Apps = require('./apps')
const Subscriptions = require('./subscriptions')

class Permission {
    constructor(api_version) {
        let version = api_version || 'v0.1'

        this.users = new Users(version)
        this.tenants = new Tenants(version)
        this.apps = new Apps(version)
        this.subscriptions = new Subscriptions(version)
    }
}

module.exports = Permission