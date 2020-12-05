const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(morgan('common'));
app.use(cors())

const playlist = require('./STORE');

app.get('/apps', (req, res) => {
    const {search = "", sort, genre} = req.query;
    if(sort) {
        if(!['App', 'Rating'].includes(sort)) {
            return res.status(400).send(
                'Sort must be of either "Title", or "Rating"')
        }
    }

    let results = playlist.filter(apps => 
        apps.App.toLowerCase().includes(search.toLowerCase())
    )

    if(genre) {
        results = results.filter(apps =>
            apps.Genres === genre
        )
    }

    if (sort) {
        results.sort((a, b) => {
          return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
        });
      }

    res.json(results);

})

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
  });