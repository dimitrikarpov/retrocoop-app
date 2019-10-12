import axios from 'axios'
import requestsMock from 'api/mock/requests'

const api = axios.create({
  baseURL: 'https://'
})

// api.getPosts = async () => {
//   const res = await api.get('/posts')

//   return res.data
// }

api.getRequests = () => {
  return new Promise((resolve, reject) => {
    resolve(requestsMock)
    // reject(err)
  })
}

export default api
