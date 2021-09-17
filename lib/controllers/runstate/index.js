const http = require('../../httpClient')

class Runstate {
    constructor(api_version) {
        this.api_version = api_version || 'v0.1'
    }

    async getState(id, httpConfig) {
        return await http.get(`/runstate-service/v0.1/state/equipment/${id}`, httpConfig)
    }
    async getStacklight(id, httpConfig) {
        return await http.get(`/runstate-service/v0.1/stacklight/equipment/${id}`, httpConfig)
    }
}

module.exports = Runstate