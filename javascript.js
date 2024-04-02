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

let computerScore = 0;
let personScore = 0;
let tieScore = 0;
let results = "";

function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  let s = playerSelection + computerSelection;
  results = retValue.get(playerSelection + computerSelection);
  roundResults(results);
  if (computerScore == 5 || personScore == 5 || tieScore == 5) {
    gameResults();
    personScore = 0;
    tieScore = 0;
    computerScore = 0;
  }
}

function roundResults(results) {
  if (results.includes("lose")) {
    computerScore++;
  } else if (results.includes("win")) {
    personScore++;
  } else {
    tieScore++;
  }
  round.textContent = `${results} ... computerScore: ${computerScore} ... personScore: ${personScore} ... tieScore: ${tieScore}`;
}

function gameResults() {
  let gameResult = "";
  if (personScore > computerScore) {
    gameResult = "You won big!";
  } else if (computerScore > personScore) {
    gameResult = "You lose big!";
  } else {
    gameResult = "A tie!";
  }
  game.textContent = `${gameResult} ... computerScore: ${computerScore} ... personScore: ${personScore} ... tieScore: ${tieScore}`;
}

const container = document.querySelector("#container");
const round = document.createElement("div");
round.classList.add("round");
container.appendChild(round);

const game = document.createElement("div");
game.classList.add("game");
container.appendChild(game);

const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
  playRound("Rock");
  content.textContent = results;
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
  playRound("Paper");
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
  playRound("Scissors");
});
