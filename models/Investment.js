const mongoose = require("mongoose");

const InvestmentSchema = mongoose.Schema({
    account_type: { type: String, required: true },
    strategy_name: { type: String, required: true },
    fund_fees_category: { type: String, required: true },
    investment_category: { type: String, required: true },
    communication_address: { type: String, required: true },
    country: { type: String, required: true },
    account_holders: { type: String, required: true },
    quantum_investment: { type: String, required: true },
    investment_mode: { type: String, requied: true }
})

module.exports = new mongoose.model("Investments", InvestmentSchema);