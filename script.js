/* 

Plan

UI:

A prompt will ask for user input, results will be displayed as alerts

stringGenerator function:

Create a random string generator function that only pulls from the list of strings it is given

playRound function:

Make the parameters case insensitive by converting them all to the same case type before further processing
if playerSelection === computerSelection print tie message, re-execute stringGenerator function, and re-prompt user for a string without incrementing sentry
else if (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock") print lose round message, exit round function, and increment if sentry <= 5
else if (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") print win round message, exit round function, and increment sentry if less than or equal to 5

Pesudocode

declare variables playerSelection and computerSelection of type string that are initialized as undefined
declare variables winCount and loseCount of type number that are initialized as 0
create a function that generates a random string that is either "rock", "paper", or "scissors"
assign random string value to computerSelection
prompt for user to enter a string
if string is not "rock", "paper", or "scissors" send error message and reprompt user
else store string in playerSelection
create function playRound that takes case-insensitive parameters playerSelection and computerSelection and returns a string that declares the round winner
if playerSelection is the winner increment winCount
else increment loseCount
loop from line 21 until either winCount or loseCount === 3
print victory message or defeat message when count variables reach state change

*/

let playerSelection;
let computerSelection;
let winCount = 0;
let loseCount = 0;
let choices = ["rock", "paper", "scissors"];

playerSelection = prompt("rock, paper, or scissors? Make your choice.");
computerSelection = getComputerSelection();

function getComputerSelection() {
    /* generate random float between 0-1, multiply by number of items in choices array, convert to int, assign to variable, assign variable to the choices array index number, return*/
    let index = Math.floor((Math.random() * choices.length));
    return index = choices[index];
}

function playRound(playerSelection, computerSelection) {
    /* convert to case-insensitive */
    playerSelection = playerSelection.toLowerCase();
    /* Check for input error */
    if (playerSelection != "rock" || playerSelection != "paper" || playerSelection != "scissors") {
        alert("That's not a choice. Try again.");
    }
    /* Check for a tie */
    if (playerSelection === computerSelection) {
        alert("It's a tie! Try again.");
    }
}

let test = playRound(playerSelection, computerSelection);
console.log(test);