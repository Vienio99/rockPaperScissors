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
    playerScore = 0
    computerScore = 0

    if (playerSelection === computerSelection) {
        playerSelection = capitalizeFirstLetter(playerSelection)
        computerSelection = capitalizeFirstLetter(computerSelection)
        playerScore++
        computerScore++
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
    player += playerScore;
    computer += computerScore;

    score = document.querySelector('.score')
    score.innerText = "You: " + player + " - " + "Computer: " + computer;

    if (player === 5 | computer === 5) {
        if (player === computer) {
            output.innerText = "It's a tie!"
            player = 0;
            computer = 0;
            output.innerText = '';
            score.innerText = "You: " + player + " - " + "Computer: " + computer;
        } else if (player > computer) {
            output.innerText = "You win!";
            player = 0;
            computer = 0;
            output.innerText = '';
            score.innerText = "You: " + player + " - " + "Computer: " + computer;
        } else if (computer > player) {
            output.innerText = "You lose!";
            player = 0;
            computer = 0;
            output.innerText = '';
            score.innerText = "You: " + player + " - " + "Computer: " + computer;
        }
    }
}

buttons = document.querySelectorAll('.choice')
buttons.forEach((choice) => {
    choice.addEventListener('click', () => {
        game(choice.innerText);
    })
})


player = 0
computer = 0

