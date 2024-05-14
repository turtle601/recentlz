import { CSSProperties } from 'react';
import { typepography } from '@/styles/typography';

export interface TextProps {
  label: string;
  type?: keyof typeof typepography;
  fontWeight?: CSSProperties['fontWeight'];
  color?: CSSProperties['color'];
  styles?: CSSProperties;
}
