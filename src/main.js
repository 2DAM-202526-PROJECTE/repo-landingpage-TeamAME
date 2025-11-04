import './style.css'
import Alpine from 'alpinejs'
import CookieConsent from './cookie.js'

Alpine.plugin(CookieConsent)

window.Alpine = Alpine
Alpine.start()
