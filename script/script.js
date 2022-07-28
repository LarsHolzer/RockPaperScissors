// Get random choice 
let getComputerChoice = function() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
// Get player input and convert it to lowercase
let getUserInput = function() {
    let playerInput = window.prompt("Choose between 'Rock','Paper' and 'Scissors'");
    playerInput = playerInput.toLowerCase();
    return playerInput;
}

// Pick winner
