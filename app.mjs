import express from 'express'
import path from 'path';
const app = express()

const PORT = process.env.PORT || 3000;

const path = require('path');

app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
  res.send('Hello Express from Render <a href="/erika">erika</a>')
})


// endpoints ... middlewares.. apis?
//send html file

app.get('/erika', (req, res) => {
  //res.send('ERIKA. <a href="/">home</a>')

  res.sendFile('erika.html')
})

app.listen(3000)
//TODO: refactor to use env port.