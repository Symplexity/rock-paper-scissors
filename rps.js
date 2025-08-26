function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors:");
    return choice;
}

// console.log(getComputerChoice());
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
}

for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

if (humanScore === computerScore) {
    console.log("The score was tied at " + humanScore + " to " + computerScore);
} else if (humanScore > computerScore) {
    console.log("You won the game! Final score: " + humanScore + " to " + computerScore);
} else {
    console.log("You lost the game! Final score: " + computerScore + " to " + humanScore);
}
