import { useEffect } from 'react';

export const useRenderLogger = (componentName: string, props: Record<string, any> = {}): void => {
  useEffect(() => {
    if (__DEV__) {
      console.log(`[Render] ${componentName}`, props);
    }
  });
};
