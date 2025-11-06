import { resolve } from 'path'
export default {
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
}