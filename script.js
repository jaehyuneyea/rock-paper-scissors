function computerPlay() {
  let rand = Math.floor((Math.random()* 3));
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
  console.log(choice);
}