const players = document.querySelector(".player")
const squares = document.querySelectorAll(".square")
const board = []
let position = 0
const boardlength = () => {
  for (let i = 0; i < 100; i++) {
    board.push(i + 1)
  }
}

const updateboard = () => {
  boardlength()
  board.forEach((square, index) => {
    squares[index].innerText = board[index]
  })

  console.log(board)
  squares[0].appendChild(players)
} /** */

updateboard()
