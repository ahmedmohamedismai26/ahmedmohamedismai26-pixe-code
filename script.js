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

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

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

  // Theme Toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateThemeIcon(savedTheme, themeIcon);
    }
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme, themeIcon);
    });
    
    function updateThemeIcon(theme, icon) {
      if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
  }

  // Image upload functionality
  const imageUpload = document.getElementById('imageUpload');
  const profileImage = document.getElementById('profileImage');

  if (imageUpload && profileImage) {
    imageUpload.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          profileImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});