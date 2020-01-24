import request from '../request'

const endpoint = '/platforms'

 function getAll() {
  return  request({
    url: `${endpoint}`,
    method: 'GET'
  })
}

function get(id) {
  return request({
    url: `${endpoint}/${id}`,
    method: 'GET'
  })
}

function create({ subject, content }) {
  return request({
    url: `${endpoint}`,
    method: 'POST',
    data: {
      subject,
      content
    }
  })
}

export default {
  getAll,
  get,
  create //, update, delete, etc. ...
}
