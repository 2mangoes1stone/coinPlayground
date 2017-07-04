require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const walletBalanceRouter = require('./routes/walletBalance')

r = require('./routes/walletBalance')

const server = express()

server.use(bodyParser.json())

server.use('/test', (req, res) => {
  {res.send({ test: true })}
})

server.use(walletBalanceRouter)

const port = 9999

server.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
})