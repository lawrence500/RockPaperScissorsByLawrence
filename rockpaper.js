const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay")

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(playerChoice === computerChoice){
    result =  "IT'S A TIE"
  }
  else{
    switch(playerChoice){
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOOSE!";
        break;
        case "paper":
          result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOOSE!";
          break;
          case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOOSE!";
            break;
    }
  }

  playerDisplay.textContent = `player: ${playerChoice}`
  computerDisplay.textContent = `computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch(result){
    case "YOU WIN!":
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
      case "YOU LOOSE!":
        computerScore++;
        ComputerScoreDisplay.textContent = computerScore;
  }
}

