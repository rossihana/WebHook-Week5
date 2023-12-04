const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodeParser = bodyParser.urlencoded({ extended: false })

app.use(cors())
app.use(jsonParser)
app.use(urlencodeParser)
const port = 3001

app.get('/', (req, res) => {
  res.send('Website-b')
})

app.get('/trigger-a', async (req, res) => {
    try {
        const data = {
            something: "Ini dari a",
        }
        const response = await fetch('http://localhost:3000/github-event', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        res.json('Event A success')
    } catch (error) {
        console.error(error);
    }
})


app.get('/trigger-b', async (req, res) => {
    try {
        const data = {
            something: "Ini dari b",
        }
        const response = await fetch('http://localhost:3000/github-event', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })

        res.json('Event A success')
    } catch (error) {
        console.error(error);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})