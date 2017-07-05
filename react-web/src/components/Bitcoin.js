import React from 'react'

export default function Bitcoin({
  bitBalance
}) {
  return (
    <div>
      <h2>Bitcoin Wallet Balance: { bitBalance.final_balance } </h2>
    </div>
  )
}