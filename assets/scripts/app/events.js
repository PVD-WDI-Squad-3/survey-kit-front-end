const appApi = require('./api.js')
const appUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// event handler for registration form
const registerUser = function (event) {
  event.preventDefault()
  let data = getFormFields(this)
  // Test that the passwords match
  if (data.credentials.password !== data.credentials.password_confirmation) {
    console.log('info invalid')
    // $('#errorMessage').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
    // $('#errorMessage').text('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match. Try again!' + ' </p></div>')
  } else {
    appApi.addUser(data)
  .then(appUi.onSignupSuccess)
  .catch(appUi.onSignupFailure)
  }
}

// event handler for login form
const loginUser = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.userLogin(data)
  .then(appUi.onSigninSuccess)
  .catch(appUi.onSigninFailure)
}

const logoutUser = function () {
  // const data = getFormFields(this)
  event.preventDefault(event)
  appApi.userLogout()
  .then(appUi.onLogoutSuccess)
  .catch(appUi.onLogoutFailure)
}

const resetPassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  appApi.passwordReset(data)
  .then(appUi.onResetSuccess)
  .catch(appUi.onResetFailure)
}

const createSurvey = function (event) {
  const data = getFormFields(this)
  console.log(this)
  console.log(data)
  event.preventDefault()
  appApi.newSurvey(data)
  .then(appUi.onCreateSuccess)
  .catch(appUi.onCreateFailure)
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  resetPassword,
  createSurvey
}
