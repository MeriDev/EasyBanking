const hamburgerBtn = document.querySelector('#btn-humburger');
const headerMenu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');

hamburgerBtn.addEventListener('click', function () {
  hamburgerBtn.classList.toggle('open');
  overlay.classList.toggle('hidden');
  headerMenu.classList.toggle('hidden');
});
