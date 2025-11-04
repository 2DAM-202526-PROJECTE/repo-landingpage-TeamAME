export default function (Alpine) {
  Alpine.data('cookieConsent', () => ({
    accepted: false,

    init() {
      // Comprova si la cookie ja existeix
      const hasCookie = document.cookie.split(';').some(c => c.trim().startsWith('cookieConsent=accepted'));
      this.accepted = hasCookie;
    },

    accept() {
      const d = new Date();
      d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 any
      document.cookie = "cookieConsent=accepted; expires=" + d.toUTCString() + "; path=/";
      this.accepted = true;
    }
  }))
}