
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const scrollBtn = document.getElementById('scrollTopBtn');

  function showSection(sectionId) {
    sections.forEach(section => section.classList.remove('active'));
    const selected = document.getElementById(sectionId);
    if (selected) {
      selected.classList.add('active');
     
      const headerHeight = document.querySelector('.navbar').offsetHeight || 80;
      window.scrollTo({ top: selected.offsetTop - headerHeight, behavior: 'smooth' });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      const sectionId = e.target.dataset.section;
      if (sectionId) {
        showSection(sectionId);
        navLinks.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
  });


  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    root.classList.add('light');
    themeToggle.querySelector('i').className = 'fas fa-sun';
  } else {
    themeToggle.querySelector('i').className = 'fas fa-moon';
  }

  themeToggle.addEventListener('click', () => {
    root.classList.toggle('light');
    const now = root.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', now);
    themeToggle.querySelector('i').className = now === 'light' ? 'fas fa-sun' : 'fas fa-moon';
  });

  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.15 }); 

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

 
  function toggleScrollTopButton() {
    scrollBtn.style.display = window.scrollY > 600 ? 'block' : 'none'; 
  }

  window.addEventListener('scroll', toggleScrollTopButton);
  toggleScrollTopButton(); // Initial check

  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { 
        const currentSectionId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.dataset.section === currentSectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-50% 0px -50% 0px', 
    threshold: 0 
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

 
  console.log('Professional portfolio initialized and enhanced 🚀');
});
