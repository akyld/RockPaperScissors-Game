const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
    const rpsChoice = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return rpsChoice[randomChoice];
}


function getResult(playerChoice, computerChoice) {

    
    let score = 0;
    let compScore = 0;
    if (playerChoice == computerChoice) {
        score = 0;
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        score = 1;

    }  else if (playerChoice == "Paper" && computerChoice == "Rock") {
        score = 1;
    
    }  else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        score = 1;
    
    }  else {
        compScore = 1;
    }

    return {score, compScore};
}


function showResult(score, playerChoice, computerChoice) {

    const resultDiv = document.getElementById("result");
    const handsDiv = document.getElementById("hands");
    const playerScoreDiv = document.getElementById("player-score");

    if (score == -1) {
        resultDiv.innerText = "You Lose!"
    } else if (score == 0) {
        resultDiv.innerText = "It's a tie!"
    } else{
        resultDiv.innerText = "You Won!"
    }
    let playerEmoji = String.fromCodePoint(0x1F9D2);
    let computerEmoji = String.fromCodePoint(0x1F5A5);
    handsDiv.innerText = `${playerEmoji} ${playerChoice} vs ${computerEmoji} ${computerChoice}`;
    playerScoreDiv.innerText = `Your Score:${totalScore["playerScore"]}`;


}


function onClickRPS(playerChoice) {
    console.log({playerChoice});
    const computerChoice = getComputerChoice();
    console.log({computerChoice});
    const score = getResult(playerChoice,computerChoice).score;
    const computerScore = getResult(playerChoice, computerChoice).compScore;
    totalScore["playerScore"] += score;
    totalScore["computerScore"] += computerScore;
    console.log({score});
    console.log({computerScore});
    console.log({totalScore});
    showResult(score, playerChoice, computerChoice);
}


function playGame() {

    const rpsButtons = document.querySelectorAll(".rpsButton");

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value);
    })

    const endGameButton = document.getElementById("endGameButton");
    endGameButton.onclick = () => endGame(totalScore);
}

function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

    const resultDiv = document.getElementById("result");
    const handsDiv = document.getElementById("hands");
    const playerScoreDiv = document.getElementById("player-score");

    resultDiv.innerText = "";
    handsDiv.innerText = "";
    playerScoreDiv.innerText = "";
}

playGame();