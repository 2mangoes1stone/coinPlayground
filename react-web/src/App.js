import React, { Component } from 'react';
import BitcoinWrapper from './components/BitcoinWrapper'

import './App.css';

class App extends Component {
  state = {
    error: null,
    bitcoinBalance: null
  }

  fetchPrice = () => {
    fetch('/bitcoinbalance')
      .then(res => res.json())
      .then(bitcoinBalance => {
        this.setState({ bitcoinBalance })
      })
      .catch(error => {
        this.setState({ error })
      })
  }   

  render() {
    const { error, bitcoinBalance } = this.state
    return (
      <main>
      {
        !!bitcoinBalance ? (
          <BitcoinWrapper balance={ bitcoinBalance } onUpdate={ this.fetchPrice } />
        ) : (
          <p>loading..</p>
        )
      }
        
      </main>
    )
  }
  componentDidMount() {
    this.fetchPrice()
  }
}

export default App;
