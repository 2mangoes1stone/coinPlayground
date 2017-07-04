import React from 'react'
import Ethereum from './Ethereum'
import Refresh from './Refresh'

export default function EthereumWrapper({
  etherBalance, onUpdate
}) {
  return (
    <div>
      <Ethereum etherBalance={ etherBalance }  />
      <Refresh onUpdate={ onUpdate } />
    </div>
  )
}