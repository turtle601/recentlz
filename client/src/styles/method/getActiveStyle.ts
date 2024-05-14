import { CSSProperties } from 'react';
import { css } from '@emotion/react';

import { color } from '@/styles/theme';

import type { ObjectValueType } from '@/@types/objectValueType';

type Parameter = {
  border?: CSSProperties['border'];
  bgColor?: ObjectValueType<typeof color>;
  color?: ObjectValueType<typeof color>;
};

export const getActiveStyle = ({ border, bgColor, color }: Parameter) => {
  return css({
    '&:disabled': {
      border,
      color,
      pointerEvents: 'none',
      backgroundColor: bgColor,
    },
  });
};
