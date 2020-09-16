const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    jsonTransport: true
});

module.exports = transporter;