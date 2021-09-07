import { useEffect, useState } from 'react';
import { isBrowser } from '@/utils';
function on(obj: Window, ...args: [string, () => void]) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}
function off(obj: Window, ...args: [string, () => void]) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}

const useWindowSize = (
  initialWidth = Infinity,
  initialHeight = Infinity,
): { width: number; height: number } => {
  const [state, setState] = useState({
    width: isBrowser ? window.outerWidth : initialWidth,
    height: isBrowser ? window.outerHeight : initialHeight,
  });
  useEffect(() => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.outerWidth,
          height: window.outerHeight,
        });
      };
      on(window, 'resize', handler);
      return () => {
        off(window, 'resize', handler);
      };
    }
  }, []);
  return state;
};
export default useWindowSize;
