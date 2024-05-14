import { ElementType } from 'react';

import { getButtonStyle } from '@/components/@commons/Button/Button.style';

import type { PolymorpicProps } from '@/@types/polymorpic';
import type { ButtonProps } from '@/components/@commons/Button/Button.type';

const Button = <T extends ElementType = 'button' | 'a'>({
  as,
  kind,
  styles = {},
  children,
  ...attribute
}: PolymorpicProps<T, ButtonProps>) => {
  const Element = as || 'button';

  return (
    <Element css={getButtonStyle({ kind, styles })} {...attribute}>
      {children}
    </Element>
  );
};

export default Button;
