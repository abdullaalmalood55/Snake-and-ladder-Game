const players = document.querySelectorAll(".player")
const squares = document.querySelectorAll(".square")
const winnerMessage = document.querySelector(".winner-message")
const winScore = document.querySelectorAll(".column")
const Dice = document.querySelector(".dice")
const diceValue = document.querySelector(".dice-value")
const playersMessage = document.querySelector(".players-message")
const playAgain = document.querySelector(".playAgain")
const reset = document.querySelector(".reset")
let playerposition = [0, 0, 0, 0]
let scoreContainer = [0, 0, 0, 0]
let currentPlayer = 0
const totalPlayers = players.length

//This function sets the players on square number 1 of gameboard
const setPosition = () => {
  players.forEach((player, index) => {
    squares[0].appendChild(player)
    playerposition[index] = 0
  })
}

const updateScore = (accumulator) => {
  scoreContainer.forEach((square, index) => {
    winScore[index] = scoreContainer[index[accumulator]]
    accumulator++
  })
}

const RollTheDice = () => {
  const roll = Math.floor(Math.random() * 6) + 1
  diceValue.innerText = roll
  let index = currentPlayer

  let positionSteps = playerposition[index]
  let newPos = playerposition[index] + roll
  if (newPos > 99) {
    newPos = playerposition[index]
    playersMessage.innerText = ""
  }

  //playerposition[index] = newPos
  const delay = setInterval(() => {
    positionSteps++
    playerposition[index] = positionSteps
    squares[positionSteps].appendChild(players[index])
    if (positionSteps >= newPos) {
      clearInterval(delay)

      //snakes
      if (playerposition[index] === 15) {
        playerposition[index] = 5
      } else if (playerposition[index] === 52) {
        playerposition[index] = 33
      } else if (playerposition[index] === 61) {
        playerposition[index] = 18
      } else if (playerposition[index] === 73) {
        playerposition[index] = 30
      } else if (playerposition[index] === 86) {
        playerposition[index] = 23
      } else if (playerposition[index] === 97) {
        playerposition[index] = 99
      }
      //Ladders
      else if (playerposition[index] === 3) {
        playerposition[index] = 13
      } else if (playerposition[index] === 8) {
        playerposition[index] = 30
      } else if (playerposition[index] === 19) {
        playerposition[index] = 37
      } else if (playerposition[index] === 27) {
        playerposition[index] = 83
      } else if (playerposition[index] === 35) {
        playerposition[index] = 43
      } else if (playerposition[index] === 39) {
        playerposition[index] = 41
      } else if (playerposition[index] === 50) {
        playerposition[index] = 66
      } else if (playerposition[index] === 70) {
        playerposition[index] = 90
      } else if (playerposition[index] === 79) {
        playerposition[index] = 99
      }

      squares[playerposition[index]].appendChild(players[index])

      // check winner
      if (playerposition[index] === 99) {
        let accumulator = 0
        updateScore(accumulator)
        playersMessage.innerText = `We have an winner `
        scoreContainer[index] += accumulator + 1
        winScore[index].innerText = scoreContainer[index]
        accumulator++
        Dice.disabled = true
        playAgain.disabled = false
        reset.disabled = false
        playAgainfunction()
        resetfunction()
      } else if (playerposition[index] != 99 && playerposition[index] != 0) {
        playAgain.disabled = true
        reset.disabled = true
      }
      // show message

      if (index === 0 && roll != 6) {
        playersMessage.innerText = `Yellow rolled ${roll} and moved to ${
          playerposition[index] + 1
        }`
      } else if (index === 0 && roll === 6) {
        playersMessage.innerText = `Yellow rolled ${roll} and moved to ${
          playerposition[index] + 1
        } and got another chance`
      } else if (index === 1 && roll != 6) {
        playersMessage.innerText = `Green rolled ${roll} and moved to ${
          playerposition[index] + 1
        }`
      } else if (index === 1 && roll === 6) {
        playersMessage.innerText = `Green rolled ${roll} and moved to ${
          playerposition[index] + 1
        } and got another chance`
        return
      } else if (index === 2 && roll != 6) {
        playersMessage.innerText = `Blue rolled ${roll} and moved to ${
          playerposition[index] + 1
        }`
      } else if (index === 2 && roll === 6) {
        playersMessage.innerText = `Blue rolled ${roll} and moved to ${
          playerposition[index] + 1
        } and got another chance`
        return
      } else if (index === 3 && roll != 6) {
        playersMessage.innerText = `Brown rolled ${roll} and moved to ${
          playerposition[index] + 1
        }`
      } else if (index === 3 && roll === 6) {
        playersMessage.innerText = `Brown rolled ${roll} and moved to ${
          playerposition[index] + 1
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
const gameInit = () => {
  setPosition()
  playersMessage.innerText = ""
  playAgain.disabled = true
  reset.disabled = true
}

gameInit()

const playAgainfunction = () => {
  playAgain.addEventListener("click", () => {
    setPosition()
    Dice.disabled = false
    diceValue.innerText = ""
    playersMessage.innerText = ""
  })
}

const resetfunction = () => {
  reset.addEventListener("click", () => {
    currentPlayer = 0
    setPosition()
    winScore[0].innerText = ""
    winScore[1].innerText = ""
    winScore[2].innerText = ""
    winScore[3].innerText = ""
    Dice.disabled = false
    diceValue.innerText = ""
    playersMessage.innerText = ""
  })
}
