import { toast, ToastOptions } from 'react-toastify';

export const TOP_LEFT = 'top-left';
export const TOP_RIGHT = 'top-right';
export const TOP_CENTER = 'top-center';
export const BOTTOM_LEFT = 'bottom-left';
export const BOTTOM_RIGHT = 'bottom-right';
export const BOTTOM_CENTER = 'bottom-center';

const TOAST_DEFAULT_OPTIONS = {
  position: TOP_CENTER,
  autoClose: 5000,
  pauseOnHover: true,
  closeOnClick: true,
  hideProgressBar: false,
};

const TOAST_SUCCESS = 'TOAST_SUCCESS';
const TOAST_ERROR = 'TOAST_ERROR';
const TOAST_WARN = 'TOAST_WARN';
const TOAST_INFO = 'TOAST_INFO';
const TOAST_DEFAULT = 'TOAST_DEFAULT';

export const getToastFunction: any =
  (type: string, options?: ToastOptions | undefined) => (message: string) => {
    const optsMerge = Object.assign({}, TOAST_DEFAULT_OPTIONS, options);
    let doToast: any = null;
    switch (type) {
      case TOAST_SUCCESS:
        doToast = toast.success;
        break;
      case TOAST_ERROR:
        doToast = toast.error;
        break;
      case TOAST_WARN:
        doToast = toast.warn;
        break;
      case TOAST_INFO:
        doToast = toast.info;
        break;
      case TOAST_DEFAULT:
        doToast = toast;
        break;
      default:
        return doToast;
    }
    return doToast(message, optsMerge);
  };

export const toastSuccess: any = (
  message = 'Success',
  options?: ToastOptions | undefined,
) => {
  getToastFunction(TOAST_SUCCESS, options)(message);
};

export const toastError: any = (
  message = 'Error',
  options?: ToastOptions | undefined,
) => {
  getToastFunction(TOAST_ERROR, options)(message);
};

export const toastWarn: any = (
  message = 'Warning',
  options?: ToastOptions | undefined,
) => {
  getToastFunction(TOAST_WARN, options)(message);
};

export const toastInfo: any = (
  message = 'Info',
  options?: ToastOptions | undefined,
) => {
  getToastFunction(TOAST_INFO, options)(message);
};

export const toastDefault: any = (
  message = 'Default',
  options?: ToastOptions | undefined,
) => {
  getToastFunction(TOAST_DEFAULT, options)(message);
};
