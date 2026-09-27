// Application Entry Point
import { initNavigation } from './navigation.js';
import { initFilters } from './filters.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initFilters();

  // Dynamic copyright year update
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
