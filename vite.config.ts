import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { readdirSync } from 'node:fs'
const root = import.meta.dirname
// Every root-level .html shell (written by scripts/gen-pages.mjs) becomes a build entry.
const input = Object.fromEntries(
  readdirSync(root).filter((f) => f.endsWith('.html')).map((f) => [f.replace(/\.html$/, ''), resolve(root, f)]),
)
export default defineConfig({
  // Relative asset paths so the built site works under a GitHub Pages sub-path (username.github.io/repo-name/).
  base: './',
  plugins: [tailwindcss()],
  build: { rollupOptions: { input } },
})
 
