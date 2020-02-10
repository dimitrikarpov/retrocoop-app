import client from './client'

const endpoint = '/requests'

const get = async (config = {}) => {
    const res = await client.get(`${endpoint}`, config)

    return res.data
}

const getOne = async (id, config) => {
    const res = await client.get(`${endpoint}/${id}`, config)

    return res.data
}

const create = async (data, config = {}) => {
    const res = await client.post(`${endpoint}`, data, config)

    return res.data
}

export default { get, getOne, create }
