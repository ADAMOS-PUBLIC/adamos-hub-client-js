const httpUtils = require('../../httpUtils')

class SubEntryBase {
    constructor(resource, api_version) {
        this.resource = resource
        this.api_version = api_version
    }

    async add(entryId, obj, httpConfig) {
        return await httpUtils.add(this.getUrl(entryId), obj, httpConfig)
    }
    async update(entryId, obj, httpConfig) {
        return await httpUtils.update(this.getUrl(entryId), obj.id, obj, httpConfig)
    }
    async delete(entryId, id, httpConfig) {
        return await httpUtils.delete(this.getUrl(entryId), id, httpConfig)
    }
    async get(entryId, id, params) {
        return await httpUtils.getById(this.getUrl(entryId), id, params)
    }
    async getAll(entryId, params) {
        return await httpUtils.getAll(this.getUrl(entryId), params)
    }

    getUrl(entryId) {
        return `catalog-service/${this.api_version}/catalogEntries/${entryId}/${this.resource}`
    }
}

module.exports = SubEntryBase
