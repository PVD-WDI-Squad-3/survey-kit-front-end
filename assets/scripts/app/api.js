const app = require('./../app.js')

const addUser = function(data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    // headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data
  })
}

const userLogin = function(data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    // headers: {
    // Authorization: 'Token token=' + app.user.token // store.user.token
    // },
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}

const userLogout = function(id) {
  console.log('api file')
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const passwordReset = function(data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}

const newSurvey = function(data) {
  return $.ajax({
    url: app.host + '/surveys/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    data: {
      'survey': {
        'title': data.title,
        'questions': [{
          'content': {
            'question': data.question,
            'answers': [{
                'answer': data.answer1
              },
              {
                'answer': data.answer2
              },
              {
                'answer': data.answer3
              },
              {
                'answer': data.answer4
              }
            ]
          }
        }]
      }
    }
  })
}

const getSurveys = function() {
  console.log("working also")
  return $.ajax({
    url: app.host + '/surveys',
    method: 'GET'
  })
}

const findAllSurveys = function() {
  return $.ajax({
    url: app.host + '/surveys',
    method: 'GET'
  })
}

const deleteSurvey = function(deleteId) {
  return $.ajax({
    url: app.host + '/surveys/' + deleteId,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}

const viewSurveyResults = function (surveyId) {
  return $.ajax({
    url: app.host + '/surveys/' + surveyId,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'GET'
  })
}

const getSurvey = function (survId) {
  return $.ajax({
    url: app.host + '/surveys/' + survId,
    /*headers: {
      Authorization: 'Token token=' + app.user.token
    },*/
    method: 'GET'
  })
}

const updateASurvey = function (answerId, surveyId) {
  return $.ajax({
    url: app.host + '/surveys/' + surveyId,
    method: 'PATCH',
    data: {
      "survey": {
      //"title": "Eats",
      "questions": [{
        "content": {
          //"question": "What should we eat?",
          "answers": [
            {"answer": answerId, "selected": +1},
            //{"answer": "Monkeys"},
            //{"answer": "Fish"},
            //{"answer": "Nothing"}
          ]
        }
      }]
    }
  }
  })
}

module.exports = {
  addUser,
  userLogin,
  passwordReset,
  userLogout,
  newSurvey,
  getSurveys,
  findAllSurveys,
  deleteSurvey,
  viewSurveyResults,
  getSurvey,
  updateASurvey
}

// : {
//   'credentials': {
//     'email': data.credentials.email,
//     'password': data.credentials.password,
//     'password_confirmation': data.credentials.password
//   }
// }
