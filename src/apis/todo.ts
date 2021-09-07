import { AxiosResponse } from 'axios';
import HttpRequest from '@/services/http-request';

export const getTodoList = (): Promise<AxiosResponse> =>
  HttpRequest.get('https://jsonplaceholder.typicode.com/todos');

export const getTodoDetails = (id: string): Promise<AxiosResponse> =>
  HttpRequest.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
