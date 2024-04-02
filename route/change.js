const express = require("express")
const route = express.Router()
const changeAccount = require('../controller/ChangeAccount')

route.get('/', changeAccount.index)
route.put('/',changeAccount.handleChange)

module.exports = route