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




// work on further if need to store incoing data
// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE
// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE
function extractWalletData(json) {
  const balance = json.final_balance
  return { final_balance: balance }
}

function saveWalletDataToDatabase(data) {
  return WalletBalance.create(data)
}


router.post('/bitcoinbalance', (req,res) => {
  fetch('https://btc-e.com/api/3/ticker/btc_usd')
    .then((apires) => apires.json())
    .then((json) => {
      const finalBalance = extractWalletData(json)
      saveWalletDataToDatabase(finalBalance)
      .then((data) => {
        res.json(data)
      })
      console.log(json);
    })
    .catch((error) => {
      res.json({ error:error })
    })
})
// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE
// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE// INCOMPLETE
module.exports = router