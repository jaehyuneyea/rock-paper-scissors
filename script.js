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
  console.log(playerCase);
  console.log(computerSelection);
  let winState;

  if (playerCase == computerSelection) { // tie case is when both selections are just equal
    winState = `It's a tie! ${playerCase} ties with ${computerSelection}`; // we store the game result string in a variable
    updateVictory(winState);
  } else {
    switch (playerCase) { // check the cases in a switch statement for all possible values
      case "rock":
        (computerSelection == "scissors") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`; // win if scissors, lose if paper
        updateVictory(winState);
        break;
      case "paper":
        (computerSelection == "rock") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`;
        updateVictory(winState);
        break;
      case "scissors":
        (computerSelection == "paper") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`;
        updateVictory(winState);
    }
  }
}

function updateVictory(winState) {

  let vicState = winState.split(' ').slice(0,2).join(' ');
  console.log(vicState);
  desc.textContent = winState;
  if (vicState === 'You win!') playerScore++;
  if (vicState === 'You lose!') cpuScore++;
  console.log(playerScore);
  console.log(cpuScore);

  if (playerScore == 5) {
    endGame('win');
  } else if (cpuScore == 5) {
    endGame('lose');
  }

  ps.textContent = playerScore;
  cs.textContent = cpuScore;
}

function endGame(result) {
  if (result == 'win') {
    desc.textContent = 'Game over! You win!';
  } else if (result == 'lose') {
    desc.textContent = 'Game over! You lose!';
  }
  playerScore = 0;
  cpuScore = 0;
}

// prompts user for a choice and runs playRound 5 times and accepts only valid input
// function game() {
//     let playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
//     let computerSelection = computerPlay();
//     let result = playRound(playerSelection, computerSelection);
//     console.log(result);
// }



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