let cpuScore = 0;
let playerScore = 0;

// randomly computes a choice of the three and returns the choice
function computerPlay() {
  let rand = Math.floor((Math.random()* 3)); // choose a random number between 0 and 2
  let choice;
  switch(rand) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
  }
  return choice;
}

// clicking a button triggers playround with chosen input of the three


// plays a single round of rock paper scissors given the choice of both the player and the computer.
function playRound(playerSelection, computerSelection) {
  let playerCase = playerSelection.toLowerCase();
  let winState;

  if (playerCase == computerSelection) { // tie case is when both selections are just equal
    winState = `It's a tie! ${playerCase} ties with ${computerSelection}`; // we store the game result string in a variable
    update(winState);
  } else {
    switch (playerCase) { // check the cases in a switch statement for all possible values
      case "rock":
        (computerSelection == "scissors") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`; // win if scissors, lose if paper
        update(winState);
        break;
      case "paper":
        (computerSelection == "rock") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`;
        update(winState);
        break;
      case "scissors":
        (computerSelection == "paper") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`;
        update(winState);
    }
  }
}

/**
 * Called from the playRound function where winState is the message
 * passed in to display to the user.
 * Additionally updates the score each round and calls endGame if 
 * either score has reached 5.
 */
function update(winState) {

  let vicState = winState.split(' ').slice(0,2).join(' '); // parses the first two words of the winState message

  desc.textContent = winState; // updates the message to the user

  if (vicState === 'You win!') playerScore++; // checks the first two words and updates score accordingly
  if (vicState === 'You lose!') cpuScore++;

  // if either player has reached 5 points, call endGame with result
  if (playerScore == 5) {
    endGame('win');
  } else if (cpuScore == 5) {
    endGame('lose');
  }

  // update UI representation of the score
  ps.textContent = playerScore;
  cs.textContent = cpuScore;
}

/**
 * receives result, and determines whether the game is won or lost and 
 * displays message to the user and resets score to 0.
 */
function endGame(result) {
  if (result == 'win') {
    desc.textContent = 'Game over! You win!';
  } else if (result == 'lose') {
    desc.textContent = 'Game over! You lose!';
  }
  playerScore = 0;
  cpuScore = 0;
}

const container = document.querySelector('.container');

const ps = document.querySelector('#playerScore');
const cs = document.querySelector('#cpuScore');
const desc = document.querySelector('#description');

ps.textContent = playerScore;
cs.textContent = cpuScore;

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  let playerSelection = 'rock';
  let computerSelection = computerPlay();
  playRound(playerSelection,computerSelection);
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  let playerSelection = 'paper';
  let computerSelection = computerPlay();
  playRound(playerSelection,computerSelection);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  let playerSelection = 'scissors';
  let computerSelection = computerPlay();
  playRound(playerSelection,computerSelection);
});