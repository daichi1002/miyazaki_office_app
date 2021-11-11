import axios from 'axios'

const client = axios.create({
  baseURL: `${process.env.server}/api/v1`,
})
export default client
