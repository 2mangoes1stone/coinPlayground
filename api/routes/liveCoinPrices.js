const express = require('express')
const fetch = require('node-fetch')

const router = express.Router()

router.get('/livecoinprices/bitfinex/btcusd', (req,res) => {
  fetch('https://api.bitfinex.com/v1/pubticker/btcusd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      let number = parseFloat(json.ask)
      res.json({ price: number })
    })
    .catch((error) => {
      res.json({ error:error })
    })
})


router.get('/livecoinprices/btc-e/btcusd', (req,res) => {
  fetch('https://btc-e.com/api/3/ticker/btc_usd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      let number = json.btc_usd.buy
      res.json({ price: number})
    })
    .catch((error) => {
      res.json({ error:error })
    })
})

router.get('/livecoinprices/bitstamp/btcusd', (req,res) => {
  fetch('https://www.bitstamp.net/api/v2/ticker/btcusd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      let number = json.ask
      res.json({ price: number})
    })
    .catch((error) => {
      res.json({ error:error })
    })
})

module.exports = router