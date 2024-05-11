import { ElementType } from 'react';

import Center from '@/components/@commons/Layout/Center/Center';
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
    <Center direction="column">
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
    </Center>
  );
}

export default Container;
