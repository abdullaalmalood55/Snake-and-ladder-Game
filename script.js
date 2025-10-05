const players = document.querySelector(".player")
const squares = document.querySelectorAll(".square")
const Dice = document.querySelector(".dice")
const diceValue = document.querySelector(".dice-value")
const gameMessage = document.querySelector(".game-message")
const board = []
let playerposition = 0
const boardlength = () => {
  for (let i = 0; i < 100; i++) {
    board.push(i + 1)
  }
}

const updateboard = () => {
  boardlength()
  board.forEach((square, index) => {
    square[index] = board[index]
  })
} /** */
squares[playerposition].appendChild(players)
const RollTheDice = () => {
  const roll = Math.floor(Math.random() * 6) + 1 // 1–6
  diceValue.innerText = roll

  // Check if move would go beyond 100
  if (playerposition + roll > 99) {
    return
  }

  // Update player position
  playerposition += roll

  // Check for Winner
  if (playerposition >= 99) {
    squares[playerposition].appendChild(players)
    Dice.disabled = true
    diceValue.innerText = ""
    gameMessage.innerHTML = "We have a winner"
    return
  }
  //Long-snake
  if (playerposition === 61) {
    playerposition = 18
    squares[playerposition].appendChild(players)
  }
  //Short-snake
  else if (playerposition === 36) {
    playerposition = 15

    squares[playerposition].appendChild(players)
  }
  //Long-Ladder
  else if (playerposition === 27) {
    playerposition = 83

    squares[playerposition].appendChild(players)
  }

  //Short-Ladder
  else if (playerposition === 8) {
    playerposition = 30

    squares[playerposition].appendChild(players)
  }

  //Short-Ladder
  else if (playerposition === 3) {
    playerposition = 13

    squares[playerposition].appendChild(players)
  }

  //Short-Ladder
  else if (playerposition === 66) {
    playerposition = 50

    squares[playerposition].appendChild(players)
  }

  //Short-Ladder
  else if (playerposition === 35) {
    playerposition = 43

    squares[playerposition].appendChild(players)
  }

  //Short-Ladder
  else if (playerposition === 70) {
    playerposition = 90

    squares[playerposition].appendChild(players)
  } else if (playerposition === 19) {
    playerposition = 37

    squares[playerposition].appendChild(players)
  } else if (playerposition === 39) {
    playerposition = 41

    squares[playerposition].appendChild(players)
  } else if (playerposition === 79) {
    playerposition = 99

    squares[playerposition].appendChild(players)
  } else if (playerposition === 52) {
    playerposition = 33

    squares[playerposition].appendChild(players)
  } else if (playerposition === 86) {
    playerposition = 23

    squares[playerposition].appendChild(players)
  } else if (playerposition === 97) {
    playerposition = 62

    squares[playerposition].appendChild(players)
  } else if (playerposition === 15) {
    playerposition = 5

    squares[playerposition].appendChild(players)
  } else if (playerposition === 73) {
    playerposition = 30

    squares[playerposition].appendChild(players)
  }
  squares[playerposition].appendChild(players)
} //end of function
Dice.addEventListener("click", () => RollTheDice())

//End of add event listener

const render = () => {
  updateboard()
}

const gameInit = () => {
  render()
}
gameInit()
