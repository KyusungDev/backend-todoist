const express = require('express');
const database = require('./database');

const { Todo } = require('./model');

const app = express();

app.get('/', (req, res) => {
  Todo.find({}).then(rows => {
    res.send(rows);
  });
});

app.listen(8080, () => {
  console.log('start server port : 8080');

  database
    .connect()
    .then(() => {
      console.log('Database Connection');
    })
    .catch(e => {
      console.log(e);
    });
});
