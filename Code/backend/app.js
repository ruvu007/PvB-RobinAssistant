const express = require('express')
const bodyParser = require('body-parser')

const nodemailer = require("nodemailer");

const app = express()
const port = 3000

// Parse application
app.use(bodyParser.urlencoded({ extended: false }))

// Parse json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send('Email sent')
})

// Routes importeren
require('./routes/contact')(express, app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})