import request from '../request'

const endpoint = '/platforms'

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

const create = ({ subject, content }) =>
  request({
    url: `${endpoint}`,
    method: 'POST',
    data: {
      subject,
      content
    }
  })

const RequestsService = {
  getAll,
  get,
  create //, update, delete, etc. ...
}

export default RequestsService
