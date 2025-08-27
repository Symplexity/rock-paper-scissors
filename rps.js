function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

let scoreText = document.getElementById("score");
let roundResultText = document.getElementById("roundResult");

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    scoreText.innerHTML = `Human: ${humanScore} - Computer: ${computerScore}`;
    roundResultText.innerHTML = "Click a selection to begin!";
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        roundResultText.innerHTML = "It's a tie! Both chose " + humanChoice;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        roundResultText.innerHTML = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
        scoreText.innerHTML = `Human: ${humanScore} - Computer: ${computerScore}`;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        roundResultText.innerHTML = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
        scoreText.innerHTML = `Human: ${humanScore} - Computer: ${computerScore}`;
    }

    if (humanScore === 5) {
        setTimeout(() => {
            alert("Congratulations! You won the game!");
            resetGame();
        }, 0);
    } else if (computerScore === 5) {
        setTimeout(() => {
            alert("Sorry, you lost the game.");
            resetGame();
        }, 0);
    }
}

let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");

resetGame();

rockButton.addEventListener("click", function () {
    playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
});
