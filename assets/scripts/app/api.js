const app = require('./../app.js')

const addUser = function (data) {
  // console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    // headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data
  })
}

const userLogin = function (data) {
  // console.log(data)
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
  // console.log('api file')
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
        'question': data.question,
        'answer1': data.answer1,
        'answer2': data.answer2,
        'answer3': data.answer3,
        'answer4': data.answer4,
        'timesTaken': 0
      }
    }
  })
}

const getSurveys = function() {
  // console.log("working also")
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

const deleteSurvey = function (deleteId) {
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

const updateASurvey = function (surveyId, taken, data, selected) {
  taken++
  selected++
  // console.log(selected)
  let answer = data.answer
  // console.log(answer)

  if (answer === 'answer1') {
    return $.ajax({
      url: app.host + '/surveys/' + surveyId,
      /*headers: {
        Authorization: 'Token token=' + app.user.token
      }*/
      method: 'PATCH',
      data: {
        "survey": {
        "answer1Selected": selected,
        "timesTaken": taken
        }
      }
    })
  }
  if (answer === 'answer2') {
    return $.ajax({
      url: app.host + '/surveys/' + surveyId,
      /*headers: {
        Authorization: 'Token token=' + app.user.token
      }*/
      method: 'PATCH',
      data: {
        "survey": {
        "answer2Selected": selected,
        "timesTaken": taken
        }
      }
    })
  }
  if (answer === 'answer3') {
    return $.ajax({
      url: app.host + '/surveys/' + surveyId,
      /*headers: {
        Authorization: 'Token token=' + app.user.token
      }*/
      method: 'PATCH',
      data: {
        "survey": {
        "answer3Selected": selected,
        "timesTaken": taken
        }
      }
    })
  }
  if (answer === 'answer4') {
    return $.ajax({
      url: app.host + '/surveys/' + surveyId,
      /*headers: {
        Authorization: 'Token token=' + app.user.token
      }*/
      method: 'PATCH',
      data: {
        "survey": {
        "answer4Selected": selected,
        "timesTaken": taken
        }
      }
    })
  }
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

// “"survey": {
// //"title": title,
// "questions": [
//   {
// 0: {
// "content": {
//     //"question": question,
//   "answers": {
//
//         answer: {
//           "selected": +1
//         }
//
//     //{"answer": "Monkeys"},
//     //{"answer": "Fish"},
//     //{"answer": "Nothing"}
//   }
// }
// }
// }
// ]
// }
// }
// })”
