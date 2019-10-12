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
  const requests = { 1: 1, 2: 2 }
  return new Promise((resolve, reject) => {
    resolve(requests)
    // reject(err)
  })
}

export default api
