import axios from 'axios'
import platformsMock from 'api/mock/platforms'

const api = axios.create({
  baseURL: 'http://localhost:3003/api/'
})

api.fetchAll = async () => {
  const res = await api.get('/platforms')

  return res.data
}

// api.getPlatforms = () => {
//   return new Promise((resolve, reject) => {
//     return resolve(platformsMock)
//   })
// }

export default api
