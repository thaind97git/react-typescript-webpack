import { AxiosResponse } from 'axios';
import HttpRequest from '@/services/http-request';

export const getCurrentUser = (): Promise<AxiosResponse<unknown>> =>
  HttpRequest.get('/api/login/GetInfoToken');
