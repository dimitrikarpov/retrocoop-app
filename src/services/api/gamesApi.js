import client from './client'

const endpoint = '/games'

const get = async (config = {}) => {
  const res = await client.get(`${endpoint}`, config)

  return res.data
}

const getOne = async (id, config) => {
  const res = client.get(`${endpoint}/${id}`, config)

  return res.data
}

export default {
  get,
  getOne
}
