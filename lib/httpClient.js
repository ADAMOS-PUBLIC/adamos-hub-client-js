const axios = require('axios').default;

const HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

var instance = axios.create({
    baseURL: `https://services.adamos-hub.dev`,
    headers: HEADERS
})

exports.setEnvironment = function (environment) {
    if (environment === 'production') {
        instance.defaults.baseURL = `https://services.adamos-hub.com`
    }
}

exports.getToken = async function (client_id, client_secret) {
    let token = await getAccessToken(client_id, client_secret)

    setTimeout(async () => { await refreshAuthHeader(client_id, client_secret) }, getRefreshTimeout(token.expires_in))

    return token
}

exports.setAuthHeader = function (token) {
    if (!token) return
    let header = token.token_type ? `${token.token_type} ${token.access_token}` : `Bearer ${token}`

    instance.defaults.headers["Authorization"] = header
}

exports.setTenantIdHeader = function (tenantId) {
    instance.defaults.headers["X-ADAMOS-tenantId"] = tenantId
}

exports.get = async function (url, config) {
    let res = await instance.get(url, config)
    return res.data
}
exports.post = async function (url, data, config) {
    let res = await instance.post(url, data, config)
    return res.data
}
exports.put = async function (url, data, config) {
    let res = await instance.put(url, data, config)
    return res.data
}
exports.delete = async function (url, config) {
    let res = await instance.delete(url, config)
    return res.data
}

async function refreshAuthHeader(client_id, client_secret) {
    console.log('Refreshing token...');
    let token = await getAccessToken(client_id, client_secret)
    
    this.setAuthHeader(token)

    setTimeout(() => { refreshAuthHeader(client_id, client_secret) }, getRefreshTimeout(token.expires_in))
}

async function getAccessToken(client_id, client_secret) {
    let body = { client_id, client_secret, grant_type: 'client_credentials'}
    let data = Object.keys(body).map(key => key + '=' + body[key]).join('&');
    let config = { headers: {"Content-Type": "application/x-www-form-urlencoded"} }

    let response = await instance.post(`/auth-service/token`, data, config)
    
    return response.data
}

function getRefreshTimeout(expires_in) {
    return (expires_in - 60) * 1000 // 60 seconds before, in milliseconds
}