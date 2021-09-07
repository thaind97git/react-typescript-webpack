import { useCallback, useLayoutEffect, useRef, useState } from 'react';
// eslint-disable-next-line no-unused-vars
type Dispatch<A> = (value: A) => void;
// eslint-disable-next-line no-unused-vars
type SetStateAction<S> = S | ((prevState: S) => S);

function useSafeState<S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>] {
  const mountedRef = useRef(false);
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const safeSetState = useCallback(
    updater => {
      if (mountedRef.current) {
        setState(updater);
      }
    },
    [mountedRef],
  );

  return [state, safeSetState];
}

export default useSafeState;
