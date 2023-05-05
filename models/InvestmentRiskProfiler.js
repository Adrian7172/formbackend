const mongoose = require("mongoose");

const InvestmentRiskProfilerSchema = mongoose.Schema({
    investment_Experience: { type: String, required: true },
    investment_style: { type: String, required: true },
    portfolio_reaction: { type: String, required: true },
    investment_objective: { type: String, required: true },
    risk_tolerance: { type: String, required: true },
    investment_horizon: { type: String, required: true },
})

module.exports = new mongoose.model("InvestmentRiskProfilers", InvestmentRiskProfilerSchema);