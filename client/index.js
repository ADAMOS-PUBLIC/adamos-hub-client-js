const http = require('../lib/httpClient')

const MDM = require('../lib/controllers/mdm')
const Permission = require('../lib/controllers/permission')
const Event = require('../lib/controllers/event')
const Catalog = require('../lib/controllers/catalog')
const Runstate = require('../lib/controllers/runstate')

class Client {
    constructor({access_token, isM2M, tenantId, environment, baseURL, apiVersions}) {
        if (!access_token) {
            throw new Error(`Missing parameter 'access_token'!`)
        }
        if (isM2M) {
            checkTenantId(tenantId)
            http.setTenantIdHeader(tenantId)
        }

        http.setEnvironment(environment)
        http.setAuthHeader(access_token)
        http.setBaseUrl(baseURL)

        apiVersions = apiVersions || getDefaultVersions()

        this.mdm = new MDM(apiVersions.mdm)
        this.permission = new Permission(apiVersions.permission)
        this.event = new Event(apiVersions.event)
        this.catalog = new Catalog(apiVersions.catalog)
        this.runstate = new Runstate(apiVersions.runstate)
    }

    setEnvironment(environment) {
        http.setEnvironment(environment)
    }
    setTenantId(tenantId) {
        http.setTenantIdHeader(tenantId)
    }
    setAccessToken(access_token) {
        http.setAuthHeader(access_token)
    }
    addHttpHeader(key, value) {
        http.addHeader(key, value)
    }

    static async build({client_id, client_secret, tenantId, environment, baseURL}) {
        if (!client_id) {
            throw new Error(`Missing parameter 'client_id'!`)
        }
        if (!client_secret) {
            throw new Error(`Missing parameter 'client_secret'!`)
        }

        try {
            let token = await http.getToken(client_id, client_secret)
    
            return new Client({
                access_token: token.access_token, 
                isM2M: true,
                tenantId,
                environment, 
                baseURL
            })
        } catch (error) {
            console.error(error);
            console.error('Failed getting access_token!');
        }
    }
}

module.exports = Client;

function checkTenantId(tenantId) {
    if (!tenantId) {
        console.warn(
            `Warning: No tenant ID specified! 
            Most endpoints (e.g. MDM) require a tenant ID when usnig a client_credentials token.`
        )
    }
}

function getDefaultVersions() {
    return {
        mdm: 'v1',
        permission: 'v0.1',
        event: 'v0.1',
        catalog: 'v0.6',
        runstate: 'v0.1',
    }
}