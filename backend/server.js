const express = require('express');
const app = express();
const sendEmail = require('./sendEmail'); 
const cors = require('cors')
const port = 3000;

app.use(express.json())
app.use(cors())

app.get((req,res)=>{
  res.send("hello from server...")
})

app.post('/send-email', (req, res) => {
  const { to, subject, html } = req.body;

  sendEmail(to, subject, html);

  res.json({ message: 'Email sent successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
