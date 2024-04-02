const home = require("./home")
const register = require('./register')
const changeAccount = require('./change')
function route(app) {
    app.use('/',home);
    app.use('/register',register)
    app.use('/change', changeAccount)
}


module.exports = route;