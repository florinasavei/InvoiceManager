import axios, { AxiosInstance, AxiosError } from 'axios'

interface IHTTPServiceConfig {
  baseURL: string
  headers: Record<string, string>
}

class HTTPService {
  private readonly service: AxiosInstance
  constructor ({ baseURL, headers }: IHTTPServiceConfig) {
    this.service = axios.create({
      baseURL,
      headers
    })
  }

  getService (): AxiosInstance {
    return this.service
  }
}

export type THttpServiceError = AxiosError

export default new HTTPService({
  baseURL: import.meta.env.VITE_API_ROOT_URL,
  headers: {
    'Content-type': 'application/json'
  }
}).getService()
