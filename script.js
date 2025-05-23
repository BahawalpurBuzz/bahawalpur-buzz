// Placeholder for future interactivity
console.log("Home Page Loaded");

// Carousel Script
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 3000); // 3000ms = 3 seconds per slide


// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});
