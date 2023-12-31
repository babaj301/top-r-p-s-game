//Add event listener for buttons
// Bring in buttons as dom objects

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const displayResult = document.querySelector(".result");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

// Write Function to get the computer choice
// It randomly returns either rock, paper or scissors

// 1.Generate random number between 1 and 3 and save in a variable

// 2.write an empty string variable to save the value we get

// 3. write if statements to print the appropriate string depending on the range of the number printed

// 4. Save the printed string into the variable

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 4);
  let move = "";
  if (randomNum >= 0 && randomNum <= 1) {
    move = "rock";
  } else if (randomNum > 1 && randomNum <= 2) {
    move = "paper";
  } else {
    move = "scissors";
  }
  return move;
}

// Write function that plays a round of the game
// It should take the parameters playerSelection and computerSelection
// 3. In order to get case insensitive input, capitalize the playerSelection value

//  Write a variable to store the result for returning

// 4. Write an if else statement for each iteration of the game depending on computer move

// 5. First for rock computer
// 5a. if  player is rock- Tie
// 5b. if player is scissors- PLayerLose
// 5c. if player is paper- PlayerWin

// 6. Second for paper computer
// 6a. if  player is rock- PlayerLose
// 6b. if player is scissors- PlayerWin
// 6c. if player is paper- Tie

// 7. Third for scissors computer
// 7a. if  player is rock- PlayerWin
// 7b. if player is scissors- Tie
// 7c. if player is paper- PlayerLose
let compWin = 0;
let playerWin = 0;

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  let result = "";

  // Making the playerSelection Variable Case insensitive
  // Setting the value for the parameters
  playerSelection = this.innerText;
  // computerSelection = getComputerChoice();
  const playerOriginal = String(playerSelection);
  let playerMove = playerOriginal.toLowerCase();

  if (computerSelection === "rock") {
    if (playerMove === "rock") {
      result = `Tie`;
    } else if (playerMove === "scissors") {
      result = `You lose!,Rock beats Scissors`;
      compWin++;
    } else if (playerMove === "paper") {
      result = `You Win!,Paper beats Rock`;
      playerWin++;
    }
  }

  if (computerSelection === "paper") {
    if (playerMove === "paper") {
      result = `Tie`;
    } else if (playerMove === "rock") {
      result = `You lose!,Paper beats Rock`;
      compWin++;
    } else if (playerMove === "scissors") {
      result = `You Win!,Scissors beats Paper`;
      playerWin++;
    }
  }

  if (computerSelection === "scissors") {
    if (playerMove === "scissors") {
      result = `Tie`;
    } else if (playerMove === "paper") {
      result = `You lose!,Scissors beats Paper,`;
      compWin++;
    } else if (playerMove === "rock") {
      result = `You Win!,Rock beats Scissors`;
      playerWin++;
    }
  }

  if (compWin < 5 && playerWin < 5) {
    displayResult.innerText = `Computer has ${compWin} Wins, Player has ${playerWin} Wins.`;
    displayResult.classList.remove("toggle");
  } else if (compWin > 4) {
    displayResult.innerText = `Computer Wins`;
    displayResult.classList.add("toggle");
    playerWin = 0;
    compWin = 0;
  } else if (playerWin > 4) {
    displayResult.innerText = `Player Wins`;
    displayResult.classList.add("toggle");
    playerWin = 0;
    compWin = 0;
  }

  return result;
}
