import { isBrowser } from '../utils';

const TOKEN_NAME = '_ut';

export const saveToken = (token?: string): void =>
  isBrowser && token ? localStorage.setItem(TOKEN_NAME, token) : null;
export const getToken = (): string =>
  isBrowser ? localStorage.getItem(TOKEN_NAME) : null;
export const removeToken = (): void =>
  isBrowser ? localStorage.removeItem(TOKEN_NAME) : null;
