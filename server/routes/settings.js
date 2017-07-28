const express = require('express');
const router = express.Router();

const Settings = require('../models').Settings;

router.get('/initial', (req, res) => {
  Settings.findAll().then(settings => {
    return res.json(settings.length > 0 ? true : false);
  });
});

router.post('/setup', (req, res) => {
  const settings = {
    hostname: req.body.hostname,
    port: req.body.port
  }
  Settings.create(settings)
    .then(settings => {
      return res.json(settings);
    });
});

module.exports = router;
