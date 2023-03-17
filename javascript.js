const playerSelection = prompt("Pick rock, paper or scissors");
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        return "Player 1 wins!";
      } else {
        return "Player 2 wins!";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "Player 1 wins!";
      } else {
        return "Player 2 wins!";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "paper") {
        return "Player 1 wins!";
      } else {
        return "Player 2 wins!";
      }
    } else {
      return "Invalid input. Please enter 'rock', 'paper', or 'scissors'.";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Pick rock, paper or scissors");
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result === "Player 1 wins!") {
        playerScore++;
      } else if (result === "Player 2 wins!") {
        computerScore++;
      }
    }
  
    console.log("Final score:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
  
    return { player: playerScore, computer: computerScore };
  }
  
  game();
  