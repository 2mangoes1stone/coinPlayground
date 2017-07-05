const express = require('express')
const fetch = require('node-fetch')
const emitter = require('events')
const router = express.Router()

var audRate = 0;
var rateEmitter = new emitter();

// get aud convertion rate from api
getAudRate = () => {
  fetch('http://api.fixer.io/latest?base=USD')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json into aud multiplier
      audRate = parseFloat(json.rates.AUD)
      // set emitter to wait for event
      rateEmitter.emit( 'rateAcquired' )
    })
}

// calculate aud value
converter = (amount) => {
    return amount * audRate;
}

// get btc/usd from bitfinex
router.get('/livecoinprices/bitfinex/btcaud', (req,res) => {
  // get convertion rate when api is called
  getAudRate()
  // invoke event emmiter to now run the following function
  rateEmitter.on( 'rateAcquired', function() {
    fetch('https://api.bitfinex.com/v1/pubticker/btcusd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      var usd = parseFloat(json.ask)
      var priceAud = converter(usd)
      res.json({ btcPrice: priceAud })
    })
    .catch((error) => {
      res.json({ error:error })
    })
  } );
})

// get btc/usd from BTC-E
router.get('/livecoinprices/btc-e/btcusd', (req,res) => {
  fetch('https://btc-e.com/api/3/ticker/btc_usd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      let number = json.btc_usd.buy
      res.json({ btcPrice: number})
    })
    .catch((error) => {
      res.json({ error:error }) })
})

// get btc/usd from bitstamp
router.get('/livecoinprices/bitstamp/btcusd', (req,res) => {
  fetch('https://www.bitstamp.net/api/v2/ticker/btcusd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      let number = json.ask
      res.json({ btcPrice: number})
    })
    .catch((error) => {
      res.json({ error:error })
    })
})

// get eth/usd from bitfinex
router.get('/livecoinprices/bitfinex/ethusd', (req,res) => {
  fetch('https://api.bitfinex.com/v1/pubticker/ethusd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      let number = parseFloat(json.ask)
      res.json({ ethPrice: number })
    })
    .catch((error) => {
      res.json({ error:error })
    })
})

// get eth/usd from BTC-E
router.get('/livecoinprices/btc-e/ethusd', (req,res) => {
  fetch('https://btc-e.com/api/3/ticker/eth_usd')
    .then((apiRes) => apiRes.json())
    .then((json) => {
      // massage incoming json data to pure name value pairs
      let number = json.eth_usd.buy
      res.json({ ethPrice: number})
    })
    .catch((error) => {
      res.json({ error:error })
    })
})


// Bitstamp doesnt sell ETH!!!!


module.exports = router