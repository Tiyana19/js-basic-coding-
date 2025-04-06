            // ROCK, PAPER and SCISSORS Game

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }else {
        console.log('Error! Please type the correct value.');
    }
}

const getComputerChoice = () => {
    let randomChoiceIndex = Math.floor(Math.random() * 3);
    if(randomChoiceIndex === 0){
        return 'rock';
    }else if(randomChoiceIndex === 1) {
        return 'paper';
    }else {
        return 'scissors';
    }
}

const determineWinner = function(userChoice, computerChoice) {
    if(userChoice === computerChoice){
        return 'Game is Tie!';
    }else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Computer Wins!';
        }else {
            return 'User Wins!';
        }
    }else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Computer Wins!';
        }else {
            return 'User Wins!';
        }
    }else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            return 'Computer Wins!';
        }else {
            return 'User Wins!';
        }
    } else {
        return "Invalid Input!";
    }
}

const playGame = function() {
    let userChoice = getUserChoice('paper');
    let computerChoice = getComputerChoice();
    // console.log(userChoice);
    // console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();


