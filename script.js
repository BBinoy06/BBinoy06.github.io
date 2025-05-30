// Example JavaScript: Add simple interactivity (like a scroll effect)
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 1s ease-in-out';
  });

  window.addEventListener('scroll', () => {
    sections.forEach((section) => {
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight - 100) {
        section.style.opacity = 1;
      }
    });
  });
});
