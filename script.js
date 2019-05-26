let playerScore = 0;
let compScore = 0;


// Resets score

const resetScore = function () {
    playerScore = 0;
    compScore = 0;
}

// Randomly picks Computers turn

function computerPlay() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return 'rock';
    } else if (compChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
 }

 // Plays a round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 1;      
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        return -1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        return -1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        return -1;
    } else if (playerSelection === " ") {
        console.log("User input not recognised.")
    }
}

// Plays five rounds and outputs the final score

function game() {
    resetScore();
    for (i = 1; i <= 5; i++) {
        let playerScore = 0;
        let compScore = 0;
        let computerSelection = computerPlay();
        console.log("Round " + i);
        let playerSelection = prompt("Please enter Rock, Paper or Scissors:").toLowerCase();
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        }
    if (playerScore > compScore) {
        console.log("You have won! Final Score: " + playerScore + " - " + compScore)
    } else if (playerScore < compScore) {
        console.log("You have lost! Final Score: " + playerScore + " - " + compScore)
    } else if (playerScore === compScore) {
        console.log("It's a draw! Final Score: " + playerScore + " - " + compScore)
    }
}