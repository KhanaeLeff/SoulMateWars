const express     = require('express')

const app = express()

app.get('*', (req, res) => {
    res.send(indexHtml)
  })
  
  app.listen(5000)
  console.log('Listening on http://localhost:5000')