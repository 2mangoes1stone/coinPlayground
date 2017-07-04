import React from 'react'

export default function Ethereum({
  etherBalance
}) {
  return (
    <div>
      <h2>{ etherBalance.balance } </h2>
    </div>
  )
}