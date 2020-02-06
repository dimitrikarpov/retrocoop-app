import request from '../request'

const endpoint = '/games'

const get = (options = {}) => {
// console.log(options)

  return request({
    url: `${endpoint}`,
    method: 'GET',
    // ...(options.params || {}),
    // ...(options.transformResponse || {})
    params: options.params,
    transformResponse: options.transformResponse,
    // transformResponse: axios.defaults.transformResponse.concat(options.transformResponse)
  })
}

const getOne = id =>
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

export default {
  get,
  getOne,
  create //, update, delete, etc. ...
}
