import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    handlebars({
      // Li diem la ruta exacta a la teva carpeta
      partialDirectory: 'src/partials',
    })
  ],
  base: '/repo-landingpage-TeamAME/', // Això està perfecte
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        preus: resolve(__dirname, 'preus.html'),
        registre: resolve(__dirname, 'registre.html'),
        faq: resolve(__dirname, 'faq.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})