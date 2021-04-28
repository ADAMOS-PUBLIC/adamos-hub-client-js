const http = require('./httpClient')

exports.add = async function (resource, obj, httpConfig) {
    let response = await http.post(`/${resource}`, obj, httpConfig)
    return response
}

exports.update = async function (resource, id, obj, httpConfig) {
    let response = await http.put(`/${resource}/${id}`, obj, httpConfig)
    return response
}

exports.delete = async function (resource, id, httpConfig) {
    let response = await http.delete(`/${resource}/${id}`, httpConfig)
    return response
}

exports.getById = async function (resource, id, params) {
    let response = await http.get(`/${resource}/${id}`, {params})
    return response
}

exports.getAll = async function (resource, params) {
    params = { page: 0, size: 500, ...params };

    let result = [];
    let hasMore = true;
    while (hasMore) {
        let response = await http.get(`/${resource}`, {params})

        if (response.content) {
            result = result.concat(response.content)
        }

        params.page++

        hasMore = hasMoreData(response)
    }

    return result
}

function hasMoreData(response) {
    return response && !response.last
}