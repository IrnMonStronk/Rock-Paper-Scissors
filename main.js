// Implementing variables to count and show the score
let humanScore = 0;
let computerScore = 0;
let roundResult;

// Showing the winner of the round in the middle of the page
const showRound = document.querySelector('#currentRound');
const showCurrentRound = document.createElement('div');
showRound.appendChild(showCurrentRound);

// Showing the score at the bottom of the page
const scoreBoard = document.querySelector('#scoring');
const compScore = document.createElement('div');
scoreBoard.appendChild(compScore);
const humScore = document.createElement('div');
scoreBoard.appendChild(humScore);

// Implementing the possible choices in an array
const choices = ['rock', 'paper', 'scissors'];
    
// Function for the computer turn using a random number
function computerPlay() {
    let randomChoice = Math.floor(Math.random()* choices.length);
    return choices[randomChoice];
}

// Function that is going through the different possible plays
function playOneRound(computer, human) {
    
    if ( computer === human ) {
        roundResult = 'It`s a tie, no one wins this round! Continue!';
        showCurrentRound.innerText = roundResult;
        return roundResult;
    }
    else if ( computer === 'rock' ) {
        if ( human === 'scissors' ) {
            computerScore++;
            compScore.innerText = `Computer : ${computerScore}`;
            roundResult = 'Computer wins the round! Rock beats scissors!';
            showCurrentRound.innerText = roundResult;
            return roundResult;
        } else if ( human === 'paper' ) {
            humanScore++;
            humScore.innerText = `Human : ${humanScore}`;
            roundResult = 'Human wins the round! Paper beats rock!';
            showCurrentRound.innerText = roundResult;
            return roundResult;
        }
    }
    else if ( computer === 'paper' ) {
        if ( human === 'rock' ) {
            computerScore++;
            compScore.innerText = `Computer : ${computerScore}`;
            roundResult = 'Computer wins the round! Paper beats rock!';
            showCurrentRound.innerText = roundResult;
            return roundResult;
        } else if ( human === 'scissors' ){
            humanScore++;
            humScore.innerText = `Human : ${humanScore}`;
            roundResult = 'Human wins the round! Scissors beats paper!';
            showCurrentRound.innerText = roundResult;
            return roundResult;
        }
    }
    else if ( computer === 'scissors') {
        if ( human === 'paper' ) {
            computerScore++;
            compScore.innerText = `Computer : ${computerScore}`;
            roundResult = 'Computer wins the round! Scissors beats paper!';
            showCurrentRound.innerText = roundResult;
            return roundResult;
        } else if ( human === 'rock' ){
            humanScore++;
            humScore.innerText = `Human : ${humanScore}`;
            roundResult = 'Human wins the round! Rock beats scissors!';
            showCurrentRound.innerText = roundResult;
            return roundResult;
        }
    }
}

// A function that is going to refresh the page when the user type Y in the prompt
function reload() {
    const askUser = prompt('Would you like to restart the game? Type "y" to reload').toLocaleLowerCase();
    if ( askUser === 'y' ) {
        window.location.reload();
    } else { 
        throw "The game was ended by the user.";
    }
}

// Making the buttons interactive and deciding how the program proceeds depending on the score
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if ( ( computerScore < 5 ) && ( humanScore < 5 ) ) {
            playOneRound(computerPlay(), button.id);
        } else if ( computerScore === 5 ) {
            // The final score will be shown and after 5 sec the user can chose to reload the game
            showCurrentRound.innerText = 'The robots won! Humanity is doomed! Run for your lives!';
            setTimeout(reload, 5000);
        } else if ( humanScore === 5 ) {
            // The final score will be shown and after 5 sec the user can chose to reload the game
            showCurrentRound.innerText = 'Human won! Humanity is saved! All go back to your lives!';
            setTimeout(reload, 5000);
        }
    })
})




    //          (;..;)