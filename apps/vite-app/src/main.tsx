import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@charizardxx/system/styles.css';
import '@pigment-css/react/styles.css';

import { CharizardxxEmotionProvider, emotionTransform } from '@charizardxx/emotion';
import { CharizardxxProvider } from '@charizardxx/system';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CharizardxxProvider stylesTransform={emotionTransform}>
      <CharizardxxEmotionProvider>
        <App />
      </CharizardxxEmotionProvider>
    </CharizardxxProvider>
  </StrictMode>
);
