const http = require('../lib/httpClient')

const MDM = require('../lib/controllers/mdm')
const Permission = require('../lib/controllers/permission')

class Client {
    constructor(access_token, environment) {
        if (!access_token) {
            throw new Error(`Missing parameter 'access_token'!`)
        }
        http.setEnvironment(environment)
        http.setAuthHeader(access_token)

        this.mdm = new MDM()
        this.permission = new Permission()
    }

    static async build(client_id, client_secret, environment) {
        let token = await http.getToken(client_id, client_secret)

        return new Client(token.access_token, environment)
    }
}

module.exports = Client;