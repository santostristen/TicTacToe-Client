'use strict'

const store = require('./store')

const userSignUpSuccess = function (response) {
  // responds on successful sign up
  $('#message').text('Thank you for joining ' + response.user.email)
  $('form').trigger('reset')
}

const userSignUpFailure = function () {
  // responds on failed sign up
  $('#message').text('Sorry something went wrong, please try again')
}

const userSignInSuccess = function (response) {
  // responds on successful sign in
  $('#message').text('Welcome back! ' + response.user.email)
  $('form').trigger('reset')
  $('#change-password').show()
  $('#user-sign-out').show()
  $('#user-sign-up').hide()
  $('#user-sign-in').hide()
  $('#start-new-game').show()
  $('.board').show()
  $('h2').show()
  store.user = response.user
}

const userSignInFailure = function () {
  // responds on failed sign in
  $('#message').text('Sorry something went wrong, please try again')
  $('form').trigger('reset')
}

const passChangeSuccess = function () {
  // lets you know password change was successful
  $('#message').text('Your Password has been changed.')
  $('form').trigger('reset')
}

const passChangeFailure = function () {
  // lets you know password change was failed
  $('#message').text('Sorry could not change your password, please try again')
}

const userSignOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  $('#user-sign-up').show()
  $('#user-sign-in').show()
  $('#change-password').hide()
  $('#user-sign-out').hide()
  $('#start-new-game').hide()
  $('.board').hide()
  $('h2').hide()

  store.user = null
}

const userSignOutFailure = function () {
  $('#message').text('Sign Out Failed, try again')
}

const newGameSuccess = function (response) {
  // starting new game triggers this message
  $('#message').text('New Game Started, have fun!')
  $('.cell').text('')
}

const newGameFailure = function () {
  // failing to start a new game will trigger this message
  $('#message').text('Could not start a new game')
}

const gameUpdateSuccess = function (response) {
  $('#message').text('Valid Move')
}

const gameUpdateFailure = function () {
  $('#message').text('Invalid Move')
}

module.exports = {
  userSignUpSuccess,
  userSignUpFailure,
  userSignInSuccess,
  userSignInFailure,
  passChangeSuccess,
  passChangeFailure,
  userSignOutSuccess,
  userSignOutFailure,
  newGameSuccess,
  newGameFailure,
  gameUpdateSuccess,
  gameUpdateFailure
}
