let buttons = document.querySelectorAll(".button");   
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;


// Get random choice 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}


//Display winner
function winnerDisplay(winner) {
    let resultContainer = document.getElementById("results");
    let para = document.createElement("p");
    para.textContent = winner;

    resultContainer.appendChild(para);
}

// Declare a winner
function declareWinner() {
    if(playerScore === 5) {
        let resultContainer = document.getElementById("results");
        let para = document.createElement("p");
        para.textContent = "You won the game!";

        resultContainer.appendChild(para);
    }
    if (computerScore === 5) {
        let resultContainer = document.getElementById("results");
        let para = document.createElement("p");
        para.textContent = "You lost the game!";

        resultContainer.appendChild(para);
    }
}

//update Score
function updatePlayerScore() {
    document.getElementById('player_score').innerText = playerScore
}

function updateComputerScore() {
    document.getElementById('computer_score').innerText = computerScore
}

// Pick winner
function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "This is a draw."
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        computerScore++;
        updateComputerScore();
        return "You lose! Rock beats Scissors";
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        playerScore++;
        updatePlayerScore()
        return "You won! Scissors beats Paper";
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        computerScore++;
        updateComputerScore();
        return "You lost! Paper beats Rock" ;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        playerScore++;
        updatePlayerScore()
        return "You won! Rock beats Scissors" ;
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        playerScore++;
        updatePlayerScore()
        return "You won! Paper beats Rock" ;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        computerScore++;
        updateComputerScore();
        return "You lost! Scissors beats paper";
    }
}


buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.value.toLowerCase();
        console.log(playerChoice);
      let computerChoice = getComputerChoice()
    
     let winner = playRound(computerChoice, playerChoice);
     winnerDisplay(winner)
  
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }
    });
  });

  