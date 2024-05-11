import { css } from '@emotion/react';
import { typepography } from '@/styles/typography';

import type { TextProps } from '@/components/@commons/Text/Text.type';

export const getTextStyle = ({
  type = 'medium4',
  fontWeight,
  color,
  styles,
}: Omit<TextProps, 'label'>) => {
  return css({
    fontWeight,
    color,
    ...typepography[type],
    ...styles,
  });
};
