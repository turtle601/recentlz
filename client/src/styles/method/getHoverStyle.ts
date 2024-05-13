import { CSSProperties } from 'react';
import { css } from '@emotion/react';

import { color } from '@/styles/theme';

import type { ObjectValueType } from '@/@types/objectValueType';

type Parameter = {
  border?: CSSProperties['border'];
  bgColor?: ObjectValueType<typeof color>;
};

export const getHoverStyle = ({ border, bgColor }: Parameter) => {
  return css({
    '&:hover': {
      border,
      backgroundColor: bgColor,
    },
  });
};
