// var express = require('express');
// var router = express.Router();
// var nodemailer = require('nodemailer');

// router.post("/send", (req, res, next) => {
//     const data = req.body;

//     const smtpTransport = nodemailer.createTransport({
//         service: "Gmail",
//         port: 465,
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD
//         }
//     });

//     transporter.verify((error, success) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Server is ready to take messages');
//         }
//       });

//     const mailOptions = {
//         from: data.email,
//         to: process.env.EMAIL,
//         subject: "|| NEW EMAIL FROM PORTFOLIO CONTACT FORM||",
//         html: `<p>${data.name1}</p>
//             <p>${data.email}</p>
//             <p>${data.message}</p>
//             <p>${data.location}</p>
//             <p>${data.project}</p>
//             <p>${data.comment}</p>`
//     };

//     smtpTransport.sendMail(mailOptions, (error, response) => {
//         if (error) {
//             alert("Message failed to send.")
//             res.send(error);
//         } else {
//             alert("Message sent!")
//             res.send("Success");
//         }
//         smtpTransport.close();
//     });
// });