const body = document.querySelector('body');
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('#btn-humburger');
const fadeElems = document.querySelectorAll('.hidden');
// const overlay = document.querySelector('.overlay');
// const headerMenu = document.querySelector('.header__menu');

header.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    body.classList.remove('no-scroll');
    header.classList.remove('open');

    fadeElems.forEach(el => {
      el.classList.remove('fade-in');
      el.classList.add('fade-out');
    });
  } else {
    body.classList.add('no-scroll');
    header.classList.add('open');

    fadeElems.forEach(el => {
      el.classList.add('fade-in');
      el.classList.remove('fade-out');
    });
  }
});
