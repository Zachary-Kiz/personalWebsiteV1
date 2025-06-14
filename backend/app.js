const express = require('express')
const cors = require('cors');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb')
dotenv.config()

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const app = express()
const port = 3000

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // add all allowed origins here
  credentials: true, // allow cookies (if using)
}));

async function mongoConnect() {

  try {

    await client.connect();

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/jobs', async (req, res) => {
      const jobDB = client.db('Personal_Website').collection('Jobs');
      const jobs = await jobDB.find().sort({ timestamp: -1 }).limit(3).toArray();
      res.send(jobs)
    })

    app.post('/send_email', (req, res) => {

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PWD,
            },
          });
          
          // Wrap in an async IIFE so we can use await.
          (async () => {
            const info = await transporter.sendMail({
              from: 'zck340350@gmail.com',
              to: process.env.EMAIL_USER,
              subject: "Hello ✔",
              text: "Hello world?", // plain‑text body
              html: "<b>Hello world?</b>", // HTML body
            });

            res.send("Message sent:", info.messageId);
          })();
    })

    app.listen(port, () => {
      console.log(`App listening on port ${port}`)
    })
  } catch (error) {
    console.error('Failed to connect to MongoDB: ', error);
  }
}

mongoConnect()
