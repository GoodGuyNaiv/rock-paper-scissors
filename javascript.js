function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

let userChoice = prompt("Enter choice ");
userChoice = userChoice.toLowerCase();
let computerSelection = getComputerChoice();

if (userChoice == "rock" && computerSelection == "paper") {
  console.log("Opponent chose paper , hence you lose");
} else if (userChoice == "rock" && computerSelection == "scissors") {
  console.log("Opponent chose scissors , hence you win");
} else if (userChoice == "rock" && computerSelection == "rock") {
  console.log("Opponent chose rock too , hence its a tie");
} else if (userChoice == "paper" && computerSelection == "paper") {
  console.log("Opponent chose paper too , hence its a tie");
} else if (userChoice == "paper" && computerSelection == "rock") {
  console.log("Opponent chose rock , hence you win");
} else if (userChoice == "paper" && computerSelection == "scissors") {
  console.log("Opponent chose scissors , hence you lose");
} else if (userChoice == "scissors" && computerSelection == "paper") {
  console.log("Opponent chose paper , hence you win");
} else if (userChoice == "scissors" && computerSelection == "rock") {
  console.log("Opponent chose rock , hence you lose");
} else if (userChoice == "scissors" && computerSelection == "scissors") {
  console.log("Opponent chose scissors too , hence its a tie");
} else {
  console.log("invalid input");
}
