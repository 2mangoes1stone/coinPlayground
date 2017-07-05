import React from 'react'
import BitfinexBitcoinUsd from './BitfinexBitcoinUsd'

export default function BitfinexWrapper({
  value
}) {
  return (
    <div>
      <BitfinexBitcoinUsd value={ value } />
    </div>
  )
}