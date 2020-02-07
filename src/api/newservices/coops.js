import client from '../client'

const endpoint = '/requests'

const get = (config = {}) => client.get(`${endpoint}`, config)

const getOne = (id, config) => client.get(`${endpoint}/${id}`, config)

export default { get, getOne }
