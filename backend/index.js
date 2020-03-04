const express = require('express');
const sqlite = require('sqlite');
const cors = require('cors');

const app = express();
app.use(cors());

let database;

sqlite.open('fotboll.sqlite').then(database_ => {
  database = database_;
});
app.get('/', (request, response) => {
  database.all('SELECT * FROM players').then(players => {
    response.send(players);
    console.log([players]);
  });
});
app.get('/Highscore', (request, response) => {
  database.all('SELECT * FROM Highscore').then(score => {
    response.send(score);
    console.log([players]);
  });
});
app.listen(3000);
