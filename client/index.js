const http = require('../lib/httpClient')

const MDM = require('../lib/controllers/mdm')
const Permission = require('../lib/controllers/permission')

class Client {
    constructor({access_token, environment?, baseURL?}) {
        if (!access_token) {
            throw new Error(`Missing parameter 'access_token'!`)
        }
        http.setEnvironment(environment)
        http.setAuthHeader(access_token)

        http.defaults.baseURL = baseURL

        this.mdm = new MDM()
        this.permission = new Permission()
    }

    static async build({client_id, client_secret, environment?, baseURL?}) {
        if (!client_id) {
            throw new Error(`Missing parameter 'client_id'!`)
        }
        if (!client_secret) {
            throw new Error(`Missing parameter 'client_secret'!`)
        }
        let token = await http.getToken(client_id, client_secret)

        return new Client({
            access_token: token.access_token, 
            environment, 
            baseURL
        })
    }
}

module.exports = Client;