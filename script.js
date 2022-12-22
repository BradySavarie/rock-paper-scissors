let playerSelection;
let compSelection;
let playerScore = 0;
let compScore = 0;
let choices = ["Rock ✊", "Paper ✋", "Scissors ✌"];

const btns = document.querySelectorAll('button');

btns.forEach(button => button.addEventListener('click', event => {
    playerSelection = button.textContent;
    if (playerSelection === 'Rock ✊') {
        button.classList.add('rockselected');
    } else if (playerSelection === 'Paper ✋') {
        button.classList.add('paperselected');
    } else if (playerSelection === 'Scissors ✌') {
        button.classList.add('scissorsselected');
    }
    playRound(playerSelection);
    if (playerScore === 5 || compScore === 5) {
        announceResults();
    };
}));
btns.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("rockselected");
    this.classList.remove("paperselected");
    this.classList.remove("scissorsselected");
  };

function playRound(playerSelection) {
    compSelection = getComputerSelection();
    if (playerSelection === compSelection) {
        const tie = document.getElementById('outcome');
        tie.textContent = 'It\'s a tie! Try again.';
        scoreCard(playerScore, compScore);
        return;
    } else if ((playerSelection === "Rock ✊" && compSelection === "Paper ✋") || 
               (playerSelection === "Paper ✋" && compSelection === "Scissors ✌") || 
               (playerSelection === "Scissors ✌" && compSelection === "Rock ✊")) {
        compScore++;
        const lost = document.getElementById('outcome');
        lost.textContent = 'Round Lost!';
        scoreCard(playerScore, compScore);
        return;
    } else {
        playerScore++;
        const won = document.getElementById('outcome');
        won.textContent = 'Round Won!';
        scoreCard(playerScore, compScore);
    };
};

function getComputerSelection() {
    let index = Math.floor((Math.random() * choices.length));
    return choices[index];
};

function scoreCard(playerScore, compScore) {
    // display running scores
    const lossCount = document.getElementById('comp');
    lossCount.textContent = `Computer Score: ${compScore}`;
    const winCount = document.getElementById('player');
    winCount.textContent = `Player Score: ${playerScore}`;

    // display round selections
    const pselection = document.getElementById('psel');
    pselection.textContent = `Your Choice: ${playerSelection}`;
    const cselection = document.getElementById('csel');
    cselection.textContent = `Computers Choice: ${compSelection}`;
};

function announceResults() {
    const content = document.getElementsByClassName('choices');
    const outcome = document.getElementById('outcome');
    const selections = document.getElementsByClassName('selections');
    content[0].innerHTML = "";
    outcome.remove();
    selections[0].remove();

    const resultsAnnouncement = document.createElement('div');
    const header = document.createElement('h1');
    const playAgainButton = document.createElement('button');
    playAgainButton.setAttribute('class', 'playAgainButton');
    if (playerScore === 5) {
        header.textContent = "VICTORY!";
    } else {
        header.textContent = "DEFEAT!";
    }
    playAgainButton.textContent = "Play Again";

    resultsAnnouncement.appendChild(header);
    resultsAnnouncement.appendChild(playAgainButton);
    content[0].appendChild(resultsAnnouncement);

    playAgainButton.addEventListener('click', event => {
        location.reload();
    });
};