const express = require('express');
const router = express.Router();

const database = require('../database');

router.get('/initial', (req, res) => {
  let settings = database.loadSettings();
  return res.send({
    status: settings ? 'exists' : 'notfound'
  });
});

router.post('/setup', (req, res) => {
  const settings = {
    hostname: req.body.hostname,
    port: req.body.port
  };

  database.saveSettings(settings);

  return res.status(201).send();
});

module.exports = router;
