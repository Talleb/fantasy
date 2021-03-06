const express = require('express');
const sqlite = require('sqlite');
const cors = require('cors');

const app = express();

app.use(express.json());
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

app.get('/Jugadores', (request, response) => {
  //Selecting players
  database.all('SELECT * FROM players').then(Jugadores => {
    response.json(Jugadores);
  });
});

app.get('/Teams', (request, response) => {
  database.all('SELECT * FROM Teams WHERE Team = ?', request.query.Team).then(Team => {
    response.send(Team[0].Crest)
  })
})

// app.get('/Teams', (request, response) => {
//   database.all('SELECT * FROM Teams').then(Teams => {
//     response.send(Teams)
//     console.log(Teams)
//   })
// })

//hämta team crest (params?)
// app.get('/Teams/', (request, response) => { //Selecting players
//   database.all('SELECT * FROM players').then(Jugadores => {
//     response.json(Jugadores)
//   })
// })

app.get('/Highscore', (request, response) => {
  database.all('SELECT * FROM Highscore').then(score => {
    response.send(score);
    console.log([players]);
  });
});

//Sorting Players by Position
//*****GoaldKepper Field API */
app.get('/Goalkeepers', (request, response) => {
  database
    .all('SELECT * FROM players WHERE Position = ?', 'Goalkeeper')
    .then(playerMV => {
      response.json(playerMV);
    });
});
//*****Back Field API */
app.get('/Defenders', (request, response) => {
  database
    .all('SELECT * FROM players WHERE Position = ?', 'Defender')
    .then(playerMV => {
      response.json(playerMV);
    });
});
/***** Mind Field API */
app.get('/Midfielders', (request, response) => {
  database
    .all('SELECT * FROM players WHERE Position = ?', 'Midfielder')
    .then(playerMV => {
      response.json(playerMV);
    });
});

/***** Front Field API */
app.get('/Forwards', (request, response) => {
  database
    .all('SELECT * FROM players WHERE Position = ?', 'Forward')
    .then(playerMV => {
      response.json(playerMV);
    });
});

//hämtar data från formulär
app.post('/submit-user', (request, response) => {
  const submit = request.body;
  console.log(submit);
  console.log(submit.userName, submit.teamName, submit.points);
  response.send(submit.userName + ' ' + submit.teamName + ' ' + submit.points);
  database
    .run('INSERT INTO Highscore VALUES (?, ?, ?)', [
      submit.userName,
      submit.teamName,
      submit.points
    ])
    .then(() => { });
});

app.listen(3000);
