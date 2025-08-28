import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express()
const PORT = process.env.PORT || 3000;
// const path = require('path');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello Express from Render <a href="/erika">erika</a>')
})


// endpoints ... middlewares.. apis?
//send html file

app.get('/erika', (req, res) => {
  //res.send('ERIKA. <a href="/">home</a>')
  res.sendFile(join(__dirname, 'public', 'erika.html'))
})

app.get('/api/erika', (req, res) => {
  // res.send('erika. <a href="/">home</a>')
  const myVar = 'Hello from server!';
  res.json({ myVar });
})

app.listen(3000)
//TODO: refactor to use env port.