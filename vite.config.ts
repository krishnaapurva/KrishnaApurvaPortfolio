import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: https://<user>.github.io/<repo>/
// With base './', relative URLs break when users land on .../KrishnaApurvaPortfolio (no trailing slash):
// the browser resolves "assets/profile.png" to github.io/assets/... (404). A production base of /repo/
// makes import.meta.env.BASE_URL root-absolute so publicPath() always hits the deployed files.
const GH_PAGES_BASE = '/KrishnaApurvaPortfolio/'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? GH_PAGES_BASE : '/',
})
