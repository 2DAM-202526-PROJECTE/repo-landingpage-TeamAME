import './style.css';
import 'vanilla-cookieconsent/dist/cookieconsent.css';  // ✅ AFEGIT

import Alpine from 'alpinejs';
import { initCookieConsent } from './cookie.js';

// Simulació d'un enviament de formulari de la newsletter
Alpine.data("newsletter", () => ({
  email: "",
  loading: false,
  success: false,
  error: "",

  // Validació del correu electrònic
  isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },

  async submit() {
    this.error = "";
    this.success = false;

    if (!this.isValidEmail(this.email)) {
      this.error = "Introdueix un correu electrònic vàlid.";
      return;
    }

    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.success = true;
      this.email = "";
    }, 800);
  },
}));


window.Alpine = Alpine;
Alpine.start();

initCookieConsent();
