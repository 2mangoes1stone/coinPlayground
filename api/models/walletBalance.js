const mongoose = require('mongoose')
require('./init')

const walletBalanceSchema = mongoose.Schema({
  "final_balance": Number
})

const WalletBalance = mongoose.model('WalletBalance', walletBalanceSchema)

module.exports = WalletBalance