const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const api = require('./src/routes/api');

mongoose.connect('mongodb://127.0.0.1:27017/jobs-crud', {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  console.log("Succesful")
});

//middleware for POST
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use('/api/v1', api);

app.use((request, response) => {
  const ERROR = {
    message: '404. Not Found'
  }
  response
    .status(404)
    .json(ERROR);
});

app.use((err, request, response, next) => {
  const ERROR = {
    message: '500. Server Error'
  }
  response
    .status(500)
    .json(ERROR);
});

app.listen(PORT, () => {
  const msg = (`Node Server is running on PORT: ${PORT}`);

  console.log(msg);
});
