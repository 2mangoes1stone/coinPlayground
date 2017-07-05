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
    bitfinexEthUsdPrice: null,
    btceBitcoinUsdPrice: null,
    btceEthUsdPrice: null,
    bitstampBitcoinPrice: null,
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

  fetchBitfinexEthUsdPrice = () => {
    fetch('/livecoinprices/bitfinex/ethusd')
      .then(res => res.json())
      .then(bitfinexEthUsdPrice => {
        this.setState({ bitfinexEthUsdPrice })
        setTimeout(this.fetchBitfinexEthUsdPrice, 10000)
      })
      .catch(error => {
        this.setState({ error })
        setTimeout(this.fetchBitfinexEthUsdPrice, 10000)
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

  fetchBtceEthUsdPrice = () => {
    fetch('/livecoinprices/btc-e/ethusd')
      .then(res => res.json())
      .then(btceEthUsdPrice => {
        this.setState({ btceEthUsdPrice })
        setTimeout(this.fetchBtceEthUsdPrice, 10000)
      })
      .catch(error => {
        this.setState({ error })
        setTimeout(this.fetchBtceEthUsdPrice, 10000)
      })
      // setInterval(this.fetchBtceEthUsdPrice, 20000);
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
      bitfinexEthUsdPrice, btceBitcoinUsdPrice, btceEthUsdPrice, bitstampBitcoinPrice
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
            !!bitfinexBitcoinUsdPrice && !!bitfinexEthUsdPrice ? (
              <BitfinexWrapper
                btcValue={ bitfinexBitcoinUsdPrice }
                ethValue={ bitfinexEthUsdPrice }
              />
            ) : (
              <p>loading..</p>
            )
          }
        </div>  
        <div>
          {
            !!btceBitcoinUsdPrice && !!btceEthUsdPrice ? (
              <BtceWrapper
                btcValue={ btceBitcoinUsdPrice }
                ethValue={ btceEthUsdPrice }
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
                btcValue={ bitstampBitcoinPrice } 
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
    this.fetchBitfinexEthUsdPrice()
    this.fetchBtceBitcoinUsdPrice()
    this.fetchBtceEthUsdPrice()
    this.fetchBitstampBitcoinUsdPrice()

  }
  
}

export default App;