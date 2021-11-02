'use strict';

const randomValueGenerator = (numberData) =>
  Math.trunc(Math.random() * numberData) + 1;
let randomValue = randomValueGenerator(20);
console.log(randomValue);

let highscore = Number(document.querySelector('.highscore').textContent);

let scoreAccess = document.querySelector('.score');

let messageValue = document.querySelector('.message');
let guessValueReference = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function () {
  const guessValue = Number(guessValueReference.value);
  let score = Number(scoreAccess.textContent);
  if (score != 0) {
    if (guessValue === 0) {
      messageValue.textContent = '🛑 No number!';
      score--;
    }

    // Guess equal to generated value
    else if (randomValue === guessValue) {
      messageValue.textContent = '🥳 Correct Number.';
      document.querySelector('.number').textContent = randomValue;
      document.querySelector('.number').style.width = '20rem';
      document.querySelector('body').style.backgroundColor = '#420f6b';

      if (highscore < score) {
        document.querySelector('.highscore').textContent = score;
        highscore = score;
      }
    }

    //  Guess not equal to generated value or 0;
    else {
      score--;

      if (guessValue < randomValue && guessValue >= randomValue - 2) {
        messageValue.textContent = '😒 Little low Guess';
      } else if (guessValue > randomValue && guessValue <= randomValue + 2) {
        messageValue.textContent = '😒 Little high Guess';
      } else if (guessValue > randomValue + 2) {
        messageValue.textContent = '😒 High Guess';
      } else {
        messageValue.textContent = '😒 Low Guess';
      }
    }

    scoreAccess.textContent = score;
    if (scoreAccess.textContent == 0) {
      messageValue.textContent = '😔 You Lost the Game.';
      document.querySelector('body').style.backgroundColor = '#830808';
    }
  }
});

document.querySelector('.again-game').addEventListener('click', function () {
  scoreAccess.textContent = '20';
  messageValue.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '10rem';
  randomValue = randomValueGenerator(20);
  console.log(randomValue);
  guessValueReference.value = 0;
});
