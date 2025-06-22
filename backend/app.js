const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
const path = require('path');
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
const port = process.env.PORT || 3000

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'], // add all allowed origins here
  credentials: true, // allow cookies (if using)
  methods: ['GET', 'POST', 'OPTIONS'],
}));

app.use(bodyParser.json());

async function mongoConnect() {

  try {

    await client.connect();

    app.get('/jobs', async (req, res) => {
      const jobDB = client.db('Personal_Website').collection('Jobs');
      const jobs = await jobDB.find().limit(3).toArray();
      res.send(jobs);
    });

    app.get('/projects', async (req, res) => {
      const projectDb = client.db('Personal_Website').collection('Projects');
      const projects = await projectDb.find().sort({ timestamp: -1 }).limit(4).toArray();
      res.send(projects);
    });

    app.post('/send_email', (req, res) => {
      const { name, email, message } = req.body;

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PWD,
        },
      });

      (async () => {
        try {
          const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Message from ${name} @ ${email}`,
            text: message,
          });

          if (info.messageId) {
            res.send({ message: 'Message sent!', status: 200 });
          } else {
            res.status(400).send({ error: 'Failed to send message', status: 400 });
          }
        } catch (err) {
          res.status(500).send({ error: 'Error sending email', details: err.message });
        }
      })();
    });

    if (process.env.PROD_ENV === 'production' || process.env.PROD_ENV === 'staging') {
      app.use(express.static(path.join(__dirname, '../dist')));

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../dist/index.html'));
      });
    }

    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB: ', error);
  }
}

mongoConnect();