import { ElementType } from 'react';

import { getContainerStyle } from '@/components/@commons/Layout/Container/Container.style';

import type { PolymorpicProps } from '@/@types/polymorpic';
import type { ContainerProps } from '@/components/@commons/Layout/Container/Container.type';

function Container<T extends ElementType = 'div'>({
  as,
  maxWidth = 'none',
  minWidth = 'none',
  styles = {},
  children,
  ...attribute
}: PolymorpicProps<T, ContainerProps>) {
  const Element = as || 'div';

  return (
    <Element
      css={getContainerStyle({
        minWidth,
        maxWidth,
        styles,
      })}
      {...attribute}
    >
      {children}
    </Element>
  );
}

export default Container;
