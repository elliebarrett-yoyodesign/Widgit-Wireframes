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
  plugins: [tailwindcss()],
  build: { rollupOptions: { input } },
})
