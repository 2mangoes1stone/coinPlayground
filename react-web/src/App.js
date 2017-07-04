import React, { Component } from 'react';
import BitcoinWrapper from './components/BitcoinWrapper'
import EthereumWrapper from './components/EthereumWrapper'

import './App.css';

class App extends Component {
  state = {
    error: null,
    bitcoinBalance: null,
    ethereumBalance: null
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

  render() {
    const { error, bitcoinBalance, ethereumBalance } = this.state
    return (
      <main>
        <div>
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
      </main>
    )
  }
  componentDidMount() {
    this.fetchBitcoinPrice()
    this.fetchEthereumPrice()
  }
}

export default App;