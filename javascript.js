function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let userChoice = prompt("Enter choice ");
userChoice = userChoice.toLowerCase();
let computerSelection = getComputerChoice();

if (userChoice == "rock" && computerSelection == "paper") {
  console.log("you lose");
} else if (userChoice == "rock" && computerSelection == "scissors") {
  console.log("you lose");
} else if (userChoice == "rock" && computerSelection == "rock") {
  console.log("you lose");
} else if (userChoice == "paper" && computerSelection == "paper") {
  console.log("you lose");
} else if (userChoice == "paper" && computerSelection == "rock") {
  console.log("you lose");
} else if (userChoice == "paper" && computerSelection == "scissors") {
  console.log("you lose");
} else if (userChoice == "scissors" && computerSelection == "paper") {
  console.log("you lose");
} else if (userChoice == "scissors" && computerSelection == "rock") {
  console.log("you lose");
} else if (userChoice == "credfscissors" && computerSelection == "scissors") {
  console.log("you lose");
} else {
  console.log("invalid input");
}
