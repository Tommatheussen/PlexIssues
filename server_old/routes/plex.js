const express = require('express');
const router = express.Router();
const os = require('os');

const database = require('../database');

const rp = require('request-promise');

router.post('/login', async (req, res) => {
  try {
    let loginResult = await rp(loginOptions);
    database.saveToken(loginResult.user.authToken);
    return res.status(204).send();
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get('/search/:term', async (req, res) => {
  let settings = database.loadSettings();
  console.log(settings);
  let searchOptions = {
    method: 'GET',
    uri: `http://${settings.hostname}:${settings.port}/search`,
    headers: getHeaders(),
    json: true,
    qs: {
      query: req.params.term
    }
  };

  try {
    let searchResult = await rp(searchOptions);

    console.log(searchResult);
    return res.send(searchResult.MediaContainer.Metadata || []);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
});

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
