const mongoose = require("mongoose");

const ApplicantSchema = mongoose.Schema({
    name: { type: String, required: true },
    investment_id: { type: String, required: true },
    contact_number: { type: Number, required: true },
    email: { type: String, required: true },
    pan_number: { type: String, required: true },
    date_of_birth: { type: String},
    pan_url: { type: String },
    aadhar_url: { type: String },
})

module.exports = new mongoose.model("Applicants", ApplicantSchema);