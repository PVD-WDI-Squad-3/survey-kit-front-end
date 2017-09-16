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
  $('#passChange').on('submit', appEvents.resetPassword)
  $('#survey').on('submit', appEvents.createSurvey)
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

$(document).ready(function () {
  $('#passChange').show()
  $('#log-out').hide()
  $('#showChangePassButton').hide()
  $('#close').hide()
  $('#login').show()
  $('#myAccountButton').hide()
  $('.myAccountSection').hide()
  $('#errorMessageModalLogin').hide()
})

$(document).on('click', '#myAccountButton', function (e) {
  e.preventDefault()
  $('.myAccountSection').show()
  $('#passChange').show()
  $('#errorMessageModalLogin').show()
})
