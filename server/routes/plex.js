const express = require('express');
const router = express.Router();
const os = require('os');

const plexAPI = require('plex-api');

const rp = require('request-promise');

var plexClient = new plexAPI(require('../config/plex.json'));

router.post('/login', async (req, res) => {
  //TODO: send request to Plex, and save token
  // TODO: Create library for interaction maybe?
  // https://plex.tv/users/sign_in.json
  // https://github.com/Arcanemagus/plex-api/wiki/Plex.tv
  // https://github.com/phillipj/node-plex-api/blob/master/lib/api.js
  let loginOptions = {
    method: 'POST',
    uri: 'https://plex.tv/users/sign_in.json',
    headers: {
      'X-Plex-Platform': os.platform(),
      'X-Plex-Platform-Version': os.release(),
      'X-Plex-Client-Identifier': 'PlexIssues',
      'X-Plex-Product': 'Plex Issues',
      'X-Plex-Version': '0.1',
      'X-Plex-Device': 'Plex Issues',
      'X-Plex-Device-Name': 'Plex Issues'
    },
    json: true,
    body: {
      user: {
        login: req.body.username,
        password: req.body.password
      }
    }
  }

  try {
    let loginResult = await rp(loginOptions);
    return res.send({ token: loginResult.user.authToken });
  } catch (err) {
    return res.status(400).send(err);
  }

/*
  let devicesOptions = {
    method: 'GET',
    uri: '	https://plex.tv/devices.xml',
    headers: {
      'X-Plex-Token': loginResult.user.authToken
    },
    json: true
  }

  let devicesResult = await rp(devicesOptions);
  console.log(devicesResult);
*/
});

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
