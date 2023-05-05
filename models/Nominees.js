const mongoose = require("mongoose");

const NomineesSchema = mongoose.Schema({
    name: { type: String, required: true },
    applicant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Applicants" },
    contact_number: { type: String, required: true },
    email: { type: String, required: true },
    pan_number: { type: String, required: true },
    date_of_birth: { type: String },
    relation: { type: String, requied: true },
    nominee_percentage: { type: String, required: true }
})

module.exports = new mongoose.model("Nominees", NomineesSchema);