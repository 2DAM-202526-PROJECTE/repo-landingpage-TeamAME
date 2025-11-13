// src/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!navbar || !mobileMenu) return;

  const addScrolled = (el) => {
    el.classList.remove("bg-transparent", "p-6", "rounded-none", "backdrop-blur-0");
    el.classList.add("bg-black/90", "shadow-lg", "backdrop-blur-md", "rounded-b-2xl");
  };

  const removeScrolled = (el) => {
    el.classList.add("bg-transparent", "rounded-none", "backdrop-blur-0");
    el.classList.remove("bg-black/90", "shadow-lg", "backdrop-blur-md", "rounded-b-2xl");
  };

  const applyState = () => {
    const scrolled = window.scrollY > 50;

    // Navbar: també ajustem el padding per “fer-la més compacte” en scroll
    if (scrolled) {
      navbar.classList.remove("p-6");
      navbar.classList.add("p-3");
      addScrolled(navbar);
      addScrolled(mobileMenu);
    } else {
      navbar.classList.remove("p-3");
      navbar.classList.add("p-6");
      removeScrolled(navbar);
      removeScrolled(mobileMenu);
    }
  };

  // Estat inicial i quan es fa scroll
  applyState();
  window.addEventListener("scroll", applyState);
});
