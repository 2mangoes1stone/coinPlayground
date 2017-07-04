import React from 'react'
import Bitcoin from './Bitcoin'
import Refresh from './Refresh'

export default function BitcoinWrapper({
  balance, onUpdate
}) {
  return (
    <div>
      <Bitcoin balance={ balance }  />
      <Refresh onUpdate={ onUpdate } />
    </div>
  )
}