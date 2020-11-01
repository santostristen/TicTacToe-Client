// // used with player turn and win or draw messages to tell the user what is happening in the designated area from HTML
// const statusDisplay = document.querySelector('.game-stand')
//
// // add the event listener 'click' to all of the cells along with the onClick function
// document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', onClick))
//
// // using to keep track of which player is placing
// let currentPlayer = 'X'
//
// // using to check what cells have been played and winning combos or draw
// let gameStatus = ['', '', '', '', '', '', '', '', '']
//
// // using to prevent clicks after a game finishes
// let gamePlaying = true
//
// // messages to let the player know whos turn it is and who wins or if its a draw
// // back ticks to display the current player object as regular text
// const winnerText = () => `${currentPlayer} is the Winner!`
//
// const drawText = () => 'Game is a Draw!'
//
// const currentPlayerTurn = () => `${currentPlayer}'s Turn!`
//
// // shows text in the browser to know which players turn it is
// statusDisplay.innerHTML = currentPlayerTurn()
//
// // function will allow player to place x or o
// function onClick (clickedEvent) {
//   const clickedCell = clickedEvent.target
//
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt use parseInt() to change the string to a number to set up for winningCombos
//   const clickedCellIndex = parseInt(
//     clickedCell.getAttribute('data-cell-index')
//   )
//
//   // dont allow user to click on clicked cells or after game is done
//   // store.gamePlaying
//   if (gameStatus[clickedCellIndex] !== '' || !gamePlaying) {
//     return
//   }
//
//   onClicked(clickedCell, clickedCellIndex)
//   winCheck()
// }
//
// // will put current player, either 'X' or 'O' in the clicked cell
// function onClicked (clickedCell, clickedCellIndex) {
//   gameStatus[clickedCellIndex] = currentPlayer
//   clickedCell.innerHTML = currentPlayer
// }
//
// // function to change players
// function playerRotation () {
//   // https://medium.com/@jraleman/ternary-operators-vs-if-else-statements-6c26f7d034f7#:~:text=A%20ternary%20operator%20takes%20three,in%20one%20(1)%20line! found while doing more reading on if else statements as a way to clean up code, '?' is the if operator while ':' is the else operator. Basically if its not 'X' its 'O' and vice versa
//   currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
//   statusDisplay.innerHTML = currentPlayerTurn()
// }
//
// // same player on these cells is the winner
// const winningCombos = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 4, 6],
//   [2, 5, 8],
//   [3, 4, 5],
//   [6, 7, 8]
// ]
//
// // will check for win or tie
// function winCheck () {
//   let wonGame = false
//   // for loop to go through winningCombos and check if one has been met
//   for (let i = 0; i <= 7; i++) {
//     // https://www.w3schools.com/js/js_break.asp
//     const winningCondition = winningCombos[i]
//     // shows what array cells have been filled from gameStatus to check winner
//     const a = gameStatus[winningCondition[0]]
//     const b = gameStatus[winningCondition[1]]
//     const c = gameStatus[winningCondition[2]]
//     // if any winningCombos aren't met continue the game
//     if (a === '' || b === '' || c === '') {
//       continue
//     }
//     // this represents a winningCombos being met it will pass wonGame as true
//     if (a === b && b === c) {
//       wonGame = true
//       break
//     }
//   }
//   // when wonGame is true it will display the winnerText and also not allow anymore symbols to be placed
//   if (wonGame) {
//     statusDisplay.innerHTML = winnerText()
//     gamePlaying = false
//     return
//   }
//   // if user gets all cells filled without meeting any winningCombos the drawText will display as well as stopping more moves from being made
//   const gameDraw = !gameStatus.includes('')
//   if (gameDraw) {
//     statusDisplay.innerHTML = drawText()
//     gamePlaying = false
//     return
//   }
//   playerRotation()
// }
// function handleRestartGame() {
//   gamePlaying = true
//   currentPlayer = 'X'
//   gameStatus = ['', '', '', '', '', '', '', '', '']
//     statusDisplay.innerHTML = currentPlayerTurn()
//     document.querySelectorAll('.cell')
//     .forEach(cell => cell.innerHTML)
// }
//
// module
