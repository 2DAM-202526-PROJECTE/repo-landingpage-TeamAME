import './style.css';
import 'vanilla-cookieconsent/dist/cookieconsent.css';  // ✅ AFEGIT

import Alpine from 'alpinejs';
import { initCookieConsent } from './cookie.js';

window.Alpine = Alpine;
Alpine.start();

initCookieConsent();
