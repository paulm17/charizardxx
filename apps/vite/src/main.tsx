import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@charizardxx/core';
import App from './App.tsx';

import '@charizardxx/core/styles.css';
import '@pigment-css/react/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
