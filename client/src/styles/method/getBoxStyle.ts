import { CSSProperties } from 'react';
import { css } from '@emotion/react';

import { borderRadius, color, spacer } from '@/styles/theme';

import type { ObjectValueType } from '@/@types/objectValueType';

interface Parameter {
  width?: CSSProperties['width'];
  height?: CSSProperties['width'];
  color?: ObjectValueType<typeof color>;
  padding?: ObjectValueType<typeof spacer>;
  backgroundColor?: ObjectValueType<typeof color>;
  borderRadius?: ObjectValueType<typeof borderRadius>;
  border?: CSSProperties['border'];
}

export const getBoxStyle = ({
  color,
  width = '100%',
  height = 'auto',
  padding,
  backgroundColor,
  borderRadius,
  border,
}: Parameter) => {
  return css({
    color,
    width,
    height,
    padding,
    backgroundColor,
    borderRadius,
    border,
  });
};
