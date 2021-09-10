import { AxiosResponse } from 'axios';
import HttpRequest from '@/services/http-request';

export const getCurrentUser = async (): Promise<AxiosResponse> =>
  HttpRequest.get('/api/login/GetInfoToken');
