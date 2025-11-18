// src/cookie.js
import * as CookieConsent from "vanilla-cookieconsent";

export function initCookieConsent() {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: "box",
        position: "bottom right",
        flipButtons: false,
      },
      preferencesModal: {
        layout: "box",
        position: "left",
        flipButtons: false
      }
    },

    categories: {
      necessary: {
        enabled: true,
        readOnly: true,
      },
      analytics: {},
      marketing: {},
    },

    language: {
      default: "ca",
      translations: {
        ca: {
          consentModal: {
            title: "Ús de cookies",
            description:
              "Utilitzem cookies per millorar l'experiència d'usuari i analitzar el tràfic.",
            acceptAllBtn: "Acceptar totes",
            acceptNecessaryBtn: "Només necessàries",
            showPreferencesBtn: "Personalitzar",
          },
          preferencesModal: {
            title: "Preferències de cookies",
            acceptAllBtn: "Acceptar totes",
            acceptNecessaryBtn: "Només necessàries",
            savePreferencesBtn: "Guardar preferències",
            closeIconLabel: "Tancar",
            sections: [
              {
                title: "Cookies necessàries",
                description:
                  "Aquestes cookies són essencials per al funcionament del lloc.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics",
                description:
                  "Cookies que recullen dades de manera anònima sobre l’ús del lloc.",
                linkedCategory: "analytics",
              },
              {
                title: "Marketing",
                description:
                  "S'utilitzen per mostrar contingut i anuncis personalitzats.",
                linkedCategory: "marketing",
              },
            ],
          },
        },
      },
    },
  });
}