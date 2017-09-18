'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const appEvents = require('../scripts/app/events.js')

$(() => {
  $('#registration').on('submit', appEvents.registerUser)
  $('#login').on('submit', appEvents.loginUser)
  $('#log-out-btn').on('click', appEvents.logoutUser)
  $('#log-out-btn2').on('click', appEvents.logoutUser)
  $('#passChange').on('submit', appEvents.resetPassword)
  $('#survey').on('submit', appEvents.createSurvey)
  $('#view-surveys').on('click', appEvents.viewSurveys)
  $('#find-surveys').on('click', appEvents.findSurveys)

  $(document).on('click', '.delete-survey', function (event) {
    event.preventDefault()
    let deleteId = $(this).attr('id')
    appEvents.deleteSurvey(deleteId)
  })

  $(document).on('click', '.view-results', function(event) {
    event.preventDefault()
    let surveyId = $(this).attr('id')
    appEvents.viewResults(surveyId)
  })

// tutorial from: http://blog.appliedinformaticsinc.com/how-to-addremove-input-fields-dynamically-with-jquery/
  $(document).ready(function () {
    const maxFields = 20
    const wrapper = $('.items')
    const addButton = $('.add_field_button')

    let x = 1
    $(addButton).click(function (e) {
      e.preventDefault()
      if (x < maxFields) {
        x++
        $(wrapper).append('<div class="form-group"><label for="title"></label>' +
'<input class="form-control col-md-11" id="answer" type="email" placeholder="" name="author"/>' +
'<a href="#" class="remove_field"><i class="fa fa-times"></a></div>')
      }
    })

    $(wrapper).on('click', '.remove_field', function (remove) {
      remove.preventDefault()
      $(this).parent('div').remove(); x--
    })
  })

// on document ready
  $(document).ready(function () {
    $('#passChange').hide()
    $('#log-out-btn').hide()
    $('#log-out-btn2').hide()
    $('#close').hide()
    $('#login').show()
    $('#myAccountButton').hide()
    $('.myAccountSection').hide()
    $('#errorMessageModalLogin').hide()
    $('#survey').hide()
    $('#find-surveys').show()
    $('#view-surveys').hide()
    $('#showGoToResults').hide()
    $('#showCreateSurvey').hide()
    $('#showChangePassButton').hide()
    $('#loginButton2').hide()
    $('.surveyResults').hide()
    $('.cancel').hide()
  })

  $(document).on('click', '#myAccountButton', function (e) {
    e.preventDefault()
    $('.myAccountSection').show()
  // $('#passChange').show()
    $('#errorMessageModalLogin').show()
  })

  $('#showCreateSurvey').click(function () {
    $('#survey').show()
    $('.view-surveys').hide()
    // $('#user-surveys-table').hide()
  })

  $('#showChangePassButton').click(function () {
    $('#chgpwModal').show()
    $('#passChange').show()
    $('#reset-success').empty()
    $('#reset-fail').empty()
    $('#myAccountButton2').hide()
    $('.modal-footer-changepwd').show()
  })

  $('#view-surveys').click(function () {
    $('#survey').hide()
    $('.view-surveys').show()
    $('#dashboard-messages-created').empty()
  })
})
