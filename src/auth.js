// Registra i guarda les dades d'autenticació i usa el component authForm() dins de Alpine
export function registerAuth(Alpine) {
  // Carregar usuari guardat (si n'hi ha)
  let initialUser = null;
  try {
    const saved = localStorage.getItem("playmon_current_user");
    if (saved) {
      initialUser = JSON.parse(saved);
    }
  } catch (e) {
    console.warn("No s'ha pogut llegir l'usuari guardat", e);
  }

  // Store global d'auth
  Alpine.store("auth", {
    user: initialUser,
    get isLoggedIn() {
      return !!this.user;
    },
    login(user) {
      this.user = user;
      localStorage.setItem("playmon_current_user", JSON.stringify(user));
    },
    logout() {
      this.user = null;
      localStorage.removeItem("playmon_current_user");
    },
  });

  //Formulari per a registre i login
  Alpine.data("authForm", () => ({
    mode: "register",

    username: "",
    email: "",
    password: "",
    confirmPassword: "",

    loading: false,
    message: "",
    error: "",

    switchMode(mode) {
      this.mode = mode;
      this.message = "";
      this.error = "";
      this.password = "";
      this.confirmPassword = "";
    },

    loadUsers() {
      try {
        const raw = localStorage.getItem("playmon_users");
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        console.warn("Error llegint usuaris", e);
        return [];
      }
    },

    saveUsers(users) {
      localStorage.setItem("playmon_users", JSON.stringify(users));
    },

    submit() {
      this.error = "";
      this.message = "";

      if (this.mode === "register") {
        this.handleRegister();
      } else {
        this.handleLogin();
      }
    },

    handleRegister() {
      if (!this.username.trim()) {
        this.error = "El nom d'usuari és obligatori.";
        return;
      }
      if (!this.email.trim()) {
        this.error = "El correu electrònic és obligatori.";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.error = "Introdueix un correu electrònic vàlid.";
        return;
      }
      if (this.password.length < 6) {
        this.error = "La contrasenya ha de tenir com a mínim 6 caràcters.";
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.error = "Les contrasenyes no coincideixen.";
        return;
      }

      const users = this.loadUsers();
      const existing = users.find((u) => u.email === this.email);
      if (existing) {
        this.error = "Ja existeix un compte amb aquest correu.";
        return;
      }

      const newUser = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      users.push(newUser);
      this.saveUsers(users);

      Alpine.store("auth").login({
        username: newUser.username,
        email: newUser.email,
      });

      this.message = "Compte creat correctament! Sessió iniciada.";
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },

    handleLogin() {
      if (!this.email.trim() || !this.password) {
        this.error = "Introdueix el correu i la contrasenya.";
        return;
      }

      const users = this.loadUsers();
      const existing = users.find(
        (u) => u.email === this.email && u.password === this.password
      );

      if (!existing) {
        this.error = "Credencials incorrectes. Revisa el correu i la contrasenya.";
        return;
      }

      Alpine.store("auth").login({
        username: existing.username,
        email: existing.email,
      });

      this.message = `Sessió iniciada com ${existing.username}.`;
      this.password = "";
    },
  }));
}