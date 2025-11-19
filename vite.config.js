import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: 'src/partials',
    })
  ],
  base: '/repo-landingpage-TeamAME/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        preus: resolve(__dirname, 'preus.html'),
        registre: resolve(__dirname, 'registre.html'),
        faq: resolve(__dirname, 'faq.html'),
        descarges: resolve(__dirname, 'descarges.html'),
        cookies: resolve(__dirname, 'cookies.html'),
        termes: resolve(__dirname, 'termes.html'),
        privacitat: resolve(__dirname, 'privacitat.html'),
        nested: resolve(__dirname, 'nested/index.html'),
      },
    },
  },
})