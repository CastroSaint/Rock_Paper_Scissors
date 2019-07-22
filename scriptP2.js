// global variables

let round = 1;
let playerScore = 0;
let compScore = 0;

// update player score

const updatePlayerScore = function () {
    playerScore++;
    player.innerHTML = `Player: <b>${playerScore}</b>`;
}

// update computer score

const updateCompScore = function () {
    compScore++;
    computer.innerHTML = `Computer: <b>${compScore}</b>`;
}

// update round

const updateRound = function () {
    round++;
    currentRound.innerHTML = `Round <b>${round}</b>`;
}

// reset score

const resetScore = function () {
    playerScore = 0;
    compScore = 0;
}

// reset round

const resetRound = function () {
    round = 0;
}

// computer takes a turn

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

// plays a round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateRound();
        return outcome.innerHTML = 'It\'s a draw! Nobody wins this round.'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        updatePlayerScore();
        updateRound();
        return outcome.innerHTML = `${playerSelection} beats ${computerSelection}! You win this round!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        updatePlayerScore();
        updateRound();
        return outcome.innerHTML = `${playerSelection} beats ${computerSelection}! You win this round!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        updatePlayerScore();
        updateRound();
        return outcome.innerHTML = `${playerSelection} beats ${computerSelection}! You win this round!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        updateCompScore();
        updateRound();
        return outcome.innerHTML = `${computerSelection} beats ${playerSelection}! You lose this round!`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        updateCompScore();
        updateRound();
        return outcome.innerHTML = `${computerSelection} beats ${playerSelection}! You lose this round!`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        updateCompScore();
        updateRound();
        return outcome.innerHTML = `${computerSelection} beats ${playerSelection}! You lose this round!`;
    }

    scoreCheck(playerScore, compScore);
}

// checks to see if a score of five has been reached

const scoreCheck = function (playerScore, compScore) {
    if (playerScore === 5 || compScore === 5) {
        resetGame();
    } else {
        return;
    }
}

// resets game

const resetGame = function () {
    if (playerScore === 5) {
        return outcome.innerHTML = 'Congratulations, you have won! Press Reset to play again!';
    } else if (compScore === 5) {
        return outcome.innerHTML = 'Unlucky, you lose! Press Reset to play again!';
    }
    buttons.removeChild(rockButton);
    buttons.removeChild(paperButton);
    buttons.removeChild(scissorsButton);
    buttons.appendChild(resetButton);
}

/*


 -------------------- DOM script seperator --------------------


*/

const buttons = document.querySelector('.buttons');

const results = document.querySelector('#results');

const showRound = document.querySelector('#round');

const outcomeText = document.querySelector('#outcome');

const player = document.createElement('p');
player.innerHTML = `Player: <b>${playerScore}</b>`;
player.id = 'playerscore';

const computer = document.createElement('p');
computer.innerHTML = `Computer: <b>${compScore}</b>`;
computer.id = 'compscore';

const rockButton = document.createElement('button');
rockButton.innerHTML = '👊';
rockButton.id = 'rockbutton';

const paperButton = document.createElement('button');
paperButton.innerHTML = '✋';
paperButton.id = 'paperbutton';

const scissorsButton = document.createElement('button');
scissorsButton.innerHTML = '✌️';
scissorsButton.id = 'scissorsbutton';

const currentRound = document.createElement('h2');
currentRound.innerHTML = `Round <b>${round}</b>`;
currentRound.id = 'currentround';

const outcome = document.createElement('p');
outcome.id = 'outcome';

const newGame = document.querySelector('#newgame');

newGame.addEventListener('click', function(e){ 
    buttons.appendChild(rockButton);
    buttons.appendChild(paperButton);
    buttons.appendChild(scissorsButton);
    results.appendChild(player);
    results.appendChild(computer);
    showRound.appendChild(currentRound);
    buttons.removeChild(newGame);
});

const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset game?';
resetButton.id = 'resetbutton';

resetButton.addEventListener('click', function(e){
    resetScore();
    resetRound();
    buttons.appendChild(rockButton);
    buttons.appendChild(paperButton);
    buttons.appendChild(scissorsButton);
    buttons.removeChild(resetButton);
});

rockButton.addEventListener('click', function(e){
    playRound('rock', computerPlay());
    outcomeText.appendChild(outcome);
});

paperButton.addEventListener('click', function(e){
    playRound('paper', computerPlay());
    outcomeText.appendChild(outcome);
});

scissorsButton.addEventListener('click', function(e){
    playRound('scissors', computerPlay());
    outcomeText.appendChild(outcome);
});