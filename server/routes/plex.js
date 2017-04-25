const express = require('express');
const router = express.Router();

const plexAPI = require('plex-api');

var plexClient = new plexAPI(require('../config/plex.json'));

router.get('/search', (req, res) => {
  let search = req.query.search;
  plexClient.query(`/search?query=${search}`).then(function (response) {
    res.json(response.MediaContainer.Metadata || []);
  }, function (err) {
    console.log(`Error searching: ${err}`);
    res.status(400).send(err);
    //throw new Error('Could not connect to server');
  });
});

router.get('/', (req, res) => {
  let key = req.query.key;

  plexClient.query(`/library/metadata/${key}`).then(function (response) {
    res.json(response.MediaContainer.Metadata[0] || [])
  }, function (error) {
    res.status(400).send(error);
  });
})

module.exports = router;