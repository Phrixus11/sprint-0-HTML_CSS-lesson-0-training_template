import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/sprint-0-HTML_CSS-lesson-0-training_template/',
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
