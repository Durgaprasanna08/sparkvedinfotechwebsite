function toggleMenu() {
    const navlinks = document.querySelector('.nav-links');
    if (navlinks.style.display === 'none') {
        navlinks.style.display = 'block';
      } else {
        navlinks.style.display = 'none';
      }
}