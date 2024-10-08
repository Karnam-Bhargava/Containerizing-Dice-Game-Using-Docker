let dice1 = document.getElementById('dice-1');
let dice2 = document.getElementById('dice-2');
let result = document.getElementById('result');

let diceImages = [
    'dice-1.png',
    'dice-2.png',
    'dice-3.png',
    'dice-4.png',
    'dice-5.png',
    'dice-6.png'
];

function rollDice() {
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);

    dice1.src = diceImages[num1];
    dice2.src = diceImages[num2];

    if (num1 === num2) {
        result.textContent = 'Match! You won!';
        result.classList.add('match');
        result.classList.remove('no-match');
        setTimeout(resetGame, 2000);
    } else {
        result.textContent = 'No match! Try again!';
        result.classList.add('no-match');
        result.classList.remove('match');
    }
  }

  function resetGame() {
      dice1.src = 'dice-1.png';
      dice2.src = 'dice-1.png';
      result.textContent = '';
      result.classList.remove('match', 'no-match');
  }
