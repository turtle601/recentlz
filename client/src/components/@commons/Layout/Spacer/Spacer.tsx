import { getSpacerStyle } from '@/components/@commons/Layout/Spacer/Spacer.style';

import type { SpacerProps } from '@/components/@commons/Layout/Spacer/Spacer.type';

function Spacer({ space, direction = 'vertical' }: SpacerProps) {
  return <div style={{ ...getSpacerStyle({ direction, space }) }}></div>;
}

export default Spacer;
