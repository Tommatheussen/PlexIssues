const express = require('express');
const router = express.Router();

const plexAPI = require('plex-api');

var plexClient = new plexAPI(require('./../config'));

router.get('/search', (req, res) => {
  let search = req.query.search;
  plexClient.query(`/search?query=${search}`).then(function (response) {
    res.json(response.MediaContainer.Metadata || []);
  }, function (err) {
    console.log(`Error searching: ${err}`);
    res.send(err);
    //throw new Error('Could not connect to server');
  });
});

router.get('/', (req, res) => {
  let key = req.query.key;

  plexClient.query(key).then(function (response) {
    res.json(response.MediaContainer.Metadata)
  }, function (error) {
    console.log(error);
    res.send(error);
  });
})

module.exports = router;