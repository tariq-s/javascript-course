'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.removeEventListener('click', openModal));
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// smooth scroll

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function () {
  //old school

  // const section1Rect = section1.getBoundingClientRect();
  // const [currentScrollX, currentScrollY] = [
  //   window.pageXOffset,
  //   window.pageYOffset,
  // ];
  // window.scrollTo({
  //   left: currentScrollX + section1Rect.left,
  //   top: currentScrollY + section1Rect.top,
  //   behavior: 'smooth',
  // });

  //modern
  section1.scrollIntoView({ behavior: 'smooth' });
});
