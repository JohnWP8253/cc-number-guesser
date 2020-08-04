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
    advanceRound();

})
