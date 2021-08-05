const Equipments = require('./equipments')
const Manufacturers = require('./manufacturers')
const Areas = require('./areas')
const Sites = require('./sites')
const ProductionLines = require('./production-lines')
const Trees = require('./trees')
const Nodes = require('./nodes')

class MDM {
    constructor(api_version) {
        let version = api_version || 'v0.4'

        this.equipments = new Equipments(version)
        this.manufacturers = new Manufacturers(version)
        this.areas = new Areas(version)
        this.sites = new Sites(version)
        this.productionLines = new ProductionLines(version)
        this.trees = new Trees(version)
        this.nodes = new Nodes(version)
    }
}

module.exports = MDM