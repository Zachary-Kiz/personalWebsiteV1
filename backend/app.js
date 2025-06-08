const express = require('express')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/send_email', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });
      
      // Wrap in an async IIFE so we can use await.
      (async () => {
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch" <maddison53@ethereal.email>',
          to: "zck340350@gmail.com",
          subject: "Hello ✔",
          text: "Hello world?", // plain‑text body
          html: "<b>Hello world?</b>", // HTML body
        });

        res.send("Message sent:", info.messageId);
      })();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})