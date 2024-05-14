import { ElementType } from 'react';
import { getTextStyle } from '@/components/@commons/Text/Text.style';

import type { PolymorpicProps } from '@/@types/polymorpic';
import type { TextProps } from '@/components/@commons/Text/Text.type';

function Text<T extends ElementType = 'span'>({
  as,
  color,
  type = 'medium4',
  fontWeight = 'regular',
  label,
  styles = {},
  ...attribute
}: PolymorpicProps<T, TextProps>) {
  const Element = as || 'span';

  return (
    <Element
      css={getTextStyle({
        color,
        fontWeight,
        type,
        styles,
      })}
      {...attribute}
    >
      {label}
    </Element>
  );
}

export default Text;
