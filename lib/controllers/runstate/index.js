const http = require('../../httpClient')

class Runstate {
    constructor(api_version) {
        this.api_version = api_version || 'v1'
    }

    async getStacklight(id, assetType, httpConfig) {
        return await http.get(`/runstate-service/${this.api_version}/stacklight/${assetType}/${id}`, httpConfig)
    }
    async getState(id, assetType, httpConfig) {
        return await http.get(`/runstate-service/${this.api_version}/state/${assetType}/${id}`, httpConfig)
    }
}

module.exports = Runstate