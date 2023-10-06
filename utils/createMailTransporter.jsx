const nodemailer = require('nodemailer');

let createMailTransporter = () => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    return transporter;
}

module.exports = { createMailTransporter };