import Airtable from 'airtable'

const nodemailer = require('nodemailer')

var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID)

export default function Newsletter(req, res) {
  if (req.method === 'POST') {
    if (req.body.email && req.body.message) {
      base('Contact data').create(
        [
          {
            fields: {
              email: req.body.email,
              message: req.body.message,
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error(err)
            return
          }
          records.forEach(function (record) {
            console.log(record.getId())
          })
        },
      )

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use TLS
        auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.USER_PASSWORD,
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      })

      let message = {
        from: process.env.USER_EMAIL,
        to: 'test@gmail.com',
        subject: `new contact form submission from ${req.body.email}`,
        text: `
        from: ${req.body.email}

        ---
        
        ${req.body.message}
        `,
      }

      transporter.sendMail(message, (err, data) => {
        if (err) {
          console.log('there was an error', err)
          res.json({
            status: 'fail',
          })
        } else {
          res.json({
            status: 'success',
          })
        }
      })
    }
  }
}
