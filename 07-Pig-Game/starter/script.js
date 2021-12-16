'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, activePlayer, currentScore, playing;

function init() {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  score0El.textContent = score1El.textContent = 0;
  current0El.textContent = current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.add('player--active');
}
init();

function switchPlayer() {
  currentScore = 0;
  activePlayer === 0
    ? (current0El.textContent = 0)
    : (current1El.textContent = 0);
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}

function rollDice() {
  if (!playing) return;
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    activePlayer === 0
      ? (current0El.textContent = currentScore)
      : (current1El.textContent = currentScore);
  } else {
    switchPlayer();
  }
}

function handleHold() {
  if (!playing) return;
  scores[activePlayer] += currentScore;
  activePlayer === 0
    ? (score0El.textContent = scores[activePlayer])
    : (score1El.textContent = scores[activePlayer]);

  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    if (activePlayer === 0) {
      player0El.classList.add('player--winner');
      player0El.classList.remove('player--active');
    } else {
      player1El.classList.add('player--winner');
      player1El.classList.remove('player--active');
    }
  } else {
    switchPlayer();
  }
}

btnRoll.removeEventListener('click', rollDice);
btnRoll.addEventListener('click', rollDice);

btnHold.removeEventListener('click', handleHold);
btnHold.addEventListener('click', handleHold);

btnNew.removeEventListener('click', init);
btnNew.addEventListener('click', init);
