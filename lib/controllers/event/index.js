const http = require('../../httpClient')

class Event {
    constructor(api_version) {
        this.api_version = api_version || 'v1'
    }

    async send(obj, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, obj, httpConfig)
    }
    /** Machine */
    async sendMachineStacklight(id, stacklights, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, this.createStacklightEvent(id, stacklights), httpConfig)
    }
    async sendMachineState(id, machineState, machineCondition, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, this.createStateEvent(id, machineState, machineCondition), httpConfig)
    }

    /** Component */
    async sendComponentStacklight(id, stacklights, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, this.createStacklightEvent(id, stacklights, 'component'), httpConfig)
    }
    async sendComponentState(id, machineState, machineCondition, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, this.createStateEvent(id, machineState, machineCondition, 'component'), httpConfig)
    }

    /** Tool */
    async sendToolStacklight(id, stacklights, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, this.createStacklightEvent(id, stacklights, 'tool'), httpConfig)
    }
    async sendToolState(id, machineState, machineCondition, httpConfig) {
        return await http.post(`/event-service/${this.api_version}/event`, this.createStateEvent(id, machineState, machineCondition, 'tool'), httpConfig)
    }

    /** Utils */
    createStacklightEvent(id, stacklights, assetType) {
        if (!Array.isArray(stacklights)) {
            throw new Error('Parameter "stacklights" must be an array!')
        }
    
        const attributes = stacklights.map(stacklight => {
            return {
                attributeTypeId: "adamos:runstate:event:attribute:color:1",
                value: stacklight.value,
                state: stacklight.state
            }
        })
    
        return {
            eventCode: getEventCode('stackLight'),
            referenceObjectType: getReferenceObjectType(assetType),
            referenceObjectId: id,
            timestampCreated: newTimestamp(),
            attributes
        }
    }

    createStateEvent(id, machineState, machineCondition, assetType) {
        return {
            eventCode: getEventCode('state'),
            referenceObjectType: getReferenceObjectType(assetType),
            referenceObjectId: id,
            timestampCreated: newTimestamp(),
            attributes: [
                {
                    attributeTypeId: "adamos:runstate:event:attribute:state:1",
                    value: machineState
                },
                {
                    attributeTypeId: "adamos:runstate:event:attribute:condition:1",
                    value: machineCondition
                }
            ]
        }
    }
}

module.exports = Event

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