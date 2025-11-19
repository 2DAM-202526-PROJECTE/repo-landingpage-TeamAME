import "./style.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";

import Alpine from "alpinejs";
import { initCookieConsent } from "./cookie.js";
import { registerAuth } from "./auth.js";

window.Alpine = Alpine;

/* Cookies */
Alpine.store("cookies", {
  analytics: false,
  marketing: false,
});

/* Registre */
registerAuth(Alpine);

/*  Newsletter */
Alpine.data("newsletter", () => ({
  email: "",
  loading: false,
  success: false,
  error: "",

  isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },

  submit() {
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

/* Consentiment de cookies */
initCookieConsent(({ analytics, marketing }) => {
  Alpine.store("cookies").analytics = analytics;
  Alpine.store("cookies").marketing = marketing;
});

Alpine.start();