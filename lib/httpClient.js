const axios = require('axios').default;
axios.defaults.baseURL = `https://services.adamos-hub.dev`

const HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}
axios.defaults.headers = HEADERS

exports.defaults = axios.defaults

exports.setEnvironment = function (environment) {
    if (environment === 'production') {
        axios.defaults.baseURL = `https://services.adamos-hub.com`
    }
}

exports.getToken = async function (client_id, client_secret) {
    try {
        let token = await getAccessToken(client_id, client_secret)

        setTimeout(async () => { await refreshAuthHeader(client_id, client_secret) }, getRefreshTimeout(token.expires_in))

        return token
    } catch (error) {
        console.error(error);
    }
}

exports.setAuthHeader = function (token) {
    let header = token.token_type ? `${token.token_type} ${token.access_token}` : `Bearer ${token}`

    axios.defaults.headers = { ...HEADERS, "Authorization": header }
}

exports.get = async function (url, config) {
    let res = await axios.get(url, config)
    return res.data
}
exports.post = async function (url, data, config) {
    let res = await axios.post(url, data, config)
    return res.data
}
exports.put = async function (url, data, config) {
    let res = await axios.put(url, data, config)
    return res.data
}
exports.delete = async function (url, config) {
    let res = await axios.delete(url, config)
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

    let response = await axios.post(`/auth-service/token`, data, config)
    
    return response.data
}

function getRefreshTimeout(expires_in) {
    return (expires_in - 60) * 1000 // 60 seconds before, in milliseconds
}