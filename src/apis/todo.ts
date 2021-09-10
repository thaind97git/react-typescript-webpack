import { AxiosResponse } from 'axios';
import HttpRequest from '@/services/http-request';

export const getTodoList = async (): Promise<AxiosResponse> =>
  HttpRequest.get('https://jsonplaceholder.typicode.com/todos');

export const getTodoDetails = async (id: string): Promise<AxiosResponse> =>
  HttpRequest.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
