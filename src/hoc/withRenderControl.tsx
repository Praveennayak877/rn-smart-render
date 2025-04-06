import React, { ComponentType, memo } from 'react';

export function withRenderControl<P>(
  Component: ComponentType<P>,
  keys: (keyof P)[]
): ComponentType<P> {
  return memo(Component, (prevProps, nextProps) => {
    return keys.every(key => prevProps[key] === nextProps[key]);
  });
}
