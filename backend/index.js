const express = require('express')
const sqlite = require('sqlite')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.listen(PORT)

//Making the database global
let database
sqlite.open('fotboll.sqlite').then(database_ => {
    database = database_
})

//Configuring the API 
app.get('/', (request, response) => {
    database.all('SELECT * FROM players').then(players => {
        response.send(players)
        console.log([players])
    })
})