import React from 'react'
import BitstampBitcoinPrice from './BitstampBitcoinPrice'

export default function BitstampWrapper({
  value
}) {
  return (
    <div>
      <BitstampBitcoinPrice value={ value } />
    </div>
  )
}