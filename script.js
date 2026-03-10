document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');

  // Show section function
  function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show target section
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add('active');
      
      // Trigger fade-up animations
      setTimeout(() => {
        target.querySelectorAll('.fade-up').forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('visible');
          }, index * 100);
        });
      }, 100);
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
  }

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

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all fade-up elements in active section
  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

  console.log('Portfolio initialized 🚀');
});
