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

function playRound(playerSelection, computerSelection) {
  let result = "";
  // Making the playerSelection Variable Case insensitive
  const playerOriginal = String(playerSelection);
  let playerMove = playerOriginal.toLowerCase();

  if (computerSelection === "rock") {
    if (playerMove === "rock") {
      result = `Tie`;
    } else if (playerMove === "scissors") {
      result = `You lose!`;
    } else if (playerMove === "paper") {
      result = `You Win!`;
    }
  }

  if (computerSelection === "paper") {
    if (playerMove === "paper") {
      result = `Tie`;
    } else if (playerMove === "rock") {
      result = `You lose!`;
    } else if (playerMove === "scissors") {
      result = `You Win!`;
    }
  }

  if (computerSelection === "scissors") {
    if (playerMove === "scissors") {
      result = `Tie`;
    } else if (playerMove === "paper") {
      result = `You lose!`;
    } else if (playerMove === "rock") {
      result = `You Win!`;
    }
  }

  return result;
}

console.log(playRound("Rock", getComputerChoice()));

// Write a function to play game
// create two variables to keep the scores of the player and the computer
// Compare the two scores and store which is bigger in overallWinner variable
// return the overallWinner as a string

function game() {
  const input = prompt(`What's your guess`);
  let playerWIn = 0;
  let compWin = 0;
  let overallWInner = "";
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(input, getComputerChoice()));
  }
}

game();
