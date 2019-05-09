import axios from 'axios'

const baseURL = 'https://api.github.com/'
// const baseUrl = `${baseApi}/repos`

export default axios.create({
  baseURL,
  // additional requests api dependant
  headers: {'Authorization': 'Bearer d79a713600d5c8e60b8359f3e6926780a89f6893'}
})
