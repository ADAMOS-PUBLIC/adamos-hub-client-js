const http = require('../lib/httpClient')

const MDM = require('../lib/controllers/mdm')
const Permission = require('../lib/controllers/permission')

class Client {
    constructor({access_token, environment, baseURL}) {
        if (!access_token) {
            throw new Error(`Missing parameter 'access_token'!`)
        }
        http.setEnvironment(environment)
        http.setAuthHeader(access_token)

        this.mdm = new MDM()
        this.permission = new Permission()
    }

    static async build({client_id, client_secret, environment, baseURL}) {
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