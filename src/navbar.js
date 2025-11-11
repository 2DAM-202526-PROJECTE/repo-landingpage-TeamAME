document.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  
  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent', 'p-6', 'rounded-none');
    navbar.classList.add('bg-black/90', 'p-3', 'shadow-lg', 'backdrop-blur-md', 'rounded-b-2xl');
  } else {
    navbar.classList.add('bg-transparent', 'p-6', 'rounded-none');
    navbar.classList.remove('bg-black/90', 'p-3', 'shadow-lg', 'backdrop-blur-md', 'rounded-b-2xl');
  }
});