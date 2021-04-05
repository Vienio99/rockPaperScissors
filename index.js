function computerPlay() {
    itemsList = ['Rock', 'Paper', 'Scissors']
    let randomIndex = Math.floor(Math.random() * itemsList.length);
    return itemsList[randomIndex];
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    playerScore = 0
    computerScore = 0

    if (playerSelection === computerSelection) {
        playerSelection = capitalizeFirstLetter(playerSelection)
        computerSelection = capitalizeFirstLetter(computerSelection)
        playerScore++
        computerScore++
        return playerSelection + "-" + computerSelection + ". " + "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "Paper beats Rock! You lose!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "Paper beats Rock! You win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "Scissors beats Paper! You lose!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "Scissors beats Paper! You win!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "Rock beats Scissors! You win!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "Rock beats Scissors! You lose!";
    }
}


function game(playerChoice) {
    player = 0
    computer = 0

    let playerSelection = playerChoice;
    let computerSelection = computerPlay()
    output = document.querySelector('.output-text')
    text = playRound(playerSelection, computerSelection)
    output.innerText = text
    player += playerScore;
    computer += computerScore;

    score = document.querySelector('.score')

    score.innerText = "You: " + player + " - " + "Computer: " + computer
    
    // if (player === computer) {
    //     console.log("It's a tie!")
    // } else if (player > computer) {
    //     console.log("You win!")
    // } else if (computer > player) {
    //     console.log("You lose!")
    // }
}

buttons = document.querySelectorAll('.choice')

buttons.forEach((choice) => {
    choice.addEventListener('click', () => {
        game(choice.innerText);
    })
})