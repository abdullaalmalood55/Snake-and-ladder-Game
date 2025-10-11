const Player = document.querySelectorAll(".player")
const Square = document.querySelectorAll(".square")
const scoreValue = document.querySelectorAll(".column")
const Dice = document.querySelector(".diceButton")
const diceValue = document.querySelector(".diceValue")
const Message = document.querySelector(".gameMessage")
const Rematch = document.querySelector(".playAgain")
const Reset = document.querySelector(".reset")
let playerPosition = [0, 0, 0, 0]
let scoreContainer = [0, 0, 0, 0]
let currentPlayer = 0
const totalPlayers = Player.length
//This function sets the players on square number 1 of gameboard
const setPosition = () => {
  Player.forEach((players, index) => {
    Square[0].appendChild(players)
    playerPosition[index] = 0
  })
}
// Function to update the score each time a player wins
const updateScore = (accumulator) => {
  scoreContainer.forEach((square, index) => {
    scoreValue[index] = scoreContainer[index[accumulator]]
    accumulator++
  })
}
//
const RollTheDice = () => {
  //Roll contains random values between 1 and 6
  const roll = Math.floor(Math.random() * 6) + 1
  //diceValue displays the value of roll in its container
  diceValue.innerText = roll
  let index = currentPlayer
  let positionSteps = playerPosition[index]
  let newPos = playerPosition[index] + roll
  if (newPos > 99) {
    newPos = playerPosition[index]
    Message.innerText = ""
  }

  //Runs a timer
  const delay = setInterval(() => {
    positionSteps++
    playerPosition[index] = positionSteps
    Square[positionSteps].appendChild(Player[index])
    if (positionSteps >= newPos) {
      //Cancel the timer
      clearInterval(delay)

      //Snakes
      if (playerPosition[index] === 15) {
        playerposition[index] = 5
      } else if (playerPosition[index] === 52) {
        playerPosition[index] = 33
      } else if (playerPosition[index] === 61) {
        playerPosition[index] = 18
      } else if (playerPosition[index] === 73) {
        playerPosition[index] = 30
      } else if (playerPosition[index] === 86) {
        playerPosition[index] = 23
      } else if (playerPosition[index] === 97) {
        playerPosition[index] = 99
      }

      //Ladders
      else if (playerPosition[index] === 3) {
        playerPosition[index] = 13
      } else if (playerPosition[index] === 8) {
        playerPosition[index] = 30
      } else if (playerPosition[index] === 19) {
        playerPosition[index] = 37
      } else if (playerPosition[index] === 27) {
        playerPosition[index] = 83
      } else if (playerPosition[index] === 35) {
        playerPosition[index] = 43
      } else if (playerPosition[index] === 39) {
        playerPosition[index] = 41
      } else if (playerPosition[index] === 50) {
        playerPosition[index] = 66
      } else if (playerPosition[index] === 70) {
        playerPosition[index] = 90
      } else if (playerPosition[index] === 79) {
        playerPosition[index] = 99
      }
      /* All players positions are stored in the
      appropriate index of playerPosition array
      and displayed in the square board
      */
      Square[playerPosition[index]].appendChild(Player[index])

      // check winner
      if (playerPosition[index] === 99) {
        let accumulator = 0
        /* Invoke updateScore and pass the accumulator
        variable as a parameter */
        updateScore(accumulator)
        Message.innerText = `We have an winner `
        scoreContainer[index] += accumulator + 1
        scoreValue[index].innerText = scoreContainer[index]
        accumulator++
        Dice.disabled = true
        Rematch.disabled = false
        Reset.disabled = false
        rematchFunction()
        resetFunction()
      } else if (playerPosition[index] != 99 && playerPosition[index] != 0) {
        Rematch.disabled = true
        Reset.disabled = true
      }
      // show message

      if (index === 0 && roll != 6) {
        Message.innerText = `Yellow rolled ${roll} and moved to ${
          playerPosition[index] + 1
        }`
      } else if (index === 0 && roll === 6) {
        Message.innerText = `Yellow rolled ${roll} and moved to ${
          playerPosition[index] + 1
        } and got another chance`
      } else if (index === 1 && roll != 6) {
        Message.innerText = `Green rolled ${roll} and moved to ${
          playerPosition[index] + 1
        }`
      } else if (index === 1 && roll === 6) {
        Message.innerText = `Green rolled ${roll} and moved to ${
          playerPosition[index] + 1
        } and got another chance`
        return
      } else if (index === 2 && roll != 6) {
        Message.innerText = `Blue rolled ${roll} and moved to ${
          playerPosition[index] + 1
        }`
      } else if (index === 2 && roll === 6) {
        Message.innerText = `Blue rolled ${roll} and moved to ${
          playerPosition[index] + 1
        } and got another chance`
        return
      } else if (index === 3 && roll != 6) {
        Message.innerText = `Brown rolled ${roll} and moved to ${
          playerPosition[index] + 1
        }`
      } else if (index === 3 && roll === 6) {
        Message.innerText = `Brown rolled ${roll} and moved to ${
          playerPosition[index] + 1
        } and got another chance`
        return
      }
      currentPlayer++
      if (currentPlayer >= totalPlayers) {
        currentPlayer = 0
      }
    }
  }, 300)
}

Dice.addEventListener("click", RollTheDice)
//Function to initiate the game
const gameInit = () => {
  setPosition()
  Message.innerText = ""
  Rematch.disabled = true
  Reset.disabled = true
}
gameInit()
const rematchFunction = () => {
  Rematch.addEventListener("click", () => {
    setPosition()
    Dice.disabled = false
    diceValue.innerText = ""
    Message.innerText = ""
  })
}

const resetFunction = () => {
  Reset.addEventListener("click", () => {
    currentPlayer = 0
    setPosition()
    scoreValue[0].innerText = ""
    scoreValue[1].innerText = ""
    scoreValue[2].innerText = ""
    scoreValue[3].innerText = ""
    Dice.disabled = false
    diceValue.innerText = ""
    Message.innerText = ""
  })
}
