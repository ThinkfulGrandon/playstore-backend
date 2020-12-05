const morgan = require('morgan');
const express = require('express');

const app = express();
app.use(morgan('common'));

const playlist = require('./STORE');

app.get('/apps', (req, res) => {
    res.send("hello")
    res.json(playlist)
})

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });