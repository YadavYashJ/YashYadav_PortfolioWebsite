import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// IMPORTANT: change this to your GitHub repository name before deploying.
const REPO_NAME = 'YashYadav_PortfolioWebsite';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Dev server runs at "/", production build is served from /<repo-name>/ on GitHub Pages.
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
}));
