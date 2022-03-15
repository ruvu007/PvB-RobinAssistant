const express = require('express')
const bodyParser = require('body-parser')

const nodemailer = require("nodemailer");

const app = express()
const port = 3000

// Parse application
app.use(bodyParser.urlencoded({ extended: false }))

// Parse json
app.use(bodyParser.json())

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

const db = require('./database.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const company = req.body.company;
  const fullname = req.body.fullname;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const message = req.body.message;

  console.log(email);

  db.query(
    "INSERT INTO messages (emailaddress, message, company, fullname, phonenumber) VALUES (?,?,?,?,?)",
    [email, message, company, fullname, phonenumber],
    (err, result) => {
      console.log(err);
    }
  )

  res.send('Email sent');
})

// Routes importeren
require('./routes/contact')(express, app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})