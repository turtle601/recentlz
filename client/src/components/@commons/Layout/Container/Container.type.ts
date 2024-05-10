import { CSSProperties } from 'react';

export interface ContainerProps {
  maxWidth?: CSSProperties['maxWidth'];
  minWidth?: CSSProperties['minWidth'];
  styles?: CSSProperties;
}
