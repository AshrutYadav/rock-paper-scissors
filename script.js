const resultText = document.getElementById("resultText");

const buttons = document.querySelectorAll(".btn")
const roundDisplay = document.getElementById("roundDisplay");
const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

const playerChoiceText = document.getElementById("playerChoiceText");
const computerChoiceText = document.getElementById("computerChoiceText");

const MAX_ROUNDS = 10;


let round = 1;
let playerChoice = null;
let computerChoice = null;
let playerScore = 0;
let computerScore = 0;
let roundPlayed = false;


buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.id === "nxtround") {
            startNextRound();
            return;
        }

        if (roundPlayed) return;

        playerChoice = Number(btn.dataset.choice)
        computerChoice = getComputerChoice()

        roundPlayed = true

        playerChoiceText.innerText = choiceToText(playerChoice);
        computerChoiceText.innerText = choiceToText(computerChoice);


        decideWinner(playerChoice, computerChoice)
    })
})


function startNextRound() {
    if (!roundPlayed) return;

    // GAME OVER CHECK
    if (round === MAX_ROUNDS) {
        declareFinalWinner();
        return;
    }

    // reset choices UI
    playerChoiceText.innerText = "-";
    computerChoiceText.innerText = "-";

    round++;
    roundPlayed = false;

    playerChoice = null;
    computerChoice = null;

    roundDisplay.innerText = `Round ${round}`;
}


function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1
}


function decideWinner(player, computer) {

    if (player === computer) return;

    if (
        (player === 1 && computer === 3) ||
        (player === 2 && computer === 1) ||
        (player === 3 && computer === 2)
    ) {
        playerScore++;
        playerScoreEl.innerText = playerScore;
    }

    else {
        computerScore++;
        computerScoreEl.innerText = computerScore;
    }
}


function choiceToText(choice) {
    if (choice === 1) return "ROCK";
    if (choice === 2) return "PAPER";
    if (choice === 3) return "SCISSOR";
}

function declareFinalWinner() {
    if (playerScore > computerScore) {
        resultText.innerText = "🎉 You Win the Game!";
    } 
    else if (computerScore > playerScore) {
        resultText.innerText = "💻 Computer Wins the Game!";
    } 
    else {
        resultText.innerText = "🤝 It's a Tie!";
    }

    roundPlayed = true;
}

