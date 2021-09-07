import { useEffect, useRef } from 'react';

const useDidMountEffect = (func: () => void, deps: Array<any>): void => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      return func();
    } else {
      didMount.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDidMountEffect;
