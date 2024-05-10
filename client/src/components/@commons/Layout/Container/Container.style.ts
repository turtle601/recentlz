import { css } from '@emotion/react';

import type { ContainerProps } from './Container.type';

export const getContainerStyle = ({
	minWidth,
	maxWidth,
	styles,
}: ContainerProps) => {
	return css({
		minWidth,
		maxWidth,
		...styles,
	});
};
