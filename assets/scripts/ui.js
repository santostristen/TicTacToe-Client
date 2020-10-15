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
  store.user = response.user
  console.log('this is the response in user sign in success', response.user.token)
}

const userSignInFailure = function () {
  // responds on failed sign in
  $('#message').text('Sorry something went wrong, please try again')
}

const passChangeSuccess = function () {
  console.log('passChangeSuccess')
  // lets you know password change was successful
  $('#message').text('Your Password has been changed.')
}

const passChangeFailure = function () {
  console.log('youfailed')
  // lets you know password change was failed
  $('#message').text('Sorry could not change your password, please try again')
}

const userSignOutSuccess = function () {
  $('#message').text('Signed Out Successfully')
  $('#user-sign-up').show()
  $('#user-sign-in').show()
  $('#change-password').hide()
  $('#user-sign-out').hide()

  store.user = null
}

const userSignOutFailure = function () {
  $('#message').text('Sign Out Failed, try again')
}
module.exports = {
  userSignUpSuccess,
  userSignUpFailure,
  userSignInSuccess,
  userSignInFailure,
  passChangeSuccess,
  passChangeFailure,
  userSignOutSuccess,
  userSignOutFailure
}
