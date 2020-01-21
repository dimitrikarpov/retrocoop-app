import axios from 'axios'
import requestsMock from 'api/mock/requests'

import {
  API_REQUESTS_BASE_URL as BASE,
  API_REQUESTS_FETCH_ALL_ENDPOINT as FETCH_ALL
} from './constants'

const api = axios.create({
  baseURL: BASE
})

// api.getRequests = () => {
//   return new Promise((resolve, reject) => {
//     resolve(requestsMock)
//     // reject(err)
//   })
// }

api.getRequests = async () => {
  const res = await api.get(FETCH_ALL)

  return res.data
}

export default api
