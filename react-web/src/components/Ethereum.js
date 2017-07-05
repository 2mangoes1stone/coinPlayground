import React from 'react'

export default function Ethereum({
  etherBalance
}) {
  return (
    <div>
      <h2>Ethereum Wallet Balance: { etherBalance.balance } </h2>
    </div>
  )
}