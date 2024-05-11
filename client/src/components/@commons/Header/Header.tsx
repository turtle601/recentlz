import Flex from '@/components/@commons/Layout/Flex/Flex';

import Logo from '@/assets/recentlz-logo.svg';
import { css } from '@emotion/react';

function Header() {
  return (
    <header
      css={css({
        padding: '1rem',
      })}
    >
      <Flex>
        <Logo />
      </Flex>
    </header>
  );
}

export default Header;
