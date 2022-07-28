// Get random choice 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
const computerChoice = getComputerChoice();

// Get player input and convert it to lowercase
function getUserInput() {
    let playerInput = window.prompt("Choose between 'Rock','Paper' and 'Scissors'");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}
const playerChoice = getUserInput();

// Pick winner
function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        return "This is a draw."
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        return "You lose! Rock beats Scissors";
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        return "You won! Scissors beats Paper";
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        return "You lost! Paper beats Rock" ;
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        return "You won! Rock beats Scissors" ;
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        return "You won! Paper beats Rock" ;
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        return "You lost! Scissors beats paper";
    }
}
