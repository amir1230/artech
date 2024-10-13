require("dotenv").config();
const express = require("express");
const cors = require("cors");
var nodemailer = require("nodemailer");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
var transporter = nodemailer.createTransport({
  service: "gmail",
  secure: "false",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});
console.log(process.env.email);
app.get("/", (req, res) => {
  res.send("Hello from server");
});
app.post("/contact", (req, res) => {
  try {
    const { name, subject, message, email } = req.body.contactData;
    if (name && subject && message && email) {
      console.log("This is email ", email);
      
      var mailOptions = {
        from: email,
        to: process.env.email,
        subject: `${subject}`,
        text: `an email from ${email} ${message}`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(400).json({ message: "Unknown Error" });
        } else {
          res.status(200).json({ message: "Messgage Succesfully Sended" });
        }
      });
    } else {
      res.status(400).json({ message: "Insufficient Details" });
    }
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Unknown Error" });
  }
});
const port = process.env.PORT;
app.listen(port, () => {

});