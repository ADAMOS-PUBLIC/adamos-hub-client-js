const Entries = require('./entries')
const Images = require('./images')
const Documents = require('./documents')

class Catalog {
    constructor(api_version) {
        let version = api_version || 'v0.6'
        
        this.entries = new Entries(version)
        this.images = new Images(version)
        this.documents = new Documents(version)
    }
}

module.exports = Catalog