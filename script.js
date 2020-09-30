// create variables for scores and rounds
let humanScore = 0;
let computerScore = 0;
let currentRoundNum = 1;


const generateTarget = () => {
   return Math.floor(Math.random() * 10);
}

// create function with three params to compare guesses for the player, computer, and the target
const compareGuesses = (humanGuess, computerGuess, targetGuess ) => {
    const humanDiff = Math.abs(targetGuess - humanGuess)
    const computerDiff = Math.abs(targetGuess - computerGuess)
    return humanDiff <= computerDiff;
}

// create function to decide winner
const updateScore= winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNum++;

