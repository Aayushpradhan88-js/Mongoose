const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()
const bcrypt = require('bcrypt');

app.use(cookieParser());

app.get('/', (req, res) => {
  //To set a cookie we can use res.cookie
  res.cookie("name", "aayush");
  res.send("done");
})

app.get('/read', (req, res) => {
  //To read a cookie we can simply write these code and make sure that we have to require cookie-parse as well.
  console.log(req.cookies)
  res.send("coding");
})

//BCRYPT

app.get('/auth', (req, res) => {
  bcrypt.gensalt(10, (err, salt) => {
    bcrypt.hash('authentication', salt, (err, hash) => {
      console.log(hash)
    })
  })
})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})