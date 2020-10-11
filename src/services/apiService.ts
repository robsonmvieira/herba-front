/* eslint-disable quotes */
import axios from 'axios'
// const token = localStorage.getItem('@lifeadmin/token')
const apiService = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`
})

export default apiService
