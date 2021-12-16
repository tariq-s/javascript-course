'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function handleOpen() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function handleClose() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function handleKeyPress(event) {
  if (event.key !== 'Escape') return;
  handleClose();
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].removeEventListener('click', handleOpen);
  btnOpenModal[i].addEventListener('click', handleOpen);
}

overlay.removeEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);

btnCloseModal.removeEventListener('click', handleClose);
btnCloseModal.addEventListener('click', handleClose);

document.removeEventListener('keydown', handleKeyPress);
document.addEventListener('keydown', handleKeyPress);
