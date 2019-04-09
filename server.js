const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mg = require('nodemailer-mailgun-transport')

require("dotenv").config();
const PORT = process.env.PORT || 6000;
const app = express();

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Mailgun Info

const mailgunAuth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    }
  }

app.post("/api/form", (req, res, next) => {
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
//Error Handling

app.use((err, req, res, next) => {
    console.error(err);
    return res.send({ message: err.message });
});

//
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});
