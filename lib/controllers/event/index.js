const http = require('../../httpClient')

class Event {
    constructor(api_version) {
        this.api_version = api_version || 'v0.1'
    }

    async send(obj, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, obj, httpConfig)
    }
    async sendStacklight(id, value, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, createStacklightEvent(id, value), httpConfig)
    }
    async sendState(id, machineState, machineCondition, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, createStateEvent(id, machineState, machineCondition), httpConfig)
    }
    async sendComponentStacklight(id, value, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, createStacklightEvent(id, value, 'component'), httpConfig)
    }
    async sendComponentState(id, machineState, machineCondition, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, createStateEvent(id, machineState, machineCondition, 'component'), httpConfig)
    }
    async sendToolStacklight(id, value, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, createStacklightEvent(id, value, 'tool'), httpConfig)
    }
    async sendToolState(id, machineState, machineCondition, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, createStateEvent(id, machineState, machineCondition, 'tool'), httpConfig)
    }
}

module.exports = Event

function createStacklightEvent(id, value, assetType) {
    return {
        eventCode: getEventCode('stackLight'),
        referenceObjectType: getReferenceObjectType(assetType),
        referenceObjectId: id,
        timestampCreated: newTimestamp(),
        attributes: [
            {
                attributeTypeId: "adamos:runstate:event:attribute:color:1",
                value
            }
        ]
    }
}
function createStateEvent(id, machineState, machineCondition, assetType) {
    return {
        eventCode: getEventCode('state'),
        referenceObjectType: getReferenceObjectType(assetType),
        referenceObjectId: id,
        timestampCreated: newTimestamp(),
        attributes: [
            {
                attributeTypeId: "adamos:runstate:event:attribute:machineState:1",
                value: machineState
            },
            {
                attributeTypeId: "adamos:runstate:event:attribute:machineCondition:1",
                value: machineCondition
            }
        ]
    }
}

function newTimestamp() {
    return (new Date()).toISOString()
}
function getEventCode(eventType) {
    return `adamos:runstate:event:resource:${eventType}:*:update:1`
}
function getReferenceObjectType(assetType) {
    assetType = assetType || 'machine'
    return `adamos:masterdata:type:${assetType}:1`
}