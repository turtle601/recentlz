import { ElementType } from 'react';

import Flex from '@/components/@commons/Layout/Flex/Flex';

import type { CenterProps } from '@/components/@commons/Layout/Center/Center.type';
import type { PolymorpicProps } from '@/@types/polymorpic';

const Center = <T extends ElementType = 'div'>({
  as,
  children,
  direction,
  styles = {},
  ...attribute
}: PolymorpicProps<T, CenterProps>) => {
  const Element = as || 'div';

  return (
    <Flex
      as={Element}
      direction={direction}
      justify="center"
      align="center"
      styles={styles}
      {...attribute}
    >
      {children}
    </Flex>
  );
};

export default Center;
