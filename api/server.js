const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())

server.use('/test', (req, res) => {
  {res.send({ test: true })}
})

const port = 9999

server.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
})