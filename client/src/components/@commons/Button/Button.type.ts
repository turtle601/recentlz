import { CSSProperties } from 'react';

export interface ButtonProps {
  kind: 'primary' | 'secondary' | 'danger';
  styles?: CSSProperties;
}
