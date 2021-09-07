import { useSelector, shallowEqual } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DefaultRootState {}
export function useShallowEqualSelector<
  TState = DefaultRootState,
  TSelected = unknown,
  // eslint-disable-next-line no-unused-vars
>(selector: (state: TState) => TSelected): TSelected {
  return useSelector(selector, shallowEqual);
}
