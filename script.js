let playerSelection;
let computerSelection;
let winCount = 0;
let loseCount = 0;
let choices = ["rock", "paper", "scissors"];

for (i = 0; winCount != 3 && loseCount != 3; i++) {
    computerSelection = getComputerSelection();
    playerSelection = prompt("rock, paper, or scissors? Make your choice.");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        playRound(playerSelection, computerSelection); 
    }
    else {
        alert("That is not a choice! Try again.");
    }
}

if (winCount === 3) {
    alert("VICTORY!");
}
else if (loseCount === 3) {
    alert("YOU LOST!");
}

function getComputerSelection() {
    let index = Math.floor((Math.random() * choices.length));
    return index = choices[index];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie! Try again.");
        return;
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        alert("Round lost!");
        loseCount++;
        console.log(playerSelection, computerSelection, winCount, loseCount);
        return;
    } else {
        alert("Round won!");
        winCount++;
        console.log(playerSelection, computerSelection, winCount, loseCount);
        return;
    }
}