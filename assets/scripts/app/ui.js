'use strict'

const app = require('../app.js')
const appEvents = require('./events.js')

const onSignupSuccess = function () {
  console.log('sign-up success')
  // $('#errorMessage').empty()
  // $('#registration').find('input:text').val('')
  // $('#registration').find('input:password').val('')
  // $('#yayMessage').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Login. </p></div>')
  // // console.log('Signup Successful!')
}

const onSignupFailure = () => {
  // console.log('There was problem signing up, please try again!')
  console.log('sign-up fail')
  $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure
}
