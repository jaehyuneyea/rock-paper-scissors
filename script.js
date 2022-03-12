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
  let winState;

  if (playerCase == computerSelection) { // tie case is when both selections are just equal
    winState = `It's a tie! ${playerCase} ties with ${computerSelection}`; // we store the game result string in a variable
    return winState;
  } else {
    switch (playerCase) { // check the cases in a switch statement for all possible values
      case "rock":
        (computerSelection == "scissors") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`; // win if scissors, lose if paper
        return winState;
      case "paper":
        (computerSelection == "rock") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`;
        return winState;
      case "scissors":
        (computerSelection == "paper") ? winState = `You win! ${playerCase} beats ${computerSelection}` : 
        winState = `You lose! ${computerSelection} beats ${playerCase}`;
        return winState;
      default:
        winState = "Choose a valid choice!";
        return winState;
    }
  }
}
// prompts user for a choice and runs playRound 5 times and accepts only valid input
// function game() {
//   for (let i = 0; i < 5; i++) {
//     let playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
//     let computerSelection = computerPlay();
//     let result = playRound(playerSelection, computerSelection);
//     (result == "Choose a valid choice!") ? i -= 1 : i; // ensures that 5 valid inputs are made 
//     console.log(result);

//   }
// }