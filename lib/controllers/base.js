const httpUtils = require('../httpUtils')

class Base {
    constructor(resource) {
        this.resource = resource
    }

    async add(obj, httpConfig) {
        return await httpUtils.add(this.resource, obj, httpConfig)
    }
    async update(obj, httpConfig) {
        return await httpUtils.update(this.resource, obj.id, obj, httpConfig)
    }
    async delete(id, httpConfig) {
        return await httpUtils.delete(this.resource, id, httpConfig)
    }
    async get(id, params) {
        return await httpUtils.getById(this.resource, id, params)
    }
    async getAll(params) {
        return await httpUtils.getAll(this.resource, params)
    }
}

module.exports = Base