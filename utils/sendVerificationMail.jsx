const { createMailTransporter } = require('./createMailTransporter.jsx');

const sendVerificationMail = (user) => {
    const transporter = createMailTransporter();
    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: user.email,
        subject: "Verify your email...",
        html: `<p>Hello ${user.name}, verify your email by clicking this link...</p> 
        <a href='${process.env.base_URL}'>Verify Your Email</a>`,
    };

    // 

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Verification email sent");
        }
    });
};

module.exports = { sendVerificationMail };