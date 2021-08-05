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
}

module.exports = Event

function createStacklightEvent(id, value) {
    return {
        eventCode: "adamos:runstate:event:resource:stackLight:*:update:1",
        referenceObjectType: "adamos:masterdata:type:equipment:1",
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
function createStateEvent(id, machineState, machineCondition) {
    return {
        eventCode: "adamos:runstate:event:resource:state:*:update:1",
        referenceObjectType: "adamos:masterdata:type:equipment:1",
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