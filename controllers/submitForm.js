const Applicants = require("../models/Applicant");
const BankDetails = require("../models/BankDetails");
const Investments = require("../models/Investment");
const Nominees = require("../models/Nominees");
const InvestmentRiskProfilers = require("../models/InvestmentRiskProfiler")

const submitForm = async (req, res) => {
    const {
        account_type,
        strategy_name,
        fund_fees_category,
        investment_category,
        communication_address,
        country,
        account_holders,
        quantum_investment,
        investment_mode,
        accounts: {
            applicant_name,
            applicant_contact,
            mobile_otp,
            applicant_email,
            email_otp,
            applicant_pan,
            bank_type,
            bank_details: {
                bank_name,
                account_number,
                account_title,
                bank_ifsc,
                nominees: {
                    nominee_name,
                    nominee_pan,
                    nominee_email,
                    nominee_contact_number,
                    relation,
                    nominee_percentage
                }
            }
        },
        investment_risk_profilers: {
            investmentExperience,
            investmentStyle,
            portfolioReaction,
            investment_objective,
            risk_tolerance,
            investmentHorizon
        }
    } = req.body
    try {

        /* store Investment */
        const Investment = await Investments.create({
            account_type,
            strategy_name,
            fund_fees_category,
            investment_category,
            communication_address,
            country,
            account_holders,
            quantum_investment,
            investment_mode
        })
        const investment_id = Investment._id;


        /* store Applicant Details */
        const Applicant = await Applicants.create({
            name: applicant_name,
            investment_id,
            contact_number: applicant_contact,
            email: applicant_email,
            pan_number: applicant_pan
        });
        const applicant_id = Applicant._id;

        /* store bank details */
        if (bank_type === "Bank Details") {
            await BankDetails.create({
                name: bank_name,
                applicant_id,
                account_number,
                account_title,
                bank_ifsc,
            })
        }

        /* Nominees Details */
        await Nominees.create({
            name: nominee_name,
            applicant_id,
            contact_number: nominee_contact_number,
            email: nominee_email,
            pan_number: nominee_pan,
            relation,
            nominee_percentage
        })


        /* Store Investment Risk Profilers */
        await InvestmentRiskProfilers.create({
            investment_Experience: investmentExperience,
            investment_style: investmentStyle,
            portfolio_reaction: portfolioReaction,
            investment_objective: investment_objective,
            risk_tolerance: risk_tolerance,
            investment_horizon: investmentHorizon
        })
        res.status(201).json({ data: "the response from the submit form" })
    } catch (err) {
        console.log(err);
    }
}

module.exports = submitForm;
