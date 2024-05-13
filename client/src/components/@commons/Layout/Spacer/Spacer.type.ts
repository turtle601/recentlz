import { CSSProperties } from 'react';

export interface SpacerProps<T extends 'vertical' | 'horizontal' = 'vertical'> {
  direction?: T;
  space: CSSProperties[T extends 'vertical' ? 'width' : 'height'];
}
