const express = require('express')
const app = express();
const db = require('./config/db')
db.connect()
app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;