const Entries = require('./entries')
const Images = require('./images')
const Documents = require('./documents')
const ProductDescription = require('./productDescription')
const ProductReference = require('./productReference')

class Catalog {
    constructor(api_version) {
        let version = api_version || 'v0.6'
        
        this.entries = new Entries(version)
        this.images = new Images(version)
        this.documents = new Documents(version)
        this.productDescription = new ProductDescription(version)
        this.productReference = new ProductReference(version)
    }
}

module.exports = Catalog