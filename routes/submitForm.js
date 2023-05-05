const express = require("express");
const submitForm = require("../controllers/submitForm");

const route = express.Router();

/* submit form */
route.post("/", submitForm);

module.exports = route;