import React from 'react'

export default function Bitcoin({
  bitBalance
}) {
  return (
    <div>
      <h2>{ bitBalance.final_balance } </h2>
    </div>
  )
}