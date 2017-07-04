const express = require('express')
const fetch = require('node-fetch')
const WalletBalance = require('../models/walletBalance')

const router = express.Router()

// make bitcoin wallet address private
const bitcoin = process.env.BITCOIN_ADDRESS

router.get('/bitcoinBalance', (req, res) => {
  fetch(`https://blockchain.info/balance?active=${bitcoin}`)
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      res.json(json[bitcoin])
    })
    .catch((error) => {
      res.json({ error:error })
    })
})

// make ether wallet address private
const ether = process.env.ETHER_ADDRESS

router.get('/ethereumBalance', (req, res) => {
  fetch(`https://etherchain.org/api/account/${ether}`)
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      res.json(json.data)
    })
    .catch((error) => {
      res.json({ error:error })
    })
})



module.exports = router