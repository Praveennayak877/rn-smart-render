import { useRef } from 'react';
import isEqual from 'lodash.isequal';

export const useDeepMemo = <T>(value: T): T => {
  const ref = useRef<T>(value);

  if (!isEqual(ref.current, value)) {
    ref.current = value;
  }

  return ref.current;
};
