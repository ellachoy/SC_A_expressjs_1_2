const express = require('express')
const app = express()
//public zugreifen.!!
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello Ella!')
// })한번 res.반응하면, 다ㅁㅡㅗ 안너머가.

//server
console.log(__dirname)
app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

//import json from
const movies = require('./data/movies.json')
console.log(movies)

//mit json
app.get('/movies', (req, res) => {
  res.json(movies)
})

//muss unten

app.listen(1000, () => {
  console.log(`watching Port 1000`)
})
