import React from 'react'
import BtceBitcoinUsd from './BtceBitcoinUsd'

export default function BtceWrapper({
  value
}) {
  return (
    <div>
      <BtceBitcoinUsd value={ value } />
    </div>
  )
}