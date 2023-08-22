const user_display_container = document.querySelector(".user-choice")
const computer_display_container = document.querySelector(".computer-choice")
const result_container = document.querySelector(".result")

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


let userChoice;
const weapons = document.querySelectorAll(".item");
console.log(weapons);
weapons.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(e.target.id);
    userChoice = e.target.id;
    let computerSelection = getComputerChoice();
    play(userChoice,computerSelection)
  });

});
function play(userChoice, computerSelection) {
  if (userChoice == "rock" && computerSelection == "paper") {
    user_display_container.textContent= "You choose " + userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "You Lose"
  } else if (userChoice == "rock" && computerSelection == "scissors") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "You win"
    
  } else if (userChoice == "rock" && computerSelection == "rock") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "Tie"
    console.log("Opponent chose rock too , hence its a tie");
  } else if (userChoice == "paper" && computerSelection == "paper") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "Tie"
    console.log("Opponent chose paper too , hence its a tie");
  } else if (userChoice == "paper" && computerSelection == "rock") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "You Win"
    console.log("Opponent chose rock , hence you win");
  } else if (userChoice == "paper" && computerSelection == "scissors") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "You Lose"
    console.log("Opponent chose scissors , hence you lose");
  } else if (userChoice == "scissors" && computerSelection == "paper") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "You Win"
    console.log("Opponent chose paper , hence you win");
  } else if (userChoice == "scissors" && computerSelection == "rock") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "You Lose"
    console.log("Opponent chose rock , hence you lose");
  } else if (userChoice == "scissors" && computerSelection == "scissors") {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    result_container.textContent = "Tie"
    console.log("Opponent chose scissors too , hence its a tie");
  } else {
    user_display_container.textContent= userChoice;
    computer_display_container.textContent= computerSelection;
    
    console.log("invalid input");
  }
}
