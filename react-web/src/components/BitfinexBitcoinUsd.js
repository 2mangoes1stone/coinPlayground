import React from 'react'

export default function BitfinexBitcoinUsd({
  value
}) {
  return (
    <div>
      <h4>Bitfinex_USD/BTC - { value.price }</h4>
    </div>
  )
}