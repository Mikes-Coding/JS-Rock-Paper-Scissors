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
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  
  console.log(playRound(playerSelection, computerSelection));