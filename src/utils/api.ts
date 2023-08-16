import axios, { AxiosInstance } from 'axios'

class Api {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const api = new Api().instance
