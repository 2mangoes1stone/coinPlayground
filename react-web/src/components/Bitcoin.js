import React from 'react'

export default function Bitcoin({
  balance
}) {
  return (
    <div>
      <h2>{balance.final_balance} </h2>
      {console.log(balance.final_balance)}
    </div>
  )
}