'use strict'

const events = require('./events')

$(() => {
  $('#user-sign-up').on('submit', events.userSignUp)
  $('#user-sign-in').on('submit', events.userSignIn)
  $('#change-password').on('submit', events.passChange)
  $('#change-password').hide()
  $('#user-sign-out').on('submit', events.userSignOut)
  $('#user-sign-out').hide()
  $('#start-new-game').on('submit', events.userNewGame)
  $('#start-new-game').hide()
  $('.board').hide()
  $('h2').hide()
})

// display messages to the user
const statusDisplay = document.querySelector('.game-stand')

// add the event listener 'click' to all of the cells
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', onClick))

// using to keep track of which player is placing
let currentPlayer = 'X'

// using to check what cells have been played and winning combos
const gameStatus = ['', '', '', '', '', '', '', '', '']

// using to prevent clicks after a game finishes
let gamePlaying = true

// messages to let the player know whats going on
const winnerText = () => `${currentPlayer} is the Winner!`

const drawText = () => 'Game is a Draw!'

const currentPlayerTurn = () => `${currentPlayer}'s Turn!`

// shows text in the browser to know which players turn it is
statusDisplay.innerHTML = currentPlayerTurn()

// function will allow player to place x or o
function onClick (clickedEvent) {
  const clickedCell = clickedEvent.target

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt use parseInt() to change the string to a number
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute('data-cell-index')
  )

  if (gameStatus[clickedCellIndex] !== '' || !gamePlaying) {
    return
  }

  onClicked(clickedCell, clickedCellIndex)
  winCheck()
}

// will not allow a player to place on a cell already used
function onClicked (clickedCell, clickedCellIndex) {
  gameStatus[clickedCellIndex] = currentPlayer
  clickedCell.innerHTML = currentPlayer
}

// function to change players
function playerRotation () {
  // https://medium.com/@jraleman/ternary-operators-vs-if-else-statements-6c26f7d034f7#:~:text=A%20ternary%20operator%20takes%20three,in%20one%20(1)%20line! found while doing more reading on if else statements as a way to clean up code, '?' is the if operator while ':' is the else operator
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  statusDisplay.innerHTML = currentPlayerTurn()
}

// same player symbol on these cells is the winner
const winningCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
]

// will check for win or tie
function winCheck () {
  let wonGame = false
  // for loop to go through winningCombos and check if one has been met
  for (let i = 0; i <= 7; i++) {
    // https://www.w3schools.com/js/js_break.asp
    const winningCondition = winningCombos[i]
    // shows what array indexes have been filled from gameStatus to check winner
    const a = gameStatus[winningCondition[0]]
    const b = gameStatus[winningCondition[1]]
    const c = gameStatus[winningCondition[2]]
    if (a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      wonGame = true
      break
    }
  }
  if (wonGame) {
    statusDisplay.innerHTML = winnerText()
    gamePlaying = false
    return
  }
  const gameDraw = !gameStatus.includes('')
  if (gameDraw) {
    statusDisplay.innerHTML = drawText()
    gamePlaying = false
    return
  }
  playerRotation()
}
