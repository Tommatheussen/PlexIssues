const express = require('express');
const router = express.Router();
const os = require('os');

const database = require('../database');

const rp = require('request-promise');

router.post('/', async (req, res) => {
  let key = req.body.key;

  let headers = getHeaders();
  headers['X-Plex-Token'] = req.body.token;

  let metadataOptions = {
    method: 'GET',
    uri: `http://${req.body.host}:${req.body.port}/library/metadata/${key}`,
    headers: headers,
    json: true
  };

  try {
    let metadataResult = await rp(metadataOptions);
    return res.send(metadataResult.MediaContainer.Metadata[0] || []);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
});

module.exports = router;
