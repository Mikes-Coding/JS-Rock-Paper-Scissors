function getComputerChoice() {
    const options = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  getComputerChoice();
