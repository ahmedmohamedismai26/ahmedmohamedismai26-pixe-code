// Make showSection available globally
window.showSection = function(sectionId) {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-btn');
  
  // Hide all sections
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show target section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }

  // Update nav buttons
  navLinks.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.section === sectionId) {
      btn.classList.add('active');
    }
  });

  // Update URL
  history.pushState(null, null, `#${sectionId}`);
};

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  // Nav link click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.dataset.section;
      if (sectionId) {
        showSection(sectionId);
      }
    });
  });

  // Handle initial hash
  const initialHash = window.location.hash.replace('#', '') || 'home';
  showSection(initialHash);

  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    showSection(hash);
  });

  console.log('Portfolio initialized 🚀');
});
