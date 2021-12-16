'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    console.log(`What is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++`);
    const option = Number(prompt('Enter the option'));
    if (option < 0 || option > 3) {
      console.log('Wrong option entered');
      return;
    }
    this.answers[option]++;
    this.displayResults();
  },

  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else console.log(`Poll results are`, ...this.answers);
  },
};

const btnAnswerPoll = document.querySelector('.poll');

btnAnswerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
