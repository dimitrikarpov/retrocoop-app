import axios from 'axios'
import platformsMock from 'api/mock/platforms'

const api = axios.create({
  baseURL: 'https://'
})

api.getPlatforms = () => {
  return new Promise((resolve, reject) => {
    return resolve(platformsMock)
  })
}

export default api
