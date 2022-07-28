// Get random choice 
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
let computerChoice = getComputerChoice();

// Get player input and convert it to lowercase
function getUserInput() {
    let playerInput = window.prompt("Choose between 'Rock','Paper' and 'Scissors'");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}
let playerChoice = getUserInput();

// Pick winner
function playRound() {
    if (computerChoice === playerChoice) {
        return "This is a draw."
    } else if (computerChoice === "rock" && playerChoice === "scissors") {
        console.log("You lose! Rock beats Scissors")
    } else if (computerChoice === "paper" && playerChoice === "scissors") {
        console.log("You won! Scissors beats Paper")
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        console.log("You lost! Paper beats Rock") 
    } else if (computerChoice === "scissors" && playerChoice === "rock") {
        console.log("You won! Rock beats Scissors")
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        console.log("You won! Paper beats Rock") 
    } else if (computerChoice === "scissors" && playerChoice === "paper") {
        console.log("You lost! Scissors beats paper")
    }
}
