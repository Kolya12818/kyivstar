// script.js

// Анімація при скролі
const items = document.querySelectorAll('.fade');

function showOnScroll() {
  const trigger = window.innerHeight * 0.9;
  items.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) item.classList.add('show');
  });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();

// Гамбургер-меню для мобільних
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});