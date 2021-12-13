const Equipments = require('./equipments')
const Machines = require('./machines')
const Components = require('./components')
const Tools = require('./tools')
const Manufacturers = require('./manufacturers')
const Areas = require('./areas')
const Sites = require('./sites')
const ProductionLines = require('./production-lines')
const Trees = require('./trees')
const Nodes = require('./nodes')

class MDM {
    constructor(api_version) {
        let version = api_version || 'v0.5'

        this.equipments = new Equipments(version)
        this.machines = new Machines(version)
        this.components = new Components(version)
        this.tools = new Tools(version)
        this.manufacturers = new Manufacturers(version)
        this.areas = new Areas(version)
        this.sites = new Sites(version)
        this.productionLines = new ProductionLines(version)
        this.trees = new Trees(version)
        this.nodes = new Nodes(version)
    }
}

module.exports = MDM