import isEqual from 'lodash.isequal';

export const deepCompareProps = (prevProps: any, nextProps: any): boolean => {
  return isEqual(prevProps, nextProps);
};
