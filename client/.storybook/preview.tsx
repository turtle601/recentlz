import React from 'react';
import { Global } from '@emotion/react';

import type { Preview } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { initialize, mswDecorator, mswLoader } from 'msw-storybook-addon';

import { worker } from '../src/mocks/browser';
import { handlers } from '../src/mocks/handler';

import { globalStyle } from '../src/styles/global';

const queryClient = new QueryClient();

if (typeof global.process === 'undefined') {
  worker.start();
}

initialize();

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    staticDirs: ['./public'],
    msw: {
      handlers: { ...handlers },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyle} />
          <Story />
        </QueryClientProvider>
      </div>
    </>
  ),
  mswDecorator,
];

// export default preview;
