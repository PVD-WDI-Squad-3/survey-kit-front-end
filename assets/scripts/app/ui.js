'use strict'

const app = require('../app.js')
const appEvents = require('./events.js')

// on sign up success
const onSignupSuccess = function () {
  console.log('sign-up success')
  $('#errorMessage').empty()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Login. </p></div>')
}

const onSignupFailure = () => {
  // console.log('There was problem signing up, please try again!')
  console.log('sign-up fail')
  $('#errorMessageModalSignUp').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
}

const onSigninSuccess = function (data) {
  app.user = data.user
  $('#login input').not('.submit').val('')
  // $('#passChange').show()
  $('#login').find('input:text').val('')
  $('#login').find('input:password').val('')
// $('#loginModal').hide('hide')
  $('#login').hide()
  $('.modal-footer').hide()
  $('#myAccountButton').show()
  console.log('sign in successful')
}

const onSigninFailure = (error) => {
  $('.errorMessageModalLogin').empty()
  console.log('Invalid username or password.')
  $('.errorMessageModalLogin').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Your username or password is incorrect. Try again!' + ' </p></div>')
}

const onLogoutSuccess = function (app) {
  console.log('sign-out successful')
  $('.errorMessageModalLogin').empty()
  $('#myAccountButton').hide()
  $('#login').show()
  $('.modal-footer').show()
}

const onLogoutFailure = function () {
  console.log('error signing out')
}

const onResetSuccess = function () {
  console.log('password reset successful')
  $('#passChange input').not('.submit').val('')
}

const onResetFailure = function () {
  console.log('password reset failed')
}

const onCreateSuccess = function (data) {
  console.log(data)
  console.log("Survey Created!")
  $('#survey input').not('.submit').val('')
}

const onCreateFailure = function (error) {
  console.error(error)
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onLogoutSuccess,
  onLogoutFailure,
  onResetSuccess,
  onResetFailure,
  onCreateSuccess,
  onCreateFailure
}
