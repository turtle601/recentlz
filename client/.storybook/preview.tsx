import React from 'react';
import { Global } from '@emotion/react';

import { globalStyle } from '../src/styles/global';

import type { Preview } from '@storybook/react';

export const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export const decorators = [
	(Story) => (
		<>
			<div>
				<Global styles={globalStyle} />
				<Story />
			</div>
		</>
	),
];

// export default preview;
