'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

function createUsernames(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}

const user = 'Stephen Thomas Williams';

createUsernames(accounts);
console.log(accounts);

function updateUI(currentAccount) {
  displayMovements(currentAccount.movements);

  calcDisplayBalance(currentAccount);

  calcDisplaySummary(currentAccount);
}

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce(function (acc, mov, i) {
    return mov + acc;
  }, 0);
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance} EUR`;
};

const maximumVal = account1.movements.reduce(function (max, mov) {
  return Math.max(max, mov);
}, -9999999);
console.log(maximumVal);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income} EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${out} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest} EUR`;
};

//login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    inputLoginPin.value = inputLoginUsername.value = '';

    updateUI(currentAccount);
  }
});

// transfer

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

// close acc

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const idx = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(idx, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));

// Challenge 1

const julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

function checkDogs(dogsJulia, dogsKate) {
  const newDogsJulia = [...dogsJulia];
  newDogsJulia.splice(0, 1).splice(-2);

  const allDogs = [...newDogsJulia, ...dogsKate];

  allDogs.forEach(function (dog, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dog < 3 ? 'still a puppy' : `an adult, and is ${dog} years old`
      }`
    );
  });
}

checkDogs(julia, Kate);

// Challenge 2

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age) {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });

  console.log(humanAges);
  const filterDogs = humanAges.filter(function (humanAge) {
    return humanAge >= 18;
  });
  console.log(filterDogs);
  const sum = filterDogs.reduce(function (sum, age) {
    return sum + age;
  }, 0);

  const avg = sum / filterDogs.length;
  console.log(avg);
};

calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challenge 3

const calcAverageHumanAge2 = ages => {
  console.log(
    ages
      .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
      .filter(humanAge => humanAge >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0)
  );
};
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// Challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  dogSarah.curFood > dogSarah.recommendedFood
    ? 'Eating too much'
    : 'Eating too less'
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .reduce((acc, dog) => [...acc, ...dog.owners], []);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .reduce((acc, dog) => [...acc, ...dog.owners], []);
console.log(ownersEatTooLittle);

console.log(ownersEatTooMuch.join(' and ') + "'s dogs eat too much");

console.log(ownersEatTooLittle.join(' and ') + "'s dogs eat too little");

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

const dogIsEatingOkay = dog =>
  dog.recommendedFood - dog.recommendedFood * 0.1 >= dog.curFood &&
  dog.curFood <= dog.recommendedFood + 0.1 * dog.recommendedFood;

console.log(dogs.some(dog => dogIsEatingOkay(dog)));

console.log(dogs.filter(dog => dogIsEatingOkay(dog)));

const sortedDogs = [...dogs].sort(
  (dog1, dog2) => dog1.recommendedFood - dog2.recommendedFood
);

console.log(sortedDogs);
