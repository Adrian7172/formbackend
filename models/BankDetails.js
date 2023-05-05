const mongoose = require("mongoose");

const BankDetailSchema = mongoose.Schema({
    name: { type: String, required: true },
    applicant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Applicants" },
    account_number: { type: String, required: true },
    account_title: { type: String, required: true },
    bank_ifsc: { type: String, required: true },
})

module.exports = new mongoose.model("BankDetails", BankDetailSchema);