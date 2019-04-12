const express = require('express');
const emailRouter = express.Router();
const nodemailer = require("nodemailer");
const mg = require('nodemailer-mailgun-transport')
require("dotenv").config();

//Mailgun Info
const mailgunAuth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    }
  }

//POST Email
emailRouter.post("/", (req, res, next) => {
    console.log(req.body);
    const data = req.body;

    let nodemailerMailGun = nodemailer.createTransport(mg(mailgunAuth))

    let mailOptions = {
        from: '"Nodemailer Contact" <tyler.william.palmer@gmail.com>',
        to: process.env.EMAIL,
        subject: "|| NEW EMAIL FROM PORTFOLIO CONTACT FORM ||",
        html: `<h3>${data.name1}</h3>
            <ul>
                <li>${data.email}</li>
                <li>${data.message}</li>
                <li>${data.location}</li>
                <li>${data.project}</li>
            </ul>
                <h3>Message: </h3>
                <p>${data.comment}</p>`
    };

    nodemailerMailGun.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log("Message failed to send" + err);
        } else {
            console.log("Message sent!" + res);
        }
    });
});

module.exports = emailRouter