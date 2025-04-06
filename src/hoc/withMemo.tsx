import React, { ComponentType, memo } from 'react';

export function withMemo<P>(
  Component: ComponentType<P>,
  areEqual?: (prevProps: P, nextProps: P) => boolean
): ComponentType<P> {
  return memo(Component, areEqual);
}
