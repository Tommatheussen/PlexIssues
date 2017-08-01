const express = require('express');
const router = express.Router();

const Settings = require('../models').Settings;

router.get('/initial', (req, res) => {
  Settings.findAll().then(settings => {
    return res.json({ settings: settings[0] });
  });
});

router.post('/setup', (req, res) => {
  const settings = {
    hostname: req.body.hostname,
    port: req.body.port,
    login: req.body.login
  }
  Settings.create(settings)
    .then(settings => {
      return res.sendStatus(200);
    });
});

module.exports = router;
