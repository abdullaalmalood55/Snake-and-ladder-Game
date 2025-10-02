const players = document.querySelector(".player")
const squares = document.querySelectorAll(".square")
const Dice = document.querySelector(".dice")
const diceValue = document.querySelector(".dice-value")
const board = []
let playerposition = 0
const boardlength = () => {
  for (let i = 0; i < 100; i++) {
    board.push(i + 1)
  }
}

const updateboard = () => {
  boardlength()
  board.forEach((square, index) => {})
} /** */
squares[playerposition].appendChild(players)
const RollTheDice = () => {
  const roll = Math.floor(Math.random() * 6) + 1
  diceValue.innerText = roll

  playerposition += roll

  if (playerposition >= 99) {
    squares[99].appendChild(players)
    return
  }
  squares[playerposition].appendChild(players)
}
Dice.addEventListener("click", () => RollTheDice())

//End of add event listener

const render = () => {
  updateboard()
}

const gameInit = () => {
  render()
}
gameInit()
