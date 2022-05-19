const mobileMenuBtn = document.querySelector('.navbar-icon');
const mobileMenu = document.querySelector('.mobile-menu');


mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('not-display');
})