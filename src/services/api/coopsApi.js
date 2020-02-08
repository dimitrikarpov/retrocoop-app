import client from './client'

const endpoint = '/requests'

const get = (config = {}) => client.get(`${endpoint}`, config)

const getOne = (id, config) => client.get(`${endpoint}/${id}`, config)

const create = (data, config = {}) => client.post(`${endpoint}`, data, config)

export default { get, getOne, create }
