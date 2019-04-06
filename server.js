const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config();
const app = express();


//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

app.post("/api/v1", (req, res) => {
    const data = req.body;

    const smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: data.email,
        to: process.env.EMAIL,
        subject: "|| NEW EMAIL FROM PORTFOLIO CONTACT FORM||",
        html: `<p>${data.name1}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>
            <p>${data.location}</p>
            <p>${data.project}</p>
            <p>${data.comment}</p>`
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            alert("Message failed to send.")
            res.send(error);
        } else {
            alert("Message sent!")
            res.send("Success");
        }
        smtpTransport.close();
    });
});

app.listen(9000, () => {
    console.log("server is running on port 9000");
});
