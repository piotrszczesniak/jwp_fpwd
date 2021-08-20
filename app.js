const mobileToggler = document.querySelector('#menu-toggler');
const menu = document.querySelector('.menu__list');

mobileToggler.addEventListener('click', () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
})