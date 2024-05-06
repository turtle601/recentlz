import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';
import { globalStyle } from '@/styles/global';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Global styles={globalStyle} />
		<App />
	</React.StrictMode>,
);
