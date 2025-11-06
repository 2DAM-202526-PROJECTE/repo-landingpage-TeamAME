import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [
    handlebars({
      // Li diem la ruta exacta a la teva carpeta
      partialDirectory: 'src/partials',
    })
  ],
  base: '/repo-landingpage-TeamAME/' // Això està perfecte
})