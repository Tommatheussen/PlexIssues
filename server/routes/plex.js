const express = require('express');
const router = express.Router();

const plexAPI = require('plex-api');

var plexClient = new plexAPI(require('./../config'));

router.get('/search', (req, res) => {
  let query = req.query.search;
  plexClient.query(`/search?query=${query}`).then(function (response) {
    console.log(response.MediaContainer.Metadata);
    res.json(response.MediaContainer.Metadata);
  }, function (err) {
    console.log(`Error searching: ${err}`);
    res.send(err);
    //throw new Error("Could not connect to server");
  });
});

module.exports = router;