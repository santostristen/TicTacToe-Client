'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

// this function will allow the user to sign up to the website
const userSignUp = function (event) {
  event.preventDefault()

  // get credentials from form "#user-sign-up"
  const form = event.target

  // get data to make sure sign up was successful
  const data = getFormFields(form)

  // api will receive data to work with the POST request
  api.signUp(data)
    // successful sign up
    .then(ui.userSignUpSuccess)
    // failed sign up
    .catch(ui.userSignUpFailure)
}

const userSignIn = function (event) {
  event.preventDefault()

  // get credentials from form "#user-sign-in"
  const form = event.target

  // get data to check for successful sign in
  const data = getFormFields(form)

  // api will receive data to work with the POST request
  api.signIn(data)
    // successful sign in
    .then(ui.userSignInSuccess)
    // failed sign in attempt
    .catch(ui.userSignInFailure)
}

const passChange = function (event) {
  event.preventDefault()

  // get passwords from form "#change-password"
  const form = event.target

  // get data to change password
  const data = getFormFields(form)

  // api will receive data to work with the PATCH request
  api.changePass(data)
    // successful password change
    .then(ui.passChangeSuccess)
    // failed password change
    .catch(ui.passChangeFailure)
}
const userSignOut = function (event) {
  event.preventDefault()

  // api will work with the DELETE request to sign out
  api.signOut()
    // successful sign out
    .then(ui.userSignOutSuccess)
    // failed sign out
    .catch(ui.userSignOutFailure)
}

const userNewGame = function (event) {
  event.preventDefault()
  console.log('event is', event)

  const form = event.target

  const data = getFormFields(form)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const userPlaying = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.gameUpdate(data)
    .then(ui.gameUpdateSuccess)
    .catch(ui.gameUpdateFailure)
}

module.exports = {
  userSignUp,
  userSignIn,
  passChange,
  userSignOut,
  userNewGame,
  userPlaying
}
