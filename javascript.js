const scissorButton = document.getElementById("scissorButton");
const paperButton = document.getElementById("paperButton");
const rockButton = document.getElementById("rockButton");

const pageresultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let playerSelection;
const tally = document.getElementById("tally");

let playerScore = 0;
let computerScore = 0;

scissorButton.addEventListener("click", function() {
  playerSelection = scissorButton.value;
  const computerSelection = getComputerChoice();
  /* playRound(playerSelection, computerSelection); */
  game();
  updateScore();
});

paperButton.addEventListener("click", function() {
  playerSelection = paperButton.value;
  const computerSelection = getComputerChoice();
  game();
  updateScore();
});

rockButton.addEventListener("click", function() {
  playerSelection = rockButton.value;
  const computerSelection = getComputerChoice();
  game();
  updateScore();
});

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      pageresultElement.innerHTML = "It's a tie!";
    } else if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        pageresultElement.innerHTML = "You win! Rock beats scissors.";
        playerScore++;
      } else {
        pageresultElement.innerHTML = "You lose! Paper beats rock.";
        computerScore++;
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        pageresultElement.innerHTML = "You win! Paper beats rock.";
        playerScore++;
      } else {
        pageresultElement.innerHTML = "You lose! Scissors beats paper.";
        computerScore++;
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        pageresultElement.innerHTML = "You win! Scissors beats paper.";
        playerScore++;
      } else {
        pageresultElement.innerHTML = "You lose! Rock beats scissors.";
        computerScore++;
      }
    } else {
      pageresultElement.innerHTML = "Invalid input. Please enter 'rock', 'paper', or 'scissors'.";
    }
  }
  
  function updateScore() {
    scoreElement.innerHTML = "Player: " + playerScore + " Computer: " + computerScore;
  }

  function game() {
    let winner = "";
    for (let i = 0; i < 1; i++) { // play only one round
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      if (result === "player") {
        playerScore++;
        winner = "Player 1";
      } else if (result === "computer") {
        computerScore++;
        winner = "Player 2";
      } else {
        winner = "Tie";
      }
  
      tally.innerHTML = "Player 1: " + playerScore + " | Player 2: " + computerScore;
  
      if (playerScore === 5 || computerScore === 5) { // check for winner
        if (playerScore === 5) {
          pageresultElement.innerHTML = "Player 1 wins!";
        } else {
          pageresultElement.innerHTML = "Player 2 wins!";
        }
  
        setTimeout(function() { // reset scores after a delay of 3 seconds
          playerScore = 0;
          computerScore = 0;
          tally.innerHTML = "Player 1: " + playerScore + " | Player 2: " + computerScore;
          pageresultElement.innerHTML = "";
        }, 3000);
  
        break; // exit the loop if there is a winner
      }
    }
  }
  
  
  
  
  
  
  
  