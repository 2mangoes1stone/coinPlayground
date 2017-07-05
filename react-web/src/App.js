import React, { Component } from 'react';
import BitcoinWrapper from './components/BitcoinWrapper'
import EthereumWrapper from './components/EthereumWrapper'
import BitfinexWrapper from './components/BitfinexWrapper'
import BtceWrapper from './components/BtceWrapper'
import BitstampWrapper from './components/BitstampWrapper'

import './App.css';

class App extends Component {
  state = {
    error: null,
    bitcoinBalance: null,
    ethereumBalance: null,
    bitfinexBitcoinUsdPrice: null,
    btceBitcoinUsdPrice: null,
    bitstampBitcoinPrice: null
  }

  fetchBitcoinPrice = () => {
    fetch('/bitcoinbalance')
      .then(res => res.json())
      .then(bitcoinBalance => {
        this.setState({ bitcoinBalance })
      })
      .catch(error => {
        this.setState({ error })
      })
  }   

  fetchEthereumPrice = () => {
    fetch('/ethereumbalance')
      .then(res => res.json())
      .then(ethereumBalance => {
        this.setState({ ethereumBalance })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  fetchBitfinexBitcoinUsdPrice = () => {
    fetch('/livecoinprices/bitfinex/btcusd')
      .then(res => res.json())
      .then(bitfinexBitcoinUsdPrice => {
        this.setState({ bitfinexBitcoinUsdPrice })
        setTimeout(this.fetchBitfinexBitcoinUsdPrice, 10000)
      })
      .catch(error => {
        this.setState({ error })
        setTimeout(this.fetchBitfinexBitcoinUsdPrice, 10000)
      })
      // setInterval(this.fetchBitfinexBitcoinUsdPrice, 5000);
  }

  fetchBtceBitcoinUsdPrice = () => {
    fetch('/livecoinprices/btc-e/btcusd')
      .then(res => res.json())
      .then(btceBitcoinUsdPrice => {
        this.setState({ btceBitcoinUsdPrice })
        setTimeout(this.fetchBtceBitcoinUsdPrice, 10000)
      })
      .catch(error => {
        this.setState({ error })
        setTimeout(this.fetchBtceBitcoinUsdPrice, 10000)
      })
      // setInterval(this.fetchBtceBitcoinUsdPrice, 20000);
  }

  fetchBitstampBitcoinUsdPrice = () => {
    fetch('/livecoinprices/bitstamp/btcusd')
      .then(res => res.json())
      .then(bitstampBitcoinPrice => {
        this.setState({ bitstampBitcoinPrice })
        setTimeout(this.fetchBitstampBitcoinUsdPrice, 10000)
      })
      .catch(error => {
        this.setState({ error })
        setTimeout(this.fetchBitstampBitcoinUsdPrice, 10000)
      })
      // setInterval(this.fetchBitstampBitcoinUsdPrice, 5000);
  }


  render() {
    const { 
      error, bitcoinBalance, ethereumBalance, bitfinexBitcoinUsdPrice,
      btceBitcoinUsdPrice, bitstampBitcoinPrice
    } = this.state
    return (
      <main>
        <div>
          { !!error && <p>{ error.message }</p> }

          {
            !!bitcoinBalance ? (
              <BitcoinWrapper bitBalance={ bitcoinBalance } onUpdate={ this.fetchBitcoinPrice } />
            ) : (
              <p>loading..</p>
            )
          }
        </div>
        <div>
          {
            !!ethereumBalance ? (
              <EthereumWrapper etherBalance={ ethereumBalance } onUpdate={ this.fetchEthereumPrice } />
            ) : (
              <p>loading..</p>
            )
          }
        </div>
        <div>
          {
            !!bitfinexBitcoinUsdPrice ? (
              <BitfinexWrapper
                value={ bitfinexBitcoinUsdPrice } 
                onUpdate={ this.fetchBitfinexBitcoinUsdPrice }
              />
            ) : (
              <p>loading..</p>
            )
          }
        </div>  
        <div>
          {
            !!btceBitcoinUsdPrice ? (
              <BtceWrapper
                value={ btceBitcoinUsdPrice } 
                onUpdate={ this.fetchBtceBitcoinUsdPrice }
              />
            ) : (
              <p>loading..</p>
            )
          }
        </div>
        <div>
          {
            !!bitstampBitcoinPrice ? (
              <BitstampWrapper
                value={ bitstampBitcoinPrice } 
                onUpdate={ this.fetchBitstampBitcoinUsdPrice }
              />
            ) : (
              <p>loading..</p>
            )
          }
        </div>   
      </main>
    )
  }


  componentDidMount() {
    this.fetchBitcoinPrice()
    this.fetchEthereumPrice()
    this.fetchBitfinexBitcoinUsdPrice()
    this.fetchBtceBitcoinUsdPrice()
    this.fetchBitstampBitcoinUsdPrice()

  }
  
}

export default App;