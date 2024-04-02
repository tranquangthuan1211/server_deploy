const express = require('express')
const app = express();
const db = require('./config/db')
const route = require('./route/index')
db.connect()
route(app)

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;