// defind variable to menu
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

// toggle function
menu.addEventListener('click', () => {
  navbar.classList.toggle('change');
});
