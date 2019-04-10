import axios from 'axios'

const baseApi = 'https://api.github.com/'
// const baseUrl = `${baseApi}/repos`

export default axios.create({
  baseApi,
  // additional requests api dependant
  headers: {'Basic': 'hash'}
})
