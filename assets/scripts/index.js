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
const getFormFields = require('../../lib/get-form-fields')

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

  $(document).on('click', '.view-results', function (event) {
    event.preventDefault()
    let surveyId = $(this).attr('id')
    appEvents.viewResults(surveyId)
  })

  $(document).on('click', '.get-a-survey', function (event) {
    $('.yay-message').empty()
    $('.find-surveys').hide()
    $('#quiz-close').show()
    event.preventDefault()
    let survId = $(this).attr('id')
    appEvents.getNewSurvey(survId)
  })

  $(document).on('submit', '#quiz', function (event) {
    event.preventDefault()
    const data = getFormFields(this)
    // console.log(data)
    let selected
    if (data.answer === "answer1") {
      selected = $('.0').attr('data-selected')
      // console.log(selected)
    } else if (data.answer === "answer2") {
      selected = $('.1').attr('data-selected')
    } else if (data.answer === "answer3") {
      selected = $('.2').attr('data-selected')
    } else if (data.answer === "answer4") {
      selected = $('.3').attr('data-selected')
    }
    //console.log(this)
    let surveyId = $('#quiz h1').attr('id')
    let taken = $('#taken').html()
    //console.log(selected)
    // console.log(taken)
    // console.log(surveyId)
    //let answerId = $(this).attr('id')
    //console.log(answerId)
    //let title = $('#quiz h1').html()
    //console.log(title)
    //let question = $('#quiz h3').html()
    appEvents.updateSurvey(surveyId, taken, data, selected)
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
    $('#quiz-close').hide()
  })

  $(document).on('click', '#myAccountButton', function (e) {
    e.preventDefault()
    $('.myAccountSection').show()
  // $('#passChange').show()
    $('#errorMessageModalLogin').show()
  })

  $('#showCreateSurvey').click(function () {
    $('.dashboard-messages-created').empty()
    $('#survey-results-table').empty()
    $('.yay-message').empty()
    $('#survey').show()
    $('#quiz-close').hide()
    // $('#find-surveys').hide()
    $('.surveyResults').hide()
    $('.view-surveys').hide()
    $('.find-surveys').hide()
    $('.yay-message').empty()
    // $('#quiz-close').show()
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
    $('.find-surveys').hide()
    $('#dashboard-messages-created').empty()
  })

  $('#quiz-close').click(function () {
    $('#survey').hide()
    $('.find-surveys').show()
    $('.take-survey').empty()
    $('.yay-message').empty()
    $('#quiz-close').hide()
  })

  $('#find-surveys').click(function () {
      $('#survey').hide()
      $('.find-surveys').show()
      $('.view-surveys').hide()
      $('.surveyResults').hide()
      // $('.take-survey').hide()
      })
})
