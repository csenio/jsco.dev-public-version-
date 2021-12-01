export default function Newsletter(req, res) {
  if (req.method === 'POST') {
    if (req.body.email) {
      fetch(`https://emailoctopus.com/api/1.5/lists/${EMAIL_OCTOPUS_ID}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: req.body.email,
          api_key: process.env.EMAIL_OCTOPUS_API_KEY,
        }),
      })
        .then((response) => response.json())
        .then((result) => res.send(result))
        .catch((err) => res.status(400).json({err}))
    }
  }
}
