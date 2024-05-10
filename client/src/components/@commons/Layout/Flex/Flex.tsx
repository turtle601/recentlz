import { ElementType } from 'react';

import { getFlexStyle } from '@/components/@commons/Layout/Flex/Flex.style';

import type { PolymorpicProps } from '@/@types/polymorpic';
import type { FlexProps } from '@/components/@commons/Layout/Flex/Flex.type';

function Flex<T extends ElementType = 'div'>({
  as,
  direction = 'row',
  justify = 'start',
  align = 'auto',
  gap = '0px',
  styles = {},
  children,
  ...attribute
}: PolymorpicProps<T, FlexProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={getFlexStyle({
        direction,
        justify,
        align,
        gap,
        styles,
      })}
      {...attribute}
    >
      {children}
    </Element>
  );
}

export default Flex;
