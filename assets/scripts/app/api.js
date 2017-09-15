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

module.exports = {
  addUser,
  userLogin
}

// : {
//   'credentials': {
//     'email': data.credentials.email,
//     'password': data.credentials.password,
//     'password_confirmation': data.credentials.password
//   }
// }
