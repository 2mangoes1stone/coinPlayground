import React from 'react'

export default function BitstampBitcoinUsd({
  value
}) {
  return (
    <div>
      <h4>Bitstamp_USD/BTC - { value.price }</h4>
    </div>
  )
}