const nodemailer = require('nodemailer');
require('dotenv').config()

console.log("user email = "+process.env.SERVICE_USER_EMAIL)
console.log(process.env.SERVICE_USER_PASS)

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587, 
  secure: false,
  auth: {
    user: process.env.SERVICE_USER_EMAIL,//This is from email address which is fixed
    pass: process.env.SERVICE_USER_PASS,//Password
  },
});

const sendEmail = (to, subject, html) => {
  const mailOptions = {
    from:process.env.SERVICE_USER_EMAIL,
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
