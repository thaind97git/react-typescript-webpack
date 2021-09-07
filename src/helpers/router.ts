import { isEmptyObject } from '@/utils';
import { history } from '@/store';

export const goURL = (path = '/', state?: unknown): void => {
  history.push(path, state);
};

export const replaceURL = (path = '/', state?: unknown): void => {
  history.push(path, state);
};

export const generatePath = (
  paths: Array<string>,
  queryParams?: { [key: string]: any },
): string => {
  if (!paths?.length) {
    return '/';
  }

  let queryString,
    arrayPath = paths;
  if (!isEmptyObject(queryParams)) {
    queryString = Object.keys(queryParams)
      .map((param: string) => `${param}=${queryParams[param]}`)
      .join('&');
  }

  if (!Array.isArray(paths)) {
    arrayPath = [paths];
  }

  const exactPaths = arrayPath.filter(Boolean);
  let fullPath = `${exactPaths.join('/')}${
    queryString ? '?' + queryString : ''
  }`;

  if (!fullPath.startsWith('/')) {
    fullPath = '/' + fullPath;
  }
  return fullPath;
};
