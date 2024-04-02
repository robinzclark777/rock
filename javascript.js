const retValue = new Map([
  ["rockpaper", "You lose! Paper covers Rock!"],
  ["rockscissors", "You win! Rock beats Scissors!"],
  ["rockrock", "A tie!"],
  ["paperscissors", "You lose! Scissors beat Paper!"],
  ["paperrock", "You win! Paper covers Rock!"],
  ["paperpaper", "A tie!"],
  ["scissorsrock", "You lose! Scissors beat Rock"],
  ["scissorspaper", "You win! Scissors beat Paper"],
  ["scissorsscissors", "A tie!"],
]);

function getComputerChoice() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let s = playerSelection + computerSelection;
  let v = retValue.get(s);
  return retValue.get(playerSelection + computerSelection);
}

computerScore = 0;
personScore = 0;
tieScore = 0;

for (i = 0; i < 5; i++) {
  player = prompt("Rock, Paper, or Scissors?");
  results = playRound(player, getComputerChoice());

  console.log(results);
  if (results.includes("lose")) {
    computerScore++;
  } else if (results.includes("win")) {
    personScore++;
  } else {
    tieScore++;
  }
}
if (personScore > computerScore) {
  console.log("You won big!");
} else if (computerScore > personScore) {
  console.log("You lose big!");
} else {
  console.log("A tie!");
}

console.log(`Your score: ${personScore}`);
console.log(`Computer Score: ${computerScore}`);
console.log(`Ties: ${tieScore}`);
