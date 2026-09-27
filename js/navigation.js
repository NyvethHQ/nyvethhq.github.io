// Mobile Navigation Handler
export function initNavigation() {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggle || !nav) return;

  function toggleMenu() {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key for keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
}
