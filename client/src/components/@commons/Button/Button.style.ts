import { css } from '@emotion/react';

import { color, borderRadius } from '@/styles/theme';
import { getBoxStyle } from '@/styles/method/getBoxStyle';
import { getHoverStyle } from '@/styles/method/getHoverStyle';
import { getActiveStyle } from '@/styles/method/getActiveStyle';
import { getFocusStyle } from '@/styles/method/getFocusStyle';
import { getDisabledStyle } from '@/styles/method/getDisabledStyle';

import type { ButtonProps } from '@/components/@commons/Button/Button.type';

export const getButtonStyle = ({ kind, styles }: ButtonProps) => {
  switch (kind) {
    case 'primary':
      return css([
        getBoxStyle({
          borderRadius: borderRadius.small,
          backgroundColor: color.blue500,
          color: color.white,
        }),
        getHoverStyle({
          bgColor: color.blue600,
        }),
        getActiveStyle({
          border: `2px solid ${color.blue600}`,
          bgColor: color.blue700,
        }),
        getFocusStyle({
          border: `2px solid ${color.gray100}`,
        }),
        getDisabledStyle({
          bgColor: color.gray300,
          color: color.gray500,
        }),
        css({
          ...styles,
        }),
      ]);

    case 'secondary':
      return css([
        getBoxStyle({
          color: color.blue600,
          borderRadius: borderRadius.small,
          backgroundColor: color.blue100,
        }),
        getHoverStyle({
          bgColor: color.blue200,
        }),
        getActiveStyle({
          border: `2px solid ${color.blue200}`,
          bgColor: color.blue300,
        }),
        getFocusStyle({
          border: `2px solid ${color.gray100}`,
        }),
        getDisabledStyle({
          bgColor: color.gray300,
          color: color.gray500,
        }),
        css({
          ...styles,
        }),
      ]);

    case 'danger':
      return css([
        getBoxStyle({
          color: color.white,
          borderRadius: borderRadius.small,
          backgroundColor: color.red200,
        }),
        getHoverStyle({
          bgColor: color.red300,
        }),
        getActiveStyle({
          border: `2px solid ${color.red200}`,
          bgColor: color.red300,
        }),
        getFocusStyle({
          border: `2px solid ${color.gray100}`,
        }),
        getDisabledStyle({
          bgColor: color.gray300,
          color: color.gray500,
        }),
        css({
          ...styles,
        }),
      ]);
    default:
      return;
  }
};
