import { getToken } from '@/helpers/local-storage';
import { isEqual } from 'lodash';

export const compareTwoObject = (
  object1: object = {},
  object2: object = {},
): boolean => {
  return isEqual(object1, object2);
};

export const isEmptyObject = (object: object): boolean => {
  return (
    !object ||
    (Object.keys(object).length === 0 && object.constructor === Object)
  );
};

export const isObject = (obj: object): boolean =>
  obj && typeof obj === 'object' && !Array.isArray(obj);

export const ensureArray = (data: unknown): Array<any> =>
  Array.isArray(data) ? data : [];

export const ensureObject = (obj: object, defaultValue: object): Object =>
  isObject(obj) ? obj : isObject(defaultValue) ? defaultValue : {};

export const parseBoolean = (val: unknown): boolean =>
  !val ||
  val === 'false' ||
  val === 'null' ||
  val === 'undefined' ||
  val === '0'
    ? false
    : true;

export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const DATE_FORMAT = 'MM/DD/YYYY';

export const TIME_FORMAT = 'hh:mm:ss A';

export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export const sleep = (ms: number): Promise<unknown> =>
  new Promise(resolve => setTimeout(resolve, ms));

export const isPromise = (func: Promise<unknown>): boolean =>
  func && typeof func.then === 'function';

export const getHeaders = (options: object = {}): object =>
  Object.assign(
    {},
    {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    options,
  );

export const isBrowser = typeof window !== 'undefined';

export const scrollTo = (element: HTMLElement, rest: unknown): void => {
  // const isIE = detectIE()
  const supportsNativeSmoothScroll =
    'scrollBehavior' in document.documentElement.style;

  if (!supportsNativeSmoothScroll) {
    // const [x, y] = rest;
    // const offsetTop = x?.top || x || 0;
    // const offsetLeft = x?.left || y || 0;
    // element.scrollTop = offsetTop;
    // element.scrollLeft = offsetLeft;
  } else {
    element.scrollTo(rest);
  }
};
