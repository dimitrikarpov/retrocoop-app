import client from '../client'

const endpoint = '/games'

const get = (config = {}) => {
  const { params, transformResponse } = config

  return client.get(`${endpoint}`, { params, transformResponse })
}

const getOne = (id, config) => {
  return client.get(`${endpoint}/${id}`, config)
}

export default {
  get,
  getOne
}
