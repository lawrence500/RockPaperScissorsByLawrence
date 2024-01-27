const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay")
const YouWin = document.getElementById('YouWin');
const ComputerWins = document.getElementById('ComputerWins')
const gameBox = document.getElementById('gameBox')
const restart = document.getElementById('restart')

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

  if(playerScore == 10){
    gameBox.style.display = 'none'
    YouWin.style.display = 'block'
    YouWin.style.color = 'white'
    restart.style.display = 'block'
  }
  else if(playerScore >= 10){
  playerScoreDisplay.textContent = 0;
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore
  ComputerScoreDisplay.textContent = computerScore
  }

  if(computerScore == 10){
    gameBox.style.display = 'none'
    ComputerWins.style.display = 'block'
    ComputerWins.style.color = 'white'
    restart.style.display = 'block'
  }
  else if(computerScore >= 10){
    ComputerScoreDisplay.textContent = 0;
  computerScore = 0;
  playerScore = 0;
  playerScoreDisplay.textContent = playerScore
  ComputerScoreDisplay.textContent = computerScore
  }

  restart.onclick = function(){
    computerScore = 0;
    playerScore = 0;
    restart.style.display = 'none'
    gameBox.style.display = 'block'
    YouWin.style.display = 'none'
    ComputerWins.style.display = 'none'
    ComputerScoreDisplay.textContent = computerScore
    playerScoreDisplay.textContent = playerScore
  }

}






