import request from '../request'

function getAll() {
  return request({
    url: `/requests`,
    method: 'GET'
  })
}

function get(id) {
  return request({
    url:    `/requests/${id}`,
    method: 'GET'
  });
}

function create({subject, content}) {
  return request({
    url:    '/requests/',
    method: 'POST',
    data:   {
      subject,
      content
    }
  });
}

const RequestsService = {
  getAll, get, create //, update, delete, etc. ...
}

export default RequestsService;
