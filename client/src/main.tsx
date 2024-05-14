import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { globalStyle } from '@/styles/global';
import { worker } from '@/mocks/browser';

import App from './App';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyle} />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
