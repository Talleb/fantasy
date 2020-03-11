const express = require('express');
const sqlite = require('sqlite');
const cors = require('cors');

const app = express();


app.use(express.json())
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

app.get('/Jugadores', (request, response)=>{ //Selecting players
  database.all('SELECT * FROM players').then(Jugadores =>{
    response.json(Jugadores)
  })
})

app.get('/Highscore', (request, response) => {
  database.all('SELECT * FROM Highscore').then(score => {
    response.send(score);
    console.log([players]);
  });
});

//Sorting Players by Position
//*****GoaldKepper Field API */
app.get('/GoalKepper', (request, response)=>{
  database.all('SELECT * FROM players WHERE Position = ?', 'Goalkeeper').then(playerMV =>{
    response.json(playerMV)
  })
})
//*****Back Field API */
app.get('/BackField', (request, response)=>{
  database.all('SELECT * FROM players WHERE Position = ?', 'Defender').then(playerMV =>{
    response.json(playerMV)
  })
})
/***** Mind Field API */
app.get('/MidField', (request, response)=>{
  database.all('SELECT * FROM players WHERE Position = ?', 'Midfielder').then(playerMV =>{
    response.json(playerMV)
  })
})

/***** Front Field API */
app.get('/FrontField', (request, response)=>{
  database.all('SELECT * FROM players WHERE Position = ?', 'Forward').then(playerMV =>{
    response.json(playerMV)
  })
})

//hämtar data från formulär 
app.post('/submit-user',  (request, response) => {
  const submit = request.body;
  console.log(submit)
  console.log(submit.userName, submit.teamName, submit.points)
  response.send(submit.userName +' '+ submit.teamName +' '+ submit.points)
  database.run('INSERT INTO Highscore VALUES (?, ?, ?)', [submit.userName, submit.teamName, submit.points])
      .then(() => {
  })
})

app.listen(3000);
