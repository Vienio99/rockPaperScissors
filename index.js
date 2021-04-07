function computerPlay() {
    itemsList = ['Charmander', 'Squirtle', 'Bulbasaur']
    let randomIndex = Math.floor(Math.random() * itemsList.length);
    return itemsList[randomIndex];
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()


    if (playerSelection === computerSelection) {
        playerSelection = capitalizeFirstLetter(playerSelection)
        computerSelection = capitalizeFirstLetter(computerSelection)
        return playerSelection + "-" + computerSelection + ". " + "It's a tie!";
    } else if (playerSelection === "charmander" && computerSelection === "squirtle") {
        computerScore++
        return "Squirtle beats Charmander! You lose!";
    } else if (playerSelection === "squirtle" && computerSelection === "charmander") {
        playerScore++
        return "Squirtle beats Charmander! You win!";
    } else if (playerSelection === "squirtle" && computerSelection === "bulbasaur") {
        computerScore++
        return "Bulbasaur beats Squirtle! You lose!";
    } else if (playerSelection === "bulbasaur" && computerSelection === "squirtle") {
        playerScore++
        return "Bulbasaur beats Squirtle! You win!";
    } else if (playerSelection === "charmander" && computerSelection === "bulbasaur") {
        playerScore++
        return "Charmander beats Bulbasaur! You win!";
    } else if (playerSelection === "bulbasaur" && computerSelection === "charmander") {
        computerScore++
        return "Charmander beats Bulbasaur! You lose!";
    }
}


function game(playerChoice) {

    let playerSelection = playerChoice;
    let computerSelection = computerPlay()
    
    output = document.querySelector('.output-text')
    text = playRound(playerSelection, computerSelection)
    output.innerText = text

    score = document.querySelector('.score')
    score.innerText = "You: " + playerScore + " - " + "Computer: " + computerScore;
    output.style.color = "";
    
    if (playerScore === 5 | computerScore === 5) {
        if (playerScore > computerScore) {
            output.innerText = "You win!";
            output.style.color = "green";
            score.innerText = '';
            playerScore = 0;
            computerScore = 0;
            confetti({
                particleCount: 500,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 500,
                origin: { x: 1 }
            });
        } else if (computerScore > playerScore) {
            output.innerText = "You lose!";
            output.style.color = "red";
            score.innerText = '';
            playerScore = 0;
            computerScore = 0;
        }
    }
}

buttons = document.querySelectorAll('.choice')
buttons.forEach((choice) => {
    choice.addEventListener('click', () => {
        game(choice.innerText);
    })
})


playerScore = 0
computerScore = 0

