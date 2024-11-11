import { extendTheme, pigment } from '@pigment-css/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const theme = extendTheme({
  cssVarPrefix: 'charizardxx',
  getSelector: (colorScheme) =>
    colorScheme ? `[data-charizardxx-color-scheme='${colorScheme}']` : ':root',
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    pigment({
      theme,
    }),
    react(),
  ],
  optimizeDeps: {
    include: ['prop-types', 'react-is'],
  },
  resolve: {
    alias: {
      'prop-types': 'prop-types/prop-types.js',
      'react-is': 'react-is/cjs/react-is.development.js',
    },
  },
});
