import axios from 'axios'

/**
 * Create an Axios Client with defaults
 */
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3003/api/'
})

export const fooInterceptor = axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
)

const successHandler = response => {
  console.log('in intercepror', response)
  return response
}

const errorHandler = error => {
  console.log('response fails')
  return error
}

export default axiosInstance
