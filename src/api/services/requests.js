import request from '../request'

const endpoint = '/requests'

const getAll = () =>
  request({
    url: `${endpoint}`,
    method: 'GET'
  })

const get = id =>
  request({
    url: `${endpoint}/${id}`,
    method: 'GET'
  })

const create = data =>
  request({
    url: `${endpoint}`,
    method: 'POST',
    data
  })

const RequestsService = {
  getAll,
  get,
  create //, update, delete, etc. ...
}

export default RequestsService
