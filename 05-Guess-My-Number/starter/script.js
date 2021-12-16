'use strict';

const MIN = 1;
const MAX = 20;

let guessValue = Math.trunc(Math.random() * (MAX - MIN)) + MIN;

const againBtn = document.querySelector('.again');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const body = document.querySelector('body');

function reset() {
  console.log('Reset');
  input.value = '';
  message.textContent = 'Start guessing...';
  score.textContent = MAX;
  guessValue = Math.trunc(Math.random() * (MAX - MIN)) + MIN;
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '30rem';
}

function handleCheck() {
  if (input.value === '') {
    message.textContent = 'Enter a guess value';
    return;
  }

  const inputValue = Number(input.value);
  const scoreValue = Number(score.textContent);
  const highscoreValue = Number(highscore.textContent);

  if (scoreValue === 0) return;

  if (inputValue === guessValue) {
    message.textContent = 'You guessed right!';
    number.textContent = guessValue;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (scoreValue > highscoreValue) {
      highscore.textContent = scoreValue;
    }
  } else {
    if (scoreValue === 1) {
      message.textContent = 'You Lost';
      score.textContent = 0;
      return;
    }
    message.textContent = inputValue < guessValue ? 'Too low' : 'Too high';
    score.textContent = scoreValue - 1;
  }
}

checkBtn.removeEventListener('click', handleCheck);
checkBtn.addEventListener('click', handleCheck);

againBtn.removeEventListener('click', reset);
againBtn.addEventListener('click', reset);
