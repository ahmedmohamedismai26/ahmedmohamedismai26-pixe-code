// Make showSection available globally
window.showSection = function(sectionId) {
  console.log('Showing section:', sectionId);
  
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-btn');
  
  // Hide all sections
  sections.forEach(section => {
    section.classList.remove('active');
    console.log('Removed active from:', section.id);
  });

  // Show target section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    console.log('Added active to:', sectionId);
  } else {
    console.error('Section not found:', sectionId);
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
      console.log('Nav clicked:', sectionId);
      if (sectionId) {
        showSection(sectionId);
      }
    });
  });

  // Handle initial hash with a small delay to ensure DOM is ready
  setTimeout(() => {
    const initialHash = window.location.hash.replace('#', '') || 'home';
    showSection(initialHash);
    console.log('Initial section:', initialHash);
  }, 100);

  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    showSection(hash);
  });

  console.log('Portfolio initialized 🚀');
});