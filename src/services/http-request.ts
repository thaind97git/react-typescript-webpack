import AxiosRequest from './axios-base';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpRequest {
  baseRequest: AxiosInstance;
  constructor() {
    this.baseRequest = AxiosRequest;
  }

  async get(url: string, config?: AxiosRequestConfig) {
    return this.baseRequest.get(url, config);
  }

  async post(url: string, data?: unknown, config?: AxiosRequestConfig) {
    return this.baseRequest.post(url, data, config);
  }
}

export default new HttpRequest();
