import { css } from '@emotion/react';

import type { FlexProps } from '@/components/@commons/Layout/Flex/Flex.type';

export const getFlexStyle = ({
	direction,
	justify,
	align,
	gap,
	styles,
}: FlexProps) => {
	return css({
		display: 'flex',
		width: '100%',
		height: 'auto',
		flexDirection: direction,
		justifyContent: justify,
		alignItems: align,
		gap,
		...styles,
	});
};
