let target

const humanGuessInput = document.getElementById('human-guess')

const roundNumDisplay = document.getElementById('round-num')

const computerGuessDisplay = document.getElementById('computer-guess')
const humanScoreDisplay = document.getElementById('human-score')
const computerScoreDisplay = document.getElementById('computer-score')
const targetNumDisplay = document.getElementById('target-num')
const computerWinsDisplay = document.getElementById('computer-wins')

const guessButton = document.getElementById('guess')
const nextRoundButton = document.getElementById('next-round')

guessButton = addEventListener('click', () => {
  // generate the target value
  target = generateTarget()
  // retrieve the player's guess
  const currentHumanGuess = humanGuessInput.value
  // make a random 'computer guess'
  const computerGuess = Math.floor(Math.random() * 10)

  // display the computer guess and the target
  computerGuessDisplay.innerText = computerGuess
  targetNumDisplay.innerText = target

  // determine who won
  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)
  const winner = humanIsWinner ? 'human' : 'computer'

  // update the correct score
  updateScore(winner)

  if (humanIsWinner) {
    guessButton.innerText = 'You win!!!'
    guessButton.classList.toggle('winning-text')
  } else {
    computerWinsDisplay.innerText = 'Computer wins!!!'
  }
  // display the current scores
  humanScoreDisplay.innerText = humanScore
  computerScoreDisplay.innerText = computerScore

  // set the correct disabled state for the buttons
  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled')
})

nextRoundButton.addEventListener('click', () => {
  // increase round number
  advanceRound()
  // display new round number
  roundNumDisplay.innerText = currentRoundNum

  // set correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true)
  guessButton.removeAttribute('disabled')

  // reset the guess input box and the target number display
  targetNumDisplay.innerText = '?'
  guessButton.innerText = 'Make a Guess'
  humanGuessInput.value = ''
  computerGuessDisplay.innerText = '?'
  computerWinsDisplay.innerText = ''
  guessButton.classList.remove('winning-text')
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value + 1;
    handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
    humanGuessInput.value = +humanGuessInput.value - 1;
    handleValueChange(humanGuessInput.value);
});


