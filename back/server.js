const express     = require('express')
const app         = express()
const characters  = require('./characters.json')

app.get('/characters', (req, res) => {
  res.json(characters)
})

app.get('/', (req, res) => {
  res.json('hi')
})
  
app.listen(5000)
console.log('Listening on http://localhost:5000')