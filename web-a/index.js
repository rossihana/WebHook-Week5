const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodeParser = bodyParser.urlencoded({ extended: false })

app.use(cors())
app.use(jsonParser)
app.use(urlencodeParser)
const port = 3000

app.get('/', (req, res) => {
  res.send('Website A')
})

app.post('/github-event', (req, res) => {

  if(req.body.something == "Ini dari a"){
    console.log('Ada trigger dari event-a')
    return res.json()
  }
  else if (req.body.something == "Ini dari b"){
    console.log('Ada trigger dari event-b')
    return res.json()
  }

  console.log("something doesn't match")
  res.status(400).json()

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})