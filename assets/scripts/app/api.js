const app = require('./../app.js')

const addUser = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/sign-up/',
    // headers: { 'header': 'Content-Type: application/json' },
    method: 'POST',
    data
  })
}

const userLogin = function (data) {
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

const userLogout = function (id) {
  console.log('api file')
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const passwordReset = function (data) {
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

const newSurvey = function (data) {
  return $.ajax({
    url: app.host + '/surveys/',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'POST',
    data: {
    "survey": {
      "title": data.title,
      "questions": [{
        "content": {
          "question": data.question,
          "answers": [
            {"answer": data.answer1},
            {"answer": data.answer2},
            {"answer": data.answer3},
            {"answer": data.answer4}
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
  newSurvey
}

// : {
//   'credentials': {
//     'email': data.credentials.email,
//     'password': data.credentials.password,
//     'password_confirmation': data.credentials.password
//   }
// }
