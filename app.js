const mobileToggler = document.querySelector('#menu-toggler');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');

mobileToggler.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuList.classList.toggle('active');
});
