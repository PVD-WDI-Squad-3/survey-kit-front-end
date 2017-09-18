'use strict'

const app = require('../app.js')
// const appEvents = require('./events.js')

// on sign up success -- this is the most recent
const onSignupSuccess = function () {
  console.log('sign-up success')
  $('#errorMessage').empty()
  $('#errorMessageModalSignUp').empty()
  $('#registration').hide()
  $('.modal-footer-reg').hide()
  $('#loginButton2').show()
  $('.cancel').show()
  // $('#loginButton2').show()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#signUpSuccess').prepend('<div class="row" style="text-align: center; color: black"> <p>You are now signed up. Please login. </p></div>')
}

const onSignupFailure = () => {
  // console.log('There was problem signing up, please try again!')
  console.log('sign-up fail')
  $('#errorMessageModalSignUp').empty()
  $('#errorMessage').empty()
  $('#registration').find('input:text').val('')
  $('#registration').find('input:password').val('')
  $('#errorMessageModalSignUp').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Passwords do not match or username is already taken. Try again!' + ' </p></div>')
}

const onSigninSuccess = function(data) {
  console.log(data.user)
  app.user = data.user
  $('#login input').not('.submit').val('')
  $('#passChange').show()
  $('#login').find('input:text').val('')
  $('#login').find('input:password').val('')
  $('.view-surveys').empty()
  $('.find-surveys').empty()
// $('#loginModal').hide('hide')
  $('#survey').hide()
  $('#login').hide()
  $('.modal-footer-login').hide()
  $('#myAccountButton').show()
  $('#myAccountButton2').hide()
  $('#log-out-btn').show()
  $('#log-out-btn2').show()
  $('#showCreateSurvey').show()
  $('#view-surveys').show()
  $('#find-surveys').show()
  $('#showGoToResults').show()
  $('#showChangePassButton').show()
  $('#passChange').show()
  $('.modal-footer-changepwd').show()
  console.log('sign in successful')
}

const onSigninFailure = (error) => {
  $('.errorMessageModalLogin').empty()
  console.log('Invalid username or password.')
  $('.errorMessageModalLogin').prepend('<div class="row" style="text-align: center; color: red"> <p> ' + 'Your username or password is incorrect. Try again!' + ' </p></div>')
}

const onLogoutSuccess = function(app) {
  console.log('sign-out successful')
  $('.errorMessageModalLogin').empty()
  $('#myAccountButton').hide()
  $('.myAccountSection').hide()
  $('#myAccountButton2').hide()
  $('#login').show()
  $('.modal-footer-login').show()
  $('#registration').show()
  $('.modal-footer-reg').show()
  $('#log-out-btn').hide()
  $('#log-out-btn2').hide()
  $('#showCreateSurvey').hide()
  $('#view-surveys').hide()
  $('#find-surveys').show()
  $('.view-surveys').hide()
  $('.find-surveys').hide()
  $('.view-surveys').empty()
  $('.find-surveys').empty()
  $('#showGoToResults').hide()
  $('#passChange').hide()
  $('#errorMessage').empty()
  $('#errorMessageModalSignUp').empty()
  $('#signUpSuccess').empty()
  $('#survey').hide()
  $('#showChangePassButton').hide()
}

const onLogoutFailure = function() {
  console.log('error signing out')
}

const onResetSuccess = function () {
  $('#reset-success').empty()
  console.log('password reset successful')
  $('#passChange input').not('.submit').val('')
  $('#passChange').hide()
  $('.modal-footer-changepwd').hide()
  $('#myAccountButton2').show()
  $('#reset-success').prepend('<div class="row" style="text-align: center; color: black"> <p>Your password has been reset.</p></div>')
}

const onResetFailure = function() {
  console.log('password reset failed')
  $('#reset-fail').empty()
  $('#reset-fail').prepend('<div class="row" style="text-align: center; color: red"> <p>Your password has been reset.</p></div>')
}

const onCreateSuccess = function(data) {
  console.log(data)
  console.log('Survey Created!')
  $('#survey input').not('.submit').val('')
  $('.dashboard-messages-created').prepend('<div class="row" style="text-align: center; color: black"> <p>Your survey has been created. View your surveys</p></div>')
}

const onCreateFailure = function(error) {
  console.error(error)
}

const onSurveysSuccess = function(data) {
  const surveys = data.surveys
  let userSurveys = []
  for (let i = 0; i < surveys.length; i++) {
    if (surveys[i]._owner === app.user.id) {
      userSurveys.push(surveys[i])
    }
  }
  $('.view-surveys').empty()
  $('.view-surveys').append('<table class="table" id="user-surveys-table"> <thead> <tr> <th> Survey Title </th> <th>  </th> <th>  </th> <th> </th></tr> </thead> <tbody>')
  userSurveys.forEach(function(survey) {

    $('#user-surveys-table').append('<tr> <td>' + survey.title + ' </td> <td> <a href="javascript:" id="' + survey.id + '"> View Results </a> </td> <td> <a href="javascript:" class="delete-survey" id="' + survey.id + '"> Delete </a></tr>')
    // $('#user-surveys-table').append('<tr> <td>' + survey.title + ' </td> <td> <a href="javascript:" class="view-results" id="' + survey.id + '"> View Results </a> </td> <td> <a href="javascript:" id="' + survey.id + '"> Delete </a></tr>')

  })
    $('#user-surveys-table').append('</tbody> </table>')
  console.log(app.user)
  console.log(userSurveys)
  console.log("Fetched Survey Success!")
}

const onSurveysFailure = function(error) {
  console.error(error)
}

const onFindSuccess = function(data) {
  console.log(data)
  console.log('Successfully fetched all surveys')
  const surveys = data.surveys
  let allSurveys = []
  for (let i = 0; i < surveys.length; i++) {
    allSurveys.push(surveys[i])
  }
  $('.find-surveys').append('<table class="table" id="user-surveys-table-show"> <thead> <tr> <th> Survey Title </th> <th>  </th> <th>  </th> <th> </th></tr> </thead> <tbody>')
  allSurveys.forEach(function (survey) {
    $('#user-surveys-table-show').append('<tr> <td>' + survey.title + ' </td> <td> <a href="javascript:" id="' + survey.id + '"> take survey </a> </td> </tr>')
    // $('#user-surveys-table').append('<tr> <td>' + survey.title + ' </td> <td> <a href="javascript:" class="view-results" id="' + survey.id + '"> View Results </a> </td> <td> <a href="javascript:" id="' + survey.id + '"> Delete </a></tr>')
  })
}

const onFindFailure = function(error) {
  console.error(error)
}

const onDeleteSuccess = function (data) {
  console.log('Successfully deleted Survey')
}

const onDeleteFailure = function(error) {
  console.error(error)
}

const onViewSuccess = function (data) {
  console.log(data)
  let questions = data.survey.questions
  console.log(questions)
  let qArray = []
  questions.forEach(function (question) {
    console.log(question.content)
  })
}

const onViewFailure = function (error) {
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
  onCreateFailure,
  onSurveysSuccess,
  onSurveysFailure,
  onFindSuccess,
  onFindFailure,
  onDeleteSuccess,
  onDeleteFailure,
  onViewSuccess,
  onViewFailure
}
